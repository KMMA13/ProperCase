var text=document.querySelector("#txt");
var btn=document.querySelector("#btn");
var result=document.querySelector("#result");
let front;

btn.addEventListener("click",()=>{
    var content = text.value;
    var word = content.split(" ");
    for (let i = 0; i < word.length; i++) {
         front = word[i].charAt(0).toUpperCase()+word[i].slice(1,word[i].length);
         console.log(front);
         result.innerText += " " +front;
         console.log(result);
    }
    
});