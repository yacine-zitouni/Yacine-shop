import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
} from '../controllers/orderController.js'
import  auth,{ admin } from '../authMiddleware.js'

router.route('/').post(auth, addOrderItems).get(auth, admin, getOrders)
router.route('/myorders').get(auth, getMyOrders)
router.route('/:id').get(auth, getOrderById)
router.route('/:id/pay').put(auth, updateOrderToPaid)
router.route('/:id/deliver').put(auth, admin, updateOrderToDelivered)

export default router