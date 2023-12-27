const express = require("express");
const app =express();

app.get("/findsum",function(req,res){
    const numa = parseInt(req.query.numa);
    const numb = parseInt(req.query.numb);
    const sum = numa + numb;
    res.send(sum.toString());
});
app.listen(8080);