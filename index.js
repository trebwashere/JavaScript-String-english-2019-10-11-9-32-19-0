// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
let bigHello = "'" + name.toUpperCase() + "'";
console.log(bigHello);


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
let capitalGoodPm = sentence.replace('good afternoon, mr mike.', 'Good Afternoon, Mr Mike.');
console.log(capitalGoodPm);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
let amount = money.substr(1);
console.log(amount);
