var cursor=document.querySelector("#cursor");
var blr=document.querySelector("#blr");
var marq=document.querySelector("#m1");
var box=document.querySelector(".overlay");
var card=document.querySelector("#card11")

card.addEventListener("mouseover",function(){
    box.style.visibility="visible";
    card.style.visibility="hidden";
})
card.addEventListener("mouseout",function(){
    box.style.visibility="hidden";
    card.style.visibility="visible";
})

marq.addEventListener("mouseover",function(){
    marq.style.Color="green";
})
marq.addEventListener("mouseout",function(){
    marq.style.color="transparent";
})

document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x-8+"px";
    cursor.style.top=dets.y-8+"px";
    blr.style.left=dets.x-100+"px";
    blr.style.top=dets.y-100+"px";
})

gsap.to("#nav",{
    backgroundColor : "black",
    duration:0.5,
    height:"70px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:true
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:true
    }
})
