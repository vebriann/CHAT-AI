function resposiveWeb() {
    
    var lebar = window.innerWidth;

    if(lebar <= 420) {
        document.getElementById("started").innerHTML = "Started"
    }
    else {
        document.getElementById("started").innerHTML = "Get_Started"
    }
}

// Add a listener for the 'resize' event
window.addEventListener("resize", resposiveWeb);

// Call the function initially to apply responsive design based on initial screen width
resposiveWeb();
