const sliderBtn = document.querySelector(".slider-button");
const nameSpan = document.querySelector(".name-span");
const cat = document.querySelector(".category-span");
const p = document.querySelector(".testimonial-p");
const img = document.querySelector(".picture");
const spanContainer = document.querySelector(".bottom-span-container");
let i = 0;

const sliderContent = {
    names: ["Tanya Sinclair", "John Tarkpor"],
    categorys: ["UX Engineer", "Junior Front-end Developer"],
    paragraphs: [`“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`, 
    `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`],
    imgSrcs: ["images/image-tanya.jpg", "images/image-john.jpg"]
};

sliderBtn.addEventListener("click", ()=>{
    if(i === 0) i = 1;
    else i = 0;
    sliderChange(i);
    toggleClasses();
    setTimeout(toggleClasses, 1050);
})

function sliderChange(index) {
    nameSpan.textContent = `${sliderContent.names[index]}`;
    cat.textContent = `${sliderContent.categorys[index]}`;
    p.textContent = `${sliderContent.paragraphs[index]}`;
    img.src = `${sliderContent.imgSrcs[index]}`;
}

function toggleClasses() {
    img.classList.toggle("picture-animation");
    p.classList.toggle("testimonial-p-animation");
    spanContainer.classList.toggle("bottom-span-container-animation");
}