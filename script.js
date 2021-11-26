const input = document.querySelector("#seconds");
const button = document.querySelector("#btn");
const divResult = document.querySelector("#result");

// calculates distance
button.addEventListener("click", howFar)

function howFar(){
if (input.value === "") {
    alert("Insert a number.")
    
} else if (isNaN(input.value)) {
    alert("Use only numbers.")

} else {
       // creates result
    const p = document.createElement("p");
    p.setAttribute('id', 'distance')
    const result = document.createTextNode(input.value / 3);
    p.appendChild(result);
    divResult.appendChild(p)

    const textOne = document.createElement("span");
       textOne.className = "span1";
       textOne.innerHTML = "<span>The lightning is</span>";
       p.prepend(textOne); 
       
    const textTwo = document.createElement("span");
        textTwo.className = "span2";
        textTwo.innerHTML = "<span>km away from you.</span>"
        p.append(textTwo);

        input.value = "";
     } 
} 
