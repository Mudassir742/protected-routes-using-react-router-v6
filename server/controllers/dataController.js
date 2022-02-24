exports.getData = (req,res)=>{
    res.send({message:req.user})
}