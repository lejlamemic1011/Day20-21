const keys = document.querySelectorAll(".key");
const textArea = document.querySelector("#textarea");
let output = [];
const specialKeys = ["capsLock", "space", "backSpace"];
let capsLock = false;


const upperCase = char => char.toUpperCase();

keys.forEach(key => {
    key.addEventListener("click", e => {
        if(specialKeys.indexOf(e.target.value) != -1){
            if(e.target.value == "capsLock" && capsLock == false){
                capsLock = true;
            }else if(capsLock == true){
                capsLock = false;
            }else if(e.target.value === "space"){
                output.push(" ");
                textArea.innerText += output.join("");
            }else if(e.target.value = "backSpace"){
                output.pop();
                textArea.innerText += output.join("");
            }
            
        }

        if(capsLock === true && e.target.value != "capsLock") {
            output.push(e.target.value.toUpperCase());
            textArea.innerText += output.join("");
        }


        if(specialKeys.indexOf(e.target.value) == -1 && capsLock == false){
        output.push(e.target.value);
        textArea.innerText += output.join("");
        }
        
       
    })
});