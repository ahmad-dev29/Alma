let sidebar = document.getElementsByClassName("aside-bar")[0]
let closer = document.getElementsByClassName("close-icon")[0]
let shutter = document.getElementsByTagName("aside")[0]

let searchBar1 = document.getElementsByClassName("Finding")[0]
let barone = document.getElementsByClassName("bar")[0]
let xclosebar = document.getElementsByClassName("sbarclose")[0]



sidebar.addEventListener("click", function () {
    shutter.classList.add("showsidebar")
})

closer.addEventListener("click", function () {
    shutter.classList.remove("showsidebar")
})

searchBar1.addEventListener("click", function () {
    barone.classList.add("ShowSearchBar")
})

xclosebar.addEventListener("click", function () {
    barone.classList.remove("ShowSearchBar")
})

//services section 

let Icons = document.getElementsByClassName("serviesc-iocn")
console.log(Icons);
let contentVisible = document.getElementsByClassName("circle-inner-content")
console.log(contentVisible);

let testimonial = document.getElementsByClassName("test-image")
console.log(testimonial);
let testimonialText =document.getElementsByClassName("reviews-text")
let aboutSection = document.getElementsByClassName("about-click-part")
console.log(aboutSection)

let sliding = document.getElementsByClassName("sliding-content")
console.log(sliding);


// console.log();

for (let j = 0; j < Icons.length; j++) {
    console.log(Icons[j]);

    Icons[j].addEventListener("mouseenter", function () {
        for (let k = 0; k < Icons.length; k++) {
            Icons[k].classList.remove("Effect")
            contentVisible[k].classList.add("hidden-class")
        
        }
        Icons[j].classList.add("Effect")
        contentVisible[j].classList.remove("hidden-class")
        
    })

}

// testmonial section

for (let t =0; t < testimonial.length; t++ ){
    console.log(testimonial[t]);

    testimonial[t].addEventListener("mouseenter", function(){
        for(let m = 0; m < testimonial.length; m++){
            testimonial[m].classList.remove("view")
            testimonialText[m].classList.add("text-hide")
                
        }
        
        testimonial[t].classList.add("view")
        testimonialText[t].classList.remove("text-hide")
    })

}

// About Section

for (let a = 0; a < aboutSection.length; a++) {
    console.log(aboutSection[a]);

    aboutSection[a].addEventListener("click", function () { 
        for (let b = 0; b < aboutSection.length; b++) {
            aboutSection[b].classList.remove("about-class-on");
            sliding[b].classList.remove("left") 
            
        }
        aboutSection[a].classList.add("about-class-on"); 
        sliding[a].classList.add("left") 
    });
}


let navbar = document.getElementsByClassName("navbar")[0]
console.log(navbar);

window.addEventListener("scroll",function(){
    console.log(scrollY);
    if(scrollY < 100){
       console.log("s");
       navbar.classList.remove("bgk")
       
        
    }
    else{
        console.log("j");
        
        navbar.classList.add("bgk")

    }
    
})


