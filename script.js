var tl = gsap.timeline();
// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#home"),
//     smooth:true,
//     lerp:0.075
// })
// const scrolled = new LocomotiveScroll({
//     el: document.querySelector("#intro"),
//     smooth:true,
//     lerp:0.075
// })
// const scroller = new LocomotiveScroll({
//     el: document.querySelector("#work"),
//     smooth:true,
//     lerp:0.1,

// })

// function coordinate(event) {
//     let x = event.clientX + 100;
//     let y = event.clientY + 100;
//     var dot = document.querySelector(".work-image img") ;
//     dot.style.left= x+'px';
//     dot.style.top=y+'px';

// }

tl.from("nav",{
    y:-100,
    duration:0.5,
    // delay:0.5
}
)
tl.from(".body h1",{
    y:-600,
    duration:1
})
tl.from(".body p",{
    y:-100,
    // delay:1,
    stagger:0.15,
    duration:0.5,
    repeat:-1,
    repeatDelay:3
})
tl.from(".body h2",{
    y:200,
    
})

gsap.from(".name",{
    scrollTrigger:".intro",
    x:-800,
    duration:1,
})
gsap.from(".about",{
    scrollTrigger:".intro",
    x:800,
    duration:1,
})



var pic1= document.querySelector(".pic1")
var pic2= document.querySelector(".pic2")
var pic3= document.querySelector(".pic3")
var pic4= document.querySelector(".pic4")
var pic5= document.querySelector(".pic5")
var pic6= document.querySelector(".pic6")
var pic7= document.querySelector(".pic7")
var pic8= document.querySelector(".pic8")
var pic9= document.querySelector(".pic9")
var pic10= document.querySelector(".pic10")
var pic11= document.querySelector(".pic11")
var pic12= document.querySelector(".pic12")
var pic13= document.querySelector(".pic13")
var pic14= document.querySelector(".pic14")
var pic15= document.querySelector(".pic15")
var img= document.querySelector(".work-image img")
pic1.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_77a5340d.jpg"
})
pic1.addEventListener("click",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_77a5340d.jpg"
})
pic2.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_fb2596fc.jpg"
})
pic3.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.49_7b56828e.jpg"
})
pic4.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.04.49_53af1cef.jpg"
})

pic5.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_77a5340d.jpg"
})
pic6.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_fb2596fc.jpg"
})
pic7.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.49_7b56828e.jpg"
})
pic8.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.04.49_53af1cef.jpg"
})
pic9.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_77a5340d.jpg"
})
// pic10.addEventListener("mouseenter",()=>{
//     img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_fb2596fc.jpg"
// })
pic11.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.49_7b56828e.jpg"
})
pic12.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.04.49_53af1cef.jpg"
})

pic13.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_77a5340d.jpg"
})
pic14.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.48_fb2596fc.jpg"
})
pic15.addEventListener("mouseenter",()=>{
    img.src = "./asset/WhatsApp Image 2024-01-30 at 18.05.49_7b56828e.jpg"
})






