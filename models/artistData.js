let db = require('../util/database');

// Add a single individual to the database
function addArtist(data) {
    let sql = "Insert into artist (name, about, imageURL) values ('" + data.name+ "','"+ data.about+ "','" + data.imageURL + "')";
    return db.execute(sql);
}

// Gets all the individuals in the database
function getAllArtists() {
    return db.execute('Select * from artist');
}

// Gets a specific individual from the database
function getArtists(search) {
    return db.execute("Select * from artist where name like '%" + search +"%' or about like '%" + search +"%'");
    // return db.execute("Select * from artist where name like \'\%" + search + "\%\' OR about like \'\%"+search+"\%\'");
}

function deleteArtist(id) {
    return db.execute("Delete from artist where id= " + id);
}

module.exports = {
    add : addArtist,
    delete : deleteArtist,
    getall : getAllArtists,
    getartists: getArtists 
}