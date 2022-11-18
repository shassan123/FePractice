// function getInputValue(){
//     let inputVAl = document.getElementsByClassName("inputclass")[0].value;
//     alert(inputVal)
// }
// function getInputValue(){
//     var input_value =  document.getElementById("input").value;
//     console.log(input_value);
// }
let hideClass = document.querySelector(".all-grids");
let isShow="true";
function getInputValue(){
    if (isShow){
        hideClass.style.display = "none";
        isShow=false;
    } else {
        hideClass.style.display = "";
        isShow=true;
    }   
}