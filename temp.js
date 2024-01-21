let button = document.querySelector("button");
let input = document.querySelector("input");
let result = document.querySelector(".result");
let opt1 = document.querySelector(".one");
let opt2 = document.querySelector(".two");
let msg = document.querySelector(".msg");
let sel2 = document.querySelector(".options");
console.log(sel2);
let sel = document.querySelectorAll("select");
for (selects of sel){
        selects.addEventListener("change",(e)=>{
            pass(e.target);
        })
    }
    pass = (element)=>{
        if(element.value === "del"){
           sel2.innerText="Farenheit";
            let answer = (input.value * 1.8) + 32;
            msg.innerText=`${input.value} C = ${answer} Farenheit`
        }
        else if (element.value === "ear"){
            sel2.innerText="Celsius";
            let answer1 = (input.value - 32) * (5/9);
            msg.innerText=`${input.value} Farenheit = ${answer1} C`
        }
    }
    button.addEventListener("click",()=>{
        window.location.reload();
    })
