exports.transport = (req, res, next) => {
   let u_name = req.body.name;
   let u_pass = req.body.password;
   if (u_name == "A01050870" && u_pass == "password") {
      req.session.u_name = u_name;
      res.redirect(301, '/artists');
   } else {
      res.render('login', {
         errorLog: "Incorrect Username or Password",
         loginCSS: true
      });
   }
};