const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');
hamburger.addEventListener('click', ()=>{
    navUl.classList.toggle('show');
});




// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const container = document.querySelector(".container");

// hamburger.addEventListener("click", () =>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
    

// })

// document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click", () =>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
// ))

document.addEventListener("DOMContentLoaded", function(event) {
    fetch("snippets/main-snippet.html")
    .then(response=> response.text())
    .then(text=> document.querySelector("#main").innerHTML = text);
})


var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json"

var obj;
fetch("snippets/category-snippet.html")
.then(response=> response.text())
.then(data=>obj=data)
// var propToReplace = "{{" + "name" + "}}";
var finalHtml = "";


var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string
      .replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  }

async function loadMenuCategories(){

    fetch("https://davids-restaurant.herokuapp.com/categories.json")
    .then(function (response) {
        return response.json();        
    })
    .then(function (data) {
        for (var i=0; i<data.length; i++){
            var name = data[i].name;
            var short_name = data[i].short_name
            console.log("name1=",name)
                var obj1 = obj
                obj1 = insertProperty(obj1,"name",name)
                obj1 = insertProperty(obj1, "short_name", short_name)
                // obj1 = obj1.replace(new RegExp(propToReplace, "g"), name)   
                console.log(obj1)
                finalHtml+=obj1
                console.log(finalHtml)
                document.querySelector("#main").innerHTML = finalHtml
                
        }
 
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


}
