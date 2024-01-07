//adding 100 para  in loop event

for(let i=1; i<=100; i++){
    let newpara=document.createElement('p');
    newpara.textContent ='this is paragraph' + i;

    document.body.appendChild(newpara);
}

