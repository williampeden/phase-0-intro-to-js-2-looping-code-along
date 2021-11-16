const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }
  
  wrapGifts(gifts); 

  const messages = []
  let names = ["Ada", "Brendan", "Ali"]
  let event = "birthday"

  function writeCards(names, event) {
      for (let i=0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)}
      return messages;
      }

function countDown(starter){
  while (starter >= 0){
    console.log(starter), starter--;}
}