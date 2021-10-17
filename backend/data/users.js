import bcrypt from "bcryptjs";
const users = [{
    name: "yacine",
    email: "yac.zitouni1962@gmail.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: true,
},
{
    name: "billel",
    email: "bill@gmail.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: false,
},
{
    name: "houcine",
    email: "houcine@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: false,
},
{
    name: "hassan",
    email: "hassan@example.com",
    password: bcrypt.hashSync("123456", 8),
    isAdmin: false,
},
];
export default users;