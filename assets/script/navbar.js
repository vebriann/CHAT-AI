var header = document.querySelector(".navbar");

function resposiveWeb() {

    var lebar = window.innerWidth;

    if (lebar >= 992) {
        document.getElementById("navbar").classList.remove("bg-navbar");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 1) {
                header.classList.toggle("sticky", window.scrollY > 1);
            } else {
                document.getElementById("navbar").classList.remove("sticky");
            }
        })
    } 
    else {
        document.getElementById("navbar").classList.add("bg-navbar");
        document.getElementById("navbar").classList.remove("sticky");
        
    } 
}

// Add a listener for the 'resize' event
window.addEventListener("resize", resposiveWeb);

// Call the function initially to apply responsive design based on initial screen width
resposiveWeb();
