//call the hand properties
const secondHand = document.querySelector(".sec_hand");
const min_hand = document.querySelector(".min_hand");
const hour_hand = document.querySelector(".hour_hand");
function setsecs(){
    const now = new Date();
    const seconds = now.getSeconds();
    // need to convert the seconds to degree
    const secondDegree = ((seconds/60)*360) +90;//needs to let it start from the top so add 90
   /* apply syle to the seconds hand so
   that it changes with the changes in seconds values
   */
  secondHand.style.transform = `rotate(${secondDegree}deg)`; 
  console.log(seconds);  
    const minites = now.getMinutes();
    const minDegree = ((minites/60 * 360) )+ 80;
    min_hand.style.transform= `rotate(${minDegree}deg)`;
    console.log(minites);
    const hour = now.getHours();
    const hourDegree = ((hour / 60 * 360) )+ 90;
    min_hand.style.transform= `rotate(${hourDegree}deg)`;
    console.log(hour);
     
}
setInterval(setsecs, 1000);
