var cardId = ['4916-2600-1804-0530', '4779-252888-3972', '4252-278893-7978', '4556-4242-9283-2260'] 

var largestTotal = 0;
var largestCardId;

for (var i=0; i < cardId.length; i++) {
   var cardNumber = cardId[i];
   var cardNumberTotal = 0;

//loop though array and assign each cardId to cardNumber
//start off with total of 0

console.log(cardNumber)


   for (var i=0; i < cardNumber.length; i++) {
      cardNumberTotal += Number(cardNumber);
   } 
   
   //Number() to ignore dashes
   //need to separate each number

console.log(cardNumberTotal)


   if (cardNumberTotal > largestTotal) {
      largestCardId = cardNumber;
   }
}

//should run as '4252-278893-7978'

console.log(largestCardId);
