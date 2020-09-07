const Report=require('../../../models/reports');
module.exports.filter=async function(req,res){
try {
    
    let status= await Report.find({status:req.params.status})
    .populate(
       [
           {
            path:'doctor'
           },
           {
               path:'patient'
           }
       ]);
    
    if(status){

        return res.json(200,{
            message:'Patient has been found',
            data:status
        })

    }else{
        return res.json(200,{
            message:"No Reports Found"
        });
    }

} catch (error) {
    console.log(error);
        return res.json(500,{
            message:'Internal Server Error'
        });
}
}