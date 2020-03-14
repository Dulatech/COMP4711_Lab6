exports.transport = (req,res,next) => {
   let u_name = req.body.name;
   let u_pass = req.body.password;
   if(u_name == "A01050870" && u_pass == "password"){
      res.redirect(301, '/artists');
}
   
};