import User from "../models/UserModel.js"
import AsyncHandler from "express-async-handler";



//register
export const register = AsyncHandler(async (req, res) => {

    const user = new User(req.body);
    try {

        const token = await user.generateAuthToken();
        res.status(201).send({
            email: user.email,
            name: user.name,
            id: user._id,
            isAdmin: user.isAdmin,
            token,
        });
    } catch (err) {
        if (err.code == "11000") {
            res.status(400).send({ message: "Email is Already in use" })
        }
        res.status(400).send({ message: err.message });
    }
});



export const login = AsyncHandler(async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.send({
            email: user.email,
            name: user.name,
            id: user._id,
            isAdmin: user.isAdmin,
            token,
        });
    } catch (erreur) {
        res.status(400).send({ erreur: "invalid password or email" });
    }
});

export const logout=AsyncHandler(async(req,res)=>{
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()

    } catch (error) {
        res.status(500).send()
    }
})

export const updateProfile = AsyncHandler(async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save();
        const { email, name, isAdmin } = req.user;
        res.send({
            email,
            name,
            isAdmin,
            token: req.token
        })
    } catch (e) {
        res.status(400).send(e)
    }
});


export const getProfile = AsyncHandler(async (req, res) => {
    const { isAdmin, email, name } = req.user
    res.send({
        email,
        name,
        isAdmin,
        token: req.token
    })
});
