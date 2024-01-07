

function singlethread(){
    let para = document.createElement("p");
    para.textContent="this is sng-para-thread";
    document.body.appendChild(para);
}

//second function

function newSinglethread(){
       let newPara = document.createElement("p");
       newPara.textContent="second para";
       document.body.appendChild(newPara);
}

//call function

singlethread();
newSinglethread();