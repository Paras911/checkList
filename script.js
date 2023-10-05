//MEDS-------

let MedsBut = document.getElementById("MedsBut");
let reset = document.getElementById("reset");

MedsBut.addEventListener("click", gjob1);
function gjob1() {
    MedsBut.innerText = "Good Job!"
}
resetMeds.addEventListener("click", rstMeds);
function rstMeds() {
    MedsBut.innerText = "Medicine";
}

//DIET-------

let dietBut = document.getElementById("diet");
let resetDiet = document.getElementById("resetDiet");

diet.addEventListener("click", gjob2);
function gjob2(){
    diet.innerText = "Good job!";
}
resetDiet.addEventListener("click", rstDiet);
function rstDiet() {
    diet.innerText = "Diet"
}

//EXERCISE-------

let exercise = document.getElementById("exercise");
let resetExercise = document.getElementById("resetExercise");

exercise.addEventListener("click", gjob3);
function gjob3(){
    exercise.innerText = "Good job!";
}
resetExercise.addEventListener("click", rstExer);
function rstExer() {
    exercise.innerText = "Exercise"
}

//REST-------

let rest = document.getElementById("rest");
let resetrest = document.getElementById("resetrest");

rest.addEventListener("click", gjob4);
function gjob4(){
    rest.innerText = "Good job!";
}
resetrest.addEventListener("click", rstrest);
function rstrest() {
    rest.innerText = "Rest"
}