//CONSTANTS
const mobile = window.matchMedia("(max-width: 1085px)");

function changeOpening() {
    // Change the viz image
    if (mobile.matches) {
        image27.src = "../assets/imgs/1/image27_mobile.svg";
        image59.src = "../assets/imgs/1/image59_mobile.svg";
        image56.src = "../assets/imgs/1/image56_mobile.png";
        image10.src = "../assets/imgs/2/image10_mobile.jpg";
        image13A.src = "../assets/imgs/2/image13A_mobile.svg";
        image13B.src = "../assets/imgs/2/image13B_mobile.svg";
        image43.src = "../assets/imgs/2/image43_mobile.jpg";
        diagrams.src = "../assets/imgs/2/diagrams1_mobile.jpg";
        if (navCont.style.display == "none") {nav.style.display = "none"}
    }
    else{
        image27.src = "../assets/imgs/1/image27.svg";
        image59.src = "../assets/imgs/1/image59.svg";
        image56.src = "../assets/imgs/1/image56.png";
        image10.src = "../assets/imgs/2/image10.jpg";
        image13A.src = "../assets/imgs/2/image13A.svg";
        image13B.src = "../assets/imgs/2/image13B.svg";
        image43.src = "../assets/imgs/2/image43.jpg";
        diagrams.src = "../assets/imgs/2/diagrams1.jpg";
    }
    
    // Get the offset position of every opening
    let pos_0 = zero.offsetTop;
    let pos_1 = one.offsetTop;
    let pos_2 = two.offsetTop;
    let pos_3 = three.offsetTop;
    let pos_4 = four.offsetTop;
    
    if (window.pageYOffset > pos_0+scrollTollerance && window.pageYOffset < pos_1+scrollTollerance){
        header.style.backgroundColor = "var(--c0)";
        headerLink.href = "#zero";
        if (headerTitle.innerHTML != "Inside the community") {headerTitle.innerHTML = "Inside the community"}
        document.querySelector(':root').style.setProperty('--navColor', '#ffedff');
    }else if (window.pageYOffset > pos_1+scrollTollerance && window.pageYOffset < pos_2+scrollTollerance){
        header.style.backgroundColor = "var(--c1)";
        headerLink.href = "#one";
        if (headerTitle.innerHTML != "The playground") {headerTitle.innerHTML = "The playground"}
        document.querySelector(':root').style.setProperty('--navColor', '#fffccd');
   }else if (window.pageYOffset > pos_2+scrollTollerance && window.pageYOffset < pos_3+scrollTollerance){
        header.style.backgroundColor = "var(--c2)";
        headerLink.href = "#two";
        if (headerTitle.innerHTML != "The modding movement") {headerTitle.innerHTML = "The modding movement"}
        document.querySelector(':root').style.setProperty('--navColor', '#caffe1');
    }else if (window.pageYOffset > pos_3+scrollTollerance && window.pageYOffset < pos_4+scrollTollerance){
        header.style.backgroundColor = "var(--c3)";
        headerLink.href = "#three";
        if (headerTitle.innerHTML != "Then outside the community") {headerTitle.innerHTML = "Then outside the community"}
        document.querySelector(':root').style.setProperty('--navColor', '#ffe6c8');
    }else if (window.pageYOffset > pos_4+scrollTollerance){
        header.style.backgroundColor = "var(--c4)";
        headerLink.href = "#four";
        if (headerTitle.innerHTML != "Resources") {headerTitle.innerHTML = "Resources"}
        document.querySelector(':root').style.setProperty('--navColor', '#dcf0ff');
    }else{
        header.style.backgroundColor = "var(--c4)";
        if (headerTitle.innerHTML != "Avoiding the brick") {headerTitle.innerHTML = "Avoiding the brick"}
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


function openToastNote(id, color){
    let note = document.getElementById(id);
    if (toast.style.display == "initial") {toast.style.display = "none"}
    else if (mobile.matches) {
        toast.innerHTML = note.innerHTML;
        toast.style.display = "initial";
        toast.style.backgroundColor = "var(--"+color+")";
    }else{
        let pos = note.getBoundingClientRect();
        window.scrollTo(0, pos.top + window.scrollY - 68);
    }
}

function openToastGlossaryClick(id, color){
    if (toast.style.display == "initial") {toast.style.display = "none"}
    else if (mobile.matches){
        let note = document.getElementById(id);
        toast.innerHTML = note.innerHTML;
        let tempText = toast.innerHTML.replace("<small>", ": <small>");
        toast.innerHTML = tempText;
        toast.style.display = "initial";
        toast.style.backgroundColor = "var(--"+color+")";
    }
}

function openToastGlossaryOver(id, color){
    if (!mobile.matches) {
        let note = document.getElementById(id);
        toast.innerHTML = note.innerHTML;
        let tempText = toast.innerHTML.replace("<small>", ": <small>");
        toast.innerHTML = tempText;
        toast.style.display = "initial";
        toast.style.backgroundColor = "var(--"+color+")";
    }
}

function closeToastGlossaryOver(){
    if (!mobile.matches) {toast.style.display = "none"}
}

function closeToast(){
    toast.style.display = "none";
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
            subtitle.style.left = subtitleLftPos+"px";
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


function switchInterfaceImg(){
    if (interfaceImgCounter <= 5) {
        interfaceImgCounter++;
    }else{
        interfaceImgCounter = 1;
    }
    if (mobile.matches) {
        diagrams.src = "../assets/imgs/2/diagrams"+interfaceImgCounter+"_mobile.jpg";
    }else{
        diagrams.src = "../assets/imgs/2/diagrams"+interfaceImgCounter+".jpg";
    }
    diagrams_counter.innerHTML = interfaceImgCounter;
}


function getSubtitleLeftPos(title_id){
    let subtitle = document.getElementById(title_id).children[1];
    return subtitle.offsetLeft;
}



function openToastHomeOver(id, color, handle){
    if (!mobile.matches) {
        let source = document.getElementById(id);
        toast.innerHTML = source.innerHTML;
        toast.style.display = "initial";
        toast.style.position = "absolute";
        toast.style.backgroundColor = "var(--"+color+")";
        toast.style.setProperty("left", handle.offsetLeft+"px");
        toast.style.setProperty("top", (handle.offsetTop - (toast.offsetHeight/4))+"px");
    }
}

function openToastHomeClick(id, color, handle){
    if (mobile.matches) {
        let source = document.getElementById(id);
        toast.innerHTML = source.innerHTML;
        toast.style.display = "initial";
        toast.style.position = "absolute";
        toast.style.backgroundColor = "var(--"+color+")";
        //toast.style.setProperty("left", handle.offsetLeft+"px");
        toast.style.setProperty("top", (handle.offsetTop - (toast.offsetHeight/4))+"px");
        toast.setAttribute("visible", "true");
    }
}

function closeToastHomeClick(){
    if (toast.getAttribute("visible") != "true") {
        toast.style.display = "none";
    }else{
        toast.setAttribute("visible", "false");
    }
    
}









