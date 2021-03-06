const progress=document.getElementById("progress");
const prev=document.getElementById("prevBtn");
const next=document.getElementById("nextBtn");
const circle=document.querySelectorAll("circle");

let currentValue=1;

next.addEventListener("click",function() {
    currentValue++;
    if (currentValue > circle.length) {
        currentValue = circle.length;
    }
    update()
});

prev.addEventListener("click",function() {
    currentValue--;
    if (currentValue< 1) {
        currentValue= 1;
    }
    update()
});

function update(){
    circle.forEach(circle, index) ;
        if(index = currentValue){
            circle.classlist.add("active");
        }else{
            circle.classlist.remove("active");
        }
    };
    const actives=document.querySelectorAll(".active");
    progress.style.width=(actives.length-1)/(circle.length-1)*100;

    if(currentValue===circle.length){
        next.disabled=true
    }else if(currentValue<=1){
        prev.disabled=true
    }else{
        next.disabled=false
        prev.disabled=false
    }


