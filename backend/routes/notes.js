const express =require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.send({api:"v1",success:true})
})

module.exports = router;