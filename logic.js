const pics =["1st img", "2nd img", "3rd img", "4th img"];
let count;

const galleryItems = document.querySelectorAll(".gallery-item");
var myDIV = document.getElementById("myDIV");
        myDIV.style.display = "none";
     
function left(){
    if(count > 0){
        count--;
        // child.style.backgroundImage = `url('${pics[count]}.jpeg')`
        child.style.background = `url('image/${pics[count]}.jpeg') no-repeat center center`;
        child.style.backgroundSize= "80vw, 80vw";
    }
    else{
        count = pics.length-1;

        // child.style.backgroundImage = `url('${pics[count]}.jpeg')`
        child.style.background = `url('image/${pics[count]}.jpeg') no-repeat center center`;
        child.style.backgroundSize= "80vw, 80vw";
    }
}
function right(){
    if(count < pics.length-1){
        
        count++;

        // child.style.backgroundImage = `url('${pics[count]}.jpeg')`
        child.style.background =  `url('image/${pics[count]}.jpeg') no-repeat center center`;
        child.style.backgroundSize= "80vw, 80vw";
    }
    else{
        count = 0;
        // child.style.backgroundImage = `url('${pics[count]}.jpeg')`;
        child.style.background =  `url('image/${pics[count]}.jpeg') no-repeat center center`;
        child.style.backgroundSize= "80vw, 80vw";
    }
}
function items(c){ 
    if(c=="gallery-item noodles"){
        count=0;
        // child.style.backgroundImage = `url('${pics[count]}.jpeg')`
        child.style.background =  `url('image/${pics[count]}.jpeg') no-repeat center center`;
        child.style.backgroundSize= "80vw, 80vw";
        var myDIV = document.getElementById("myDIV");
        myDIV.style.display = "block";
        
        var gallery = document.getElementById("gallery");
       
        if (gallery.style.display === "none") {
              gallery.style.display = "block";
     } else {
            gallery.style.display = "none";
    }
 }
 else if(c=="gallery-item salad"){
         count=1;
         child.style.background = `url('image/${pics[count]}.jpeg') no-repeat center center`;
         child.style.backgroundSize= "80vw, 80vw";
             var myDIV = document.getElementById("myDIV");
    myDIV.style.display = "block";
    
    var gallery = document.getElementById("gallery");
   
    if (gallery.style.display === "none") {
          gallery.style.display = "block";
 } else {
        gallery.style.display = "none";
}
}
 else if(c=="gallery-item burger"){
    count=2;
    child.style.background =  `url('image/${pics[count]}.jpeg') no-repeat center center`;
    child.style.backgroundSize= "80vw, 80vw";
         var myDIV = document.getElementById("myDIV");
     myDIV.style.display = "block";
     
     var gallery = document.getElementById("gallery");
    
     if (gallery.style.display === "none") {
           gallery.style.display = "block";
  } else {
         gallery.style.display = "none";
 }
 
  }
  else if(c=="gallery-item coffee"){
    count=3;
    child.style.background =  `url('image/${pics[count]}.jpeg') no-repeat center center`;
    child.style.backgroundSize= "80vw, 80vw";
         var myDIV = document.getElementById("myDIV");
     myDIV.style.display = "block";
     
     var gallery = document.getElementById("gallery");
    
     if (gallery.style.display === "none") {
           gallery.style.display = "block";
  } else {
         gallery.style.display = "none";
 }
 
  }
}
function closetab1(){
    var gallery = document.getElementById("gallery");
    var myDIV = document.getElementById("myDIV");
    gallery.style.display = "block";
    myDIV.style.display = "none";
    // items();
}
