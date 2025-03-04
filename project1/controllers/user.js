const User = require("../models/user");


async function handleGetAllUser(req, res) {
    const allDbUser = await User.finf({});
    return res.json(allDbUsers); 
    
}
module.exports= {
    handleGetAllUser, 
}