const { body, validationResult } = require('express-validator');


const registerRules=[
    body('userName','user name is required').notEmpty(),
    body('email','eamil is required').isEmail(),
    // body('phone','phone must be numbers').isNumeric(),
    body('password','password must have at least 6 charachters').isLength({min:6})
]
const loginRules=[
    body('email','eamil is required').isEmail(),
    body('password','password must have at least 6 charachters').isLength({min:6})
]





const validator=(req,res,next)=>{
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next()
}

    module.exports={registerRules,validator,loginRules}