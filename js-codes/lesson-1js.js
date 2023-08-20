// common
const position=["একক", "দশক", "শতক", "সহস্র", "অযুত", "লক্ষ",  "নিযুত","কোটি" ];
//

// functions
var pOnOff=1;
document.getElementById('positonal-value').addEventListener('click',function(){
    const element=document.getElementById('pDisplay');
    if(pOnOff%2==1){
        element.classList.remove('d-none');
    }
    else{
        element.classList.add('d-none');
    }
    pOnOff++;
});

document.getElementById('pSubmit').addEventListener('click', function(){
    const input=document.getElementById('pGiven-number').value;

    const parent= document.getElementById('pOutput');
    parent.removeChild(parent.firstChild);

    const div=document.createElement('div');
    parent.appendChild(div);
    var count=0;
    let length=input.length;
    while(length!=0){
        const lastnum=input.slice(length-1,length);
        length--;
        const inner=lastnum+'----- '+ position[count];

        const h2=document.createElement('h2');
        h2.innerText=inner;
        div.appendChild(h2);
        count++;

    }
});


///big/low

var bLOnOff=1;
document.getElementById('bLNumber').addEventListener('click',function(){
    const element=document.getElementById('bLDisplay');
    if(bLOnOff%2==1){
        element.classList.remove('d-none');
    }
    else{
        element.classList.add('d-none');
    }
    bLOnOff++;
});

var bDOnOff=1;
document.getElementById('byDigits').addEventListener('click',function(){
    const element=document.getElementById('bDDisplay');
    if(bDOnOff%2==1){
        element.classList.remove('d-none');
    }
    else{
        element.classList.add('d-none');
    }
    bDOnOff++;
});

var bGDOnOff=1;
document.getElementById('byGivenDigits').addEventListener('click',function(){
    const element=document.getElementById('bGDDisplay');
    if(bGDOnOff%2==1){
        element.classList.remove('d-none');
    }
    else{
        element.classList.add('d-none');
    }
    bGDOnOff++;
});

//by digits//

document.getElementById('bDSubmit').addEventListener('click', function(){
    let inputN=parseInt(document.getElementById('bDinput').value);
    let big='';
    let low='1';
    while(inputN--){
        big=big+9;
        low=low+0;
        
    }
    length=low.length;
    low=low.slice(0,length-1);
    document.getElementById('biggest').innerText=big;
    document.getElementById('lowest').innerText=low;
});

//By given digit//

document.getElementById('bGDSubmit').addEventListener('click', function(){
    const inputV=document.getElementById('bGDinput').value;
    let inputN=parseInt(inputV);
    let array=[];
    while(inputN>0){
        array.push(inputN%10);
        inputN=parseInt(inputN/10);
    }

    array.sort(function(a, b){return a - b});
    let length=array.length;
    let big='';
    let low='';
    for(let i=0;i<length;i++){
        big=array[i]+big;
        low=low+array[i];
    }
    document.getElementById('bGDBiggest').innerText=big;
    document.getElementById('bGDLowest').innerText=low;
})