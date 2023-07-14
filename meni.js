// function auaga(price,proft,vat){
//     var priceAndProfit = price + proft;
//     var priceAndProfitAndVat = priceAndProfit * vat;
//     console.log(priceAndProfitAndVat)

// }

// auaga(2000,100,3)
// auaga(20000,100,0.3)

// =============================================(1)

// var number = window.prompt("hello");

// console.log(number);

// ==============================================(2)


// var number = window.prompt("Write a program that take number");
// number = Number (number);

// if (number % 3 == 0 && number % 4 == 0){
// console.log("yes")
// } else{
// console.log("no")
// }

// ================================================(3)
// var number1 = window.prompt("number1");
// var number2 = window.prompt("number2");
// number1 = Number=(number1);
// number2 = Number=(number2);
// if(number1 > number2){
// console.log("number1");
// }else{
//     console.log("number2");
// }


// ==================================================(4)
// var num =window.prompt("enter");

// if(num < 0){
//     console.log("negativ");
// }else{
//     console.log("positiv");
// }

// ===================================================(5)
// var number1 = window.prompt("number1");
// var number2 = window.prompt("number2");
// var number3 = window.prompt("number3");
// number1 = Number=(number1);
// number2 = Number=(number2);
// number3 = Number=(number3);
// if(number1 > number2 && number1 >number3){
//     console.log("max 1 ==>" + number1 );
// }else if(number2 > number1 && number2 > number3){
//     console.log("max 2 ==>" + number2 );

// }else if(number3 > number1 && number3 > number3){
//     console.log("max 3 ==>" + number3 );
// }if(number1<number2 && number1 < number3){
//     console.log("min 1 ==>" + number1);
// }else if(number2 < number1 && number2 < number3){
//     console.log("min 2 ==>" + number2);
// }else if(number3 < number1 && number3 < number2){
//     console.log("min 3 ==>" + number3);
// };

// ======================================================(6)

// var number =window.prompt("number");
// number = Number(number)

// if(number % 2 == 0){
// console.log( number + "is even");
// }else{
//     console.log( number +"is odd");
// }

// ==============================================(8)

// var vowel = window.prompt("number")

// if(vowel == "a" || vowel == "A" || vowel == "e" 
// || vowel == "E" || vowel == "i" || vowel == "I" 
// || vowel == "o" || vowel == "O" || vowel == "u" 
// || vowel == "U"){
//     console.log("print");
// }else{
//     console.log("consonant");
// }


// ===========================================(9)

// var number =window.prompt("enter number");

// number =Number(number);

// for(var i = 1 ; i <= number ; i++){
//     console.log(i);
// }


// ===========================================(10)

// var number = window.prompt("number : ")
// number = Number(number);
// for(var i = 1;i<=12;i++){
//     console.log(i *number);
// }

// ========================================(11)
// var number = window.prompt("number : ");

// number = Number(number);

// for( var i=1; i <= number; i++){
//     if(i % 2 == 0 ){
// console.log(i);
//     }
// }

// ======================================(12)

// var number1 = window.prompt("number1 : ");
// var number2 = window.prompt("number2 : ");
// var x =1;
// for( var i = 0; i < number2; i++){
//     x *= number1;
// }
// console.log(x);

// =======================================(12)

// var x = 0;

// for( var i = 0; i < 5; i++){
//     x += Number( window.prompt("enter" + (i+1)) ) ;

// }
// console.log("total =" + x);
// console.log("avg = " + x/5);
// console.log("persentage = " + x/500*100);

// ========================================(13)
// var mont = window.prompt("Enter mont : ");

// if(mont ==1 || mont ==3 || mont ==5 || mont ==7 ||mont ==8 ||mont ==10 || mont == 12 ){
//     console.log("31");
// }else if( mont == 2){
//     console.log("28");
// }else if(mont == 4 || mont == 6 || mont ==9 || mont == 11 ) {
//     console.log("30");
// }

// =======================================(14)

// var Physicsb =window.prompt(" Enter mark Physics");
// var Chemistry =window.prompt(" Enter mark Chemistry");
// var Biology =window.prompt(" Enter mark Biology");
// var Mathematics =window.prompt(" Enter mark Mathematics");
// var Computer =window.prompt(" Enter mark Computer");
// Physicsb = Number(Physicsb)
// Chemistry = Number(Chemistry)
// Biology = Number(Biology)
// Mathematics = Number(Mathematics)
// Computer = Number(Computer)

// var x =(Physicsb + Chemistry + Biology + Mathematics + Computer)/ 500 * 100;

// if( x >= 90){
//     console.log("Grad A");
// }else if(x >= 80){
//     console.log("Grad B");
// } else if(x >= 70){
//     console.log("Grad C");
// } else if(x >= 60){
//     console.log("Grad D");
// }  else if(x >= 50){
//     console.log("Grad E");
// }  else if(x >= 40){
//     console.log("Grad F");
// } 

// ===============================================(15)

// var mont = window.prompt("Enter mont : ");

// switch (mont){
//     case '1':
//     case '3':
//     case ' 5':
//     case ' 7':
//     case ' 8':
//     case ' 10':
//     case ' 12':
//         console.log("31");
//         break
//         case '2':
//             console.log("28");
//             break
//             case '4':
//             case '6':
//             case '9':
//             case '11':
//                 console.log("30");
//                 default:
// };

// ============================================(16)




//  var vowel = window.prompt(" enter consonant")

// switch(vowel){
//     case 'a':
//         case 'A':
//         console.log("print");
//         break
//     case 'e':
//         case 'E':
//         console.log("print");
//         break
//     case 'i':
//         case 'I':
//         console.log("print");
//         break
//     case 'o':
//         case 'O':
//         console.log("print");
//         break
//     case 'u':
//         case 'U':
//         console.log("print");
//         break
//         default:
//             console.log("consonant");
//         break
// }
// ==============================================(17)

// var number1 = window.prompt("number1");
// var number2 = window.prompt("number2");

// switch(number1 > number2){
//     case true :
//     console.log("number1 ==>" + number1);
//     break
//     case false  :
//         console.log(":number2 ==>" + number2);
//         break
//         default:
// };

// ================================================(18)
// var number = window.prompt("number");

// switch(number%2 == 0){
//     case true:
//         console.log("Evene");
//         break;
//         case false:
//             console.log("odd");
//             break;
//                 default:
// }

// =============================================(19)
// var number = window.prompt("number");
// switch(number>0){
//     case true:
//         console.log('yes');
//         break;
//         case false:
//             console.log("no");
//             break;
//             default:
// };

// =============================================(20)


var number1 = window.prompt("number1");
var number2 = window.prompt("number2");
var x = window.prompt("number2");
number1 = Number(number1);
number2 = Number(number2);

switch(x){
    case '+':
        console.log(number1 + number2 );
        break;
        case '-':
            console.log(number1 - number2 );
            break;
        case '*':
            console.log(number1 * number2 );
            break;
        case '/':
            console.log(number1 / number2 );
            break;

}

