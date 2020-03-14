
var showOn = false;

document.getElementById("searchIn")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("search").click();
    }
});

function showDiv() {
    if(!showOn){
        showOn = true;
        document.getElementById('TheAdder').style.display = "block";
    }
    else{
        showOn = false;
        var x = document.getElementById("myForm");
        x.reset(); 
        document.getElementById('TheAdder').style.display = "none";
    }
}



function noValidImg(image){
    image.src = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
}