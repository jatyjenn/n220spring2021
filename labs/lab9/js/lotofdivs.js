for (var i=0; i<100; i++) {
    let cont = document.querySelector("#cont")
    let box = document.createElement('div');
    box.style.height = "20px";
    box.style.width = "20px";
    box.style.backgroundColor = randomColor();
    cont.appendChild(box); 
}


function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var colorString = "rgb(" + r + "," + g + "," + b + ")";
    return colorString;
}