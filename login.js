let errorMsg = document.querySelector("form span")
console.log(errorMsg.innerHTML)
if(errorMsg.innerHTML=="") {
    errorMsg.classList.add("error-msg");
    console.log("done1")
}else {
    errorMsg.classList.remove("error-msg");
    console.log("done2")
}