exports.verifyRole = (role) => {
    return (req,res,next)=>{

        const {user} = req
        console.log(user)
        if(!user){
            return res.status(422).json({error:'unexpected error occured',data:null})
        }

        if(role.includes(user.role)){
            return next()
        }

        return res.status(404).json({error:'user not authorized for this operation',data:null})
    }
}