
function rolldice(){
    let diceRollTray=[];
    let imagesRolled=[];
    let total=document.querySelector(".totaldice").textContent="Total: ";
    let numberOfDice=document.getElementById("dicenumber").value;
    let diceRolled;
    for(let a=0; a<numberOfDice;a++){
        diceRolled=Math.floor(Math.random()*6)+1;
        diceRollTray.push(diceRolled);
        imagesRolled.push(`<img src="Images/${diceRolled}.png">`)
    }

    let sumOfDiceRolled=0;
    for(e=0;e<diceRollTray.length;e++){
        sumOfDiceRolled+=diceRollTray[e]
    }

    console.log(diceRollTray);
    let result=document.getElementById("result").textContent=`Dice rolled: ${diceRollTray.join(", ")}`;
    console.log(result);
    let diceImages=document.querySelector("#diceimages").innerHTML=imagesRolled;
    total=document.querySelector(".totaldice").textContent+=sumOfDiceRolled;
    

    
}





