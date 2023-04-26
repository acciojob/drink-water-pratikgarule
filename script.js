//your JS code here. If required.
let waterLtr=document.querySelector('.remaining>h2');
let percentage=document.querySelector('.percentage');
let glass=document.querySelectorAll('.glass');
let smallglass=document.querySelector('.small-glass');
let bigBottle=document.querySelector('.remaining');



bigBottleFill();

glass.forEach((smallglass,i) => {
    smallglass.addEventListener('click',()=>waterFill(i));
});

function waterFill(i){

    if( glass[i].classList.contains('glass-full') && !glass[i].nextElementSibling.classList.contains('glass-full')){
        i--;
    }
    
    glass.forEach((smallglass,j) => {
        if(j<=i){
            smallglass.classList.add('glass-full');
        }
        else
        smallglass.classList.remove('glass-full');
    }
    );

    bigBottleFill();
}

function bigBottleFill(){
    let glassFull=document.querySelectorAll('.glass-full').length;
    let totalGlass=glass.length;
    if(glassFull==0){
        percentage.style.visibility='hidden';
        percentage.style.height=0;
    }
    else{
        percentage.style.visibility='visible';
        percentage.style.height=`${(glassFull/totalGlass)*330 }px `;
        percentage.innerText=  `${glassFull/totalGlass  *100}% `;
    
    }
    if(glassFull==totalGlass){
        bigBottle.style.visibility='hidden';
        // bigBottle.style.height=0;
    }
    else{
        bigBottle.style.visibility='visible';
        waterLtr.innerText=`${2-(250*glassFull /1000)}L`
    }

}