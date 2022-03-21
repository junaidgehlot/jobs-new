const User = require('../models/user');
const { StatusCodes } = require('Http-status-codes');

const { BadRequestError, UnauthenticatedError } = require('../errors');
// const bcrypt = require('bcryptjs');



const register = async (req, res) => {
    // const { name, email, password } = req.body;
    // if (!name || !email || !password) {
    //     throw new BadRequestError('Please provide name email and password');
    // }
    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(password, salt);
    // const tempUser = {
    //     name,
    //     email,
    //     password: hashPassword
    // }
    const user = await User.create({ ...req.body });
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({user:{name: user.name}, token});
}

const login = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        throw new BadRequestError('Please provide name email and password');
    }
    const user = await User.findOne({email}) 
    if(!user){
        throw new UnauthenticatedError('Invalid credentials');
    }
    const isPasswordCorrect = await user.checkPassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid credentials');
    }


    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user:{name:user.name}, token});
}

module.exports = {
    login,
    register
}