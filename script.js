var crsr = document.querySelector("#cursor")
var bk = document.querySelector("#back")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
document.addEventListener("mousemove",function(dets){
    bk.style.left = dets.x-150+"px"
    bk.style.top = dets.y-150+"px"
})
gsap.to(".nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
         trigger:".nav",
         scroller:"body",
        //  markers:true,
         start:"top -10%",
        //  end:"top -11%",
         scrub:3
    }

})
gsap.to("#main",{
    backgroundColor:"#111",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        scrub:2
    }
})