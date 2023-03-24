//CONSTANTS
const mobile = window.matchMedia("(max-width: 1085px)");

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
        headerTitle.innerHTML = "The modding movement";
        document.querySelector(':root').style.setProperty('--navColor', '#caffe1');
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
    let toast = document.getElementById("toast");
    let note = document.getElementById(id);
    if (toast.style.display == "initial") {toast.style.display = "none"}
    else if (onlymobile == false || mobile.matches) {
        toast.innerHTML = note.innerHTML;
        toast.style.display = "initial";
        toast.style.backgroundColor = "var(--"+color+")";
    }
    if (onlymobile && !mobile.matches) {
        let pos = note.getBoundingClientRect();
        window.scrollTo(0, pos.top + window.scrollY - 68);
    }else{
        let tempText = toast.innerHTML.replace("<small>", ": <small>");
        toast.innerHTML = tempText;
    }

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
        lightbox.children[1].innerHTML = elem.parentElement.lastElementChild.innerHTML;
    }
}

function textSize(increase){
    let current = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--m').replace("px", ""));
    if (increase && current < 24) {current = current + 2}else if (!increase && current > 16) {current = current - 2}
    document.documentElement.style.setProperty('--m', current+"px");
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animateLetter(id, homepage){
    let title = document.getElementById(id);
    let letters = title.children[0].children;
    let index = getRandomIntInclusive(0, letters.length-1);
    letters[index].classList.add("ext");
    if (homepage) {if (letters[index].innerHTML == "t" || letters[index].innerHTML == "h" || letters[index].innerHTML == "e") {
        let wdt = letters[index].offsetWidth;
        let subtitle = title.children[1];
        let actualLeft = subtitle.offsetLeft;
        subtitle.style.left = actualLeft+(wdt/2)+"px";
    }}
    setTimeout(() => {
        letters[index].classList.remove("ext");
        if (homepage) {if (letters[index].innerHTML == "t" || letters[index].innerHTML == "h" || letters[index].innerHTML == "e") {
            let wdt = letters[index].offsetWidth;
            let subtitle = title.children[1];
            let actualLeft = subtitle.offsetLeft;
            subtitle.style.left = actualLeft-(wdt)+"px";
        }}
    }, 300);
}


function animateTitle(id, iterations, homepage){
    for (let i=0; i < iterations; i++) {
        setTimeout(() => {
            animateLetter(id, homepage);
        }, 200*(i*Math.random()));
    }
}











