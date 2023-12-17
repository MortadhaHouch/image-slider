var links = [
    "https://images.unsplash.com/photo-1661127402251-0ef7e3b05a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657299142014-34b66b73e68e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661193302563-11eaee74033e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657299156528-2d50a9a6a444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1660774442344-f045490d204f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661278458122-c8c6c0ec1022?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657816364322-59e554ae1a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1657299156261-4ce1d0a2cf5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1661159488298-34ba4e953ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
];
var image = document.querySelector(".myImage");
var images = document.querySelectorAll(".primary");
var next = document.querySelectorAll("button")[1];
var previous = document.querySelectorAll("button")[0];
var linkIndex = 0;
window.addEventListener("load",function(){
    image.setAttribute("src",links[0]);
    images[0].classList.toggle("active");
})
images.forEach((image ,index)=>{
    image.style.filter = "blur(10px)";
    image.setAttribute("src",links[index])
    image.addEventListener("load",function(){
        if(image.complete){
            image.style.filter = "blur(0px)";
        }
    })
})
console.log(links.length)
function autoPlayCarousel(){
    var carouselTimer = setInterval(startCarousel,1000);
    var linkIndex = links.length;
    function startCarousel(){
        linkIndex++;
        if(linkIndex > links.length - 1){
            linkIndex = 0;
        }
        images.forEach((image,index)=>{
            image.classList.toggle("active", index === linkIndex)
        })
        image.setAttribute("src",links[`${linkIndex}`]);
    }
}
//autoPlayCarousel();
next.addEventListener("click",function(){
    linkIndex+=1;
    if(linkIndex > links.length - 1){
        linkIndex = 0;
    }
    images.forEach((image,index)=>{
        image.classList.toggle("active", index === linkIndex)
    })
    image.setAttribute("src",links[`${linkIndex}`]);
})
previous.addEventListener("click",function(){
    linkIndex-=1;
    if(linkIndex < 0){
        linkIndex = links.length - 1;
    }
    images.forEach((image,index)=>{
        image.classList.toggle("active", index === linkIndex)
    })
    image.setAttribute("src",links[`${linkIndex}`]);
})