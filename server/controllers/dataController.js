exports.getData = (req,res)=>{
    console.log(req.user)
    res.send({message:req.user})
}