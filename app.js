//call the hand properties
const secondHand = document.querySelector(".sec_hand");
const min_hand = document.querySelector(".min-hand");
function setsecs(){
    const now = new Date();
    const seconds = now.getSeconds();
    // need to convert the seconds to degree
    const secondDegree = ((seconds/60)*360) + 90;//needs to let it start from the top so add 90
   /* apply syle to the seconds hand so
   that it changes with the changes in seconds values
   */
  secondHand.style.transform = `rotate(${secondDegree}deg)`; 
  console.log(seconds);   
}
function setmin(){
    const now = new Date();
    const minites = now.setMinutes();
    console.log(minites);
}
setInterval(setsecs, 1000);
setInterval(setmin,6000);