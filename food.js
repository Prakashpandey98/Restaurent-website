let foods = document.getElementById("foods");
let dishs = document.getElementById("dishs");
let tracks = document.getElementById("tracks");

foods.addEventListener("click", function()
{
    foods.style.color="red";
    dishs.style.color="white";
    tracks.style.color="white";

})

dishs.addEventListener("click", function()
{
    foods.style.color="white";
    dishs.style.color="red";
    tracks.style.color="white";

})

tracks.addEventListener("click", function()
{
    foods.style.color="white";
    dishs.style.color="white";
    tracks.style.color="red";

})

let logBtn = document.getElementById("logBtn");

logBtn.addEventListener("click", function()
{
    document.querySelector(".loginPage").style.display="block";
})
let login = document.getElementById("loginBtn");

login.addEventListener("click", function()
{
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    if(email.value == "" || password.value == "")
    {
        alert("Please Enter Email or Password")
    }
    else
    {
        alert("Your are successfully logged In")
        document.querySelector(".loginPage").style.display="none";
    }
})