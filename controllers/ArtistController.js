let peopleModel = require('../models/artistData');

exports.getAllArtists = (req,res,next) => {
   let Peoples = peopleModel.getall();
   
   Peoples.then( ([rows, fieldData]) => {
        res.render('artist', {iniS: "", artist: rows, artistCSS: true });
   });
   
};

exports.getArtists = (req,res,next) => {
   let search = req.query.search;
   let Peoples = peopleModel.getartists(search);
   
   Peoples.then( ([rows, fieldData]) => {
        res.render('artist', {iniS: search, artist: rows, artistCSS: true });
   });
   
};

exports.postAddArtists = (req,res,next) => {
    let p_name = req.body.Name;
    let p_about = req.body.About;
    let p_imageURL = req.body.URL;
    
    let pOject = {
       name: p_name,
       about: p_about,
       imageURL: p_imageURL
    }
    let Peoples = peopleModel.add(pOject);
    Peoples.then( ([rows, fieldData]) => {
        res.redirect(301, '/artists');
   });
    
};

exports.postDeleteArtists = (req,res,next) => {
    let id = req.params.id;
    let Peoples = peopleModel.delete(id);
    Peoples.then( ([rows, fieldData]) => {
        res.redirect(301, '/artists');
   });
   
};

exports.transport = (req,res,next) => {
      res.redirect(301, '/');
};