window.onload = init;
function init(){
    console.log("window has loaded");
    state.i = 0 
    state.j = 0;
    state.k = 0;
    state.l = 0;
    state.m = 0;
    state.n=0;
}


var state ={ 
    i:0, //hair
    j:0, //top
    k:0, //eyes
    l:0 //nose
    ,m:0,   //bottoms
    n:0,//mouth
    o:0 //feet
}
function nexthair(){
    console.log("next hair function activated");
    console.log(state.i);

    var hair = document.getElementById("hairstyles");
    if(state.i === 0){
        hair.setAttribute("class","hair1"); //short brown
        state.i++;
    }else if(state.i ===1){
        hair.setAttribute("class","hair2");
        state.i++;
        console.log(state.i);
    }else if(state.i===2){
        hair.setAttribute("class", "hair3");
        state.i =0;
    }
}

function nexttop(){
    console.log("next top function activated");
    console.log(state.j);

    var top = document.getElementById("tops");
    if(state.j === 0){
        top.setAttribute("class","top1"); //canvasbag color
        state.j++;
    }else if(state.j ===1){
        top.setAttribute("class","top2");
        state.j++;
        console.log(state.j);
    }else if(state.j===2){
        top.setAttribute("class", "top3");
        state.j =0;
    }
}

function nextbottom(){
    console.log("next bottom function activated");
    console.log(state.m);

    var bottom = document.getElementById("bottoms");
    if(state.m === 0){
        bottom.setAttribute("class","bottom1"); //canvasbag color
        state.m++;
    }else if(state.m ===1){
        bottom.setAttribute("class","bottom2");
        state.m++;
        console.log(state.j);
    }else if(state.m===2){
        bottom.setAttribute("class", "bottom3");
        state.m =0;
    }
}

function nexteyes(){
    console.log("next eyes function activated");
    console.log(state.k);

    var eye = document.getElementById("eyes");
    if(state.k === 0){
        eye.setAttribute("class","eyes1"); //brown eyes
        console.log("eyes1" + state.k)
        state.k++;
    }else if(state.k ===1){
        eye.setAttribute("class","eyes2"); //green eyes
        console.log("eyes2" + state.k)
        state.k++;
    }else if(state.k===2){
        eye.setAttribute("class", "eyes3"); //blue eyes
        state.k =0;
    }
}

function nextnoses(){
    console.log("next noses function activated");
    console.log(state.l);

    var nose = document.getElementById("noses");
    if(state.l === 0){
        nose.setAttribute("class","nose1"); //brown eyes
        state.l++;
    }else if(state.l ===1){
        nose.setAttribute("class","nose2"); //green eyes
        state.l++;
    }else if(state.l===2){
        nose.setAttribute("class", "nose3"); //blue eyes
        state.l =0;
    }
}

function nextmouth(){
    console.log("next mouths function activated");
    console.log(state.n);

    var mouth = document.getElementById("mouths");
    if(state.n === 0){
        mouth.setAttribute("class","mouth1"); 
        state.n++;
    }else if(state.n ===1){
        mouth.setAttribute("class","mouth2"); 
        state.n++;
    }else if(state.l===2){
        mouth.setAttribute("class", "mouth3"); 
        state.n =0;
    }
}


