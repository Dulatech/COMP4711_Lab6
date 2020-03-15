let artistModel = require('../models/artistData');

exports.getAllArtists = async (req, res, next) => {
   if (req.session.u_name) {
      let Artists = await artistModel.getall();
      res.render('artist', {
         iniS: "",
         artist: Artists[0],
         artistCSS: true
      });
   } else {
      res.render('login', {
         errorLog: "",
         loginCSS: true
      });
   }


};

exports.getArtists = async (req, res, next) => {
   if (req.session.u_name) {
      let search = req.query.search;
      let Artists = await artistModel.getartists(search);
      res.render('artist', {
         iniS: search,
         artist: Artists[0],
         artistCSS: true
      });
   } else {
      res.render('login', {
         errorLog: "",
         loginCSS: true
      });
   }
};

exports.postAddArtists = async (req, res, next) => {
   if (req.session.u_name) {
      let a_name = req.body.Name;
      for (var i = 0; i < a_name.length; i++) {
         if (a_name.charAt(i) == "'") {
            a_name = a_name.replace(a_name[i], "''")
            i++;
         } else if (a_name.charAt(i) == '"') {
            a_name = a_name.replace(a_name[i], '""')
            i++;
         }
      }
      let a_about = req.body.About;
      for (var i = 0; i < a_about.length; i++) {
         if (a_about.charAt(i) == "'") {
            a_about = a_about.replace(a_about[i], "''")
            i++;
         } else if (a_about.charAt(i) == '"') {
            a_about = a_about.replace(a_about[i], '""')
            i++;
         }
      }
      let a_imageURL = req.body.URL;
      for (var i = 0; i < a_imageURL.length; i++) {
         if (a_imageURL.charAt(i) == "'") {
            a_imageURL = a_imageURL.replace(a_imageURL[i], "''")
            i++;
         } else if (a_imageURL.charAt(i) == '"') {
            a_imageURL = a_imageURL.replace(a_imageURL[i], '""')
            i++;
         }
      }
      let aObject = {
         name: a_name,
         about: a_about,
         imageURL: a_imageURL
      }
      let Artists = await artistModel.add(aObject);
      res.redirect(301, '/artists');
   } else {
      res.render('login', {
         errorLog: "",
         loginCSS: true
      });
   }
};

exports.postDeleteArtists = async (req, res, next) => {
   if (req.session.u_name) {
      let id = req.params.id;
      let Artists = await artistModel.delete(id);
      res.redirect(301, '/artists');
   } else {
      res.render('login', {
         errorLog: "",
         loginCSS: true
      });
   }
};

exports.transport = (req, res, next) => {
   req.session.destroy((err) => {
      if (err) {
         return console.log(err);
      }
      res.render('login', {
         errorLog: "",
         loginCSS: true
      });
   });
};