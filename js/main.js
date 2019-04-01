var x = 3;
console.log( x );
var y = 3;
console.log( y );
var z = 4;
console.log( z );

var x = '3';
console.log( x );
var y = '3';
console.log( y );
var z = '4';
console.log( z );


console.log( 3.1415 );                   //  <----- Taip rasomi skaiciai
console.log( '3.1415' );                 //  <----- tokiu zenklu '5' skaiciui duoda texto verte
console.log( true );                     //  <----- Boolean. Šis tipas gali turėti tik dvi reikšmes : true arba false
console.log( false );                    //  <----- boolen tipas

console.log( 3.1415 + 3.1415 );          //  <----- du skaicius jis sudeda
console.log( '3.1415' + '3.1415' );      //  <----- texta jis taipogi sujungia tiesiog be tarpu 
console.log( true + true );              //  <----- true turi reiksme 1  
console.log( false + false );            //  <----- false turi reiksme 0

console.log( 3.1415 + '3.1415' );        //  <----- kadangi yra texto elementas jis tiesiog juos sujungia
console.log( true + '3.1415' );          //  <----- kadangi skaiciui duota texto verte  TRUE igauna texto verte
console.log( false + '3.1415' );         //  <-----   

console.log( '3.1415' + 3.1415 );        //  <----- textas + 3.1415 = textas3.1415
console.log( '3.1415' + true );          //  <----- true turi verte 1 ir turi verte texto todel jis atpazysta ir prisitaiko prie atliekamo veiksmo
console.log( '3.1415' + false );         //  <----- true turi verte 0 ir turi verte texto todel jis atpazysta ir prisitaiko prie atliekamo veiksmo  

console.log( 1 + false );                //  <----- siame veiksme  false jau igauna skaiciaus verte (0)
console.log( false + 1 );                //  <----- 
console.log( 1 + true );                 //  <----- false taipat siame veiksme igauna skaiciaus verta (1)
console.log( true + 1 + '333' + 6);      //  <----- true igauna skaiciaus verte ir atliekamas matematinis veiksmas iki texto vertes turinciu simboliu
//  o jau po texto verte turinciu simboliu viskas igauna texto verte nebent tai daugyba nes ji atliekama pirma pazyzdziai zemiau

console.log( 2 + 2 + '2' + 2 + 2 );      //  <-----
//2+2+'2'+2+2
//4+'2'+2+2
//'42'+2+2
//'422'+2
//'4222'

console.log( 2 + 2 + '2' + 2 * 2 );      //  <-----
//2+2+'2'+2*2
//2+2+'2'+4
//4+'2'+4
//'42'+4
//'424'
console.log( 1 + true + 3.1415 );