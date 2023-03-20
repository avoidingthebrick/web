//CONSTANTS
const mobile = window.matchMedia("(max-width: 1085px)");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const header = document.getElementById("header");
const headerTitle = document.getElementById("header_title");
const header_scroll = document.getElementById("header_scroll");
const header_nav = document.getElementById("header_nav");
const navCont = document.getElementById("nav_cont");
const navBtn = document.getElementById("nav_btn");
const nav = document.getElementsByTagName("nav")[0];
const lightbox = document.getElementById("lightbox");
const viz = document.getElementById("image_viz");
const scrollTollerance = 150;


// When the user scrolls the page, execute myFunction
window.onscroll = function() {changeOpening(window.pageYOffset)};


function changeOpening() {
    // Change the viz image
    if (mobile.matches) {
        viz.src = "../assets/imgs/1/image27_mobile.svg";
        if (navCont.style.display == "none") {nav.style.display = "none"}
    }
    else{viz.src = "../assets/imgs/1/image27.svg";}
    
    // Get the offset position of every opening
    let pos_0 = zero.offsetTop;
    let pos_1 = one.offsetTop;
    let pos_2 = two.offsetTop;
    let pos_3 = three.offsetTop;
    let pos_4 = four.offsetTop;
    
    if (window.pageYOffset > pos_0+scrollTollerance && window.pageYOffset < pos_1+scrollTollerance){
        header.style.backgroundColor = "var(--c0)";
        headerTitle.innerHTML = "Inside the community";
        document.querySelector(':root').style.setProperty('--navColor', '#ffedff');
    }else if (window.pageYOffset > pos_1+scrollTollerance && window.pageYOffset < pos_2+scrollTollerance){
        header.style.backgroundColor = "var(--c1)";
        headerTitle.innerHTML = "The playground";
        document.querySelector(':root').style.setProperty('--navColor', '#fffccd');
   }else if (window.pageYOffset > pos_2+scrollTollerance && window.pageYOffset < pos_3+scrollTollerance){
        header.style.backgroundColor = "var(--c2)";
        document.querySelector(':root').style.setProperty('--navColor', '#caffe1');
        headerTitle.innerHTML = "The modding movement";
    }else if (window.pageYOffset > pos_3+scrollTollerance && window.pageYOffset < pos_4+scrollTollerance){
        header.style.backgroundColor = "var(--c3)";
        headerTitle.innerHTML = "Then outside the community";
        document.querySelector(':root').style.setProperty('--navColor', '#ffe6c8');
    }else if (window.pageYOffset > pos_4+scrollTollerance){
        header.style.backgroundColor = "var(--c4)";
        headerTitle.innerHTML = "Resources";
        document.querySelector(':root').style.setProperty('--navColor', '#dcf0ff');
    }else{
        headerTitle.innerHTML = "Avoiding the brick";
        header.style.backgroundColor = "var(--c4)";
        document.querySelector(':root').style.setProperty('--navColor', 'white');
    }

    if (window.pageYOffset > pos_0+scrollTollerance) {
        if(mobile.matches == false){nav.style.display = "initial";}//else{nav.style.display = "none";}
        if (mobile.matches) {
            header_nav.style.display = "initial";
            header_scroll.style.display = "none";
        }else{
            header_scroll.style.display = "initial";
            header_nav.style.display = "none";
        }
    }else{
        nav.style.display = "none";
        header_scroll.style.display = "none";
        header_nav.style.display = "none";
    }

}


function triggerNav(isMobile){
    if (navCont.style.display == "none") {
        nav.style.display = "initial";
        navCont.style.display = "block";
        navBtn.innerHTML = "CONTENTS -";
        header_nav.children[0].innerHTML ="–";
    }else{
        if (isMobile) {nav.style.display = "none";}
        navCont.style.display = "none";
        navBtn.innerHTML = "CONTENTS +";
        header_nav.children[0].innerHTML ="+";
    }
  }


function openToast(id, onlymobile, color){
    if (onlymobile == false || mobile.matches) {
        let note = document.getElementById(id);
        let toast = document.getElementById("toast");
        toast.innerHTML = note.innerHTML;
        toast.style.display = "initial";
        toast.style.backgroundColor = "var(--"+color+")";
    }
    if (onlymobile) {document.getElementById(id).scrollIntoView()}
}

function closeToast(){
    document.getElementById("toast").style.display = "none";
}

function closeLightbox(){
    lightbox.children[0].src = "";
    lightbox.style.display = "none";
}

function openImg(elem){
    if(mobile.matches == false) {
        lightbox.style.display = "flex";
        lightbox.children[0].src = elem.src;
    }
}

function textSize(increase){
    let current = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--m').replace("px", ""));
    if (increase && current < 24) {current = current + 2}else if (!increase && current > 16) {current = current - 2}
    document.documentElement.style.setProperty('--m', current+"px");
}

changeOpening();


