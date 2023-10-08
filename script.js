const inputnumb = document.querySelector("input[type='number'");

const high = document.querySelector(".high");
const low = document.querySelector(".low");
const correct = document.querySelector(".correct");
const correct1 = document.querySelector(".correct1");
const body = document.body;
const replay = document.querySelector("button");
// console.log(inputnumb)
const button = document.querySelector("input[type='submit'");

// console.log(button);

const guessNumForm = document.querySelector(".guessNum-form");

const h2bt= document.querySelector("h2");

let k= 0;
// console.log(guessNumForm);
const random = Math.floor(Math.random()*21);
// console.log(random);
const attemp = document.querySelector(".attemp");
// let attempText = ;
// attemp.append(attempText)

const guessNumFunction = (e)=>{
    e.preventDefault();
    const value = inputnumb.value;
    if(value>=0 && value<=20 && value !==''){
    
    if(value<random){
        inputnumb.value = "";
        setTimeout(() => {
            
            low.style.opacity= "0";
        }, 1000);
        high.style.opacity= "0";
        low.style.opacity= "1";
    }
    if(value>random){
        inputnumb.value = "";
        setTimeout(() => {
            
            high.style.opacity= "0";
        }, 1000);
        high.style.opacity= "1";
        low.style.opacity= "0";
    }
     if(value==random){
        
        high.style.display= "none";
        low.style.display= "none";
        correct1.textContent = "Sahi jawab!! Adbhut!!! (right guess)"
        body.style.background = "greenyellow";
        replay.style.display = "block";
        replay.onclick = () =>{
            window.location.reload();
        }
        guessNumForm.removeEventListener("submit",guessNumFunction);
    }
    k++;
    attemp.textContent = `attemp:${k}`;  
}
    else{
        alert("enter a number between zero and twenty");
        inputnumb.value = "";
    }
}

guessNumForm.addEventListener('submit',guessNumFunction);