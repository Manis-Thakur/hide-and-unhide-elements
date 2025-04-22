const myImg = document.getElementById('myImg');
const myButton = document.getElementById('mybutton');
//without changeing the layout
myButton.addEventListener('click', () => {

    if (myImg.style.visibility === "hidden") {
        myImg.style.visibility = "visible";
        myButton.textContent = "hide";
    } else {
        myImg.style.visibility = "hidden";
        myButton.textContent = "show";
    }


})