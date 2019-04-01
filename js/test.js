console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');

// 1----------> Kintamųjų inicijavimas

//  1.1--->    Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmi
//           Po kiekvieno jų inicijavimo, išvesti į console
//  1.2--->   Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//           Po kiekvieno jų inicijavimo, išvesti į console
//  1.3--->   Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//           Po kiekvieno jų inicijavimo, išvesti į console
//  1.4--->   Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//           Po kiekvieno jų inicijavimo, išvesti į console

console.log('***************************************');
// 1.1--->    Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmi
//           Po kiekvieno jų inicijavimo, išvesti į console     

var x = 2;             
console.log( x );        //  x'ui mes duodam skaiciaus tipo reiksme 2

var y = 3;
console.log( y );        //  y'ui mes duodam skaiciaus tipo reiksme 3 

var z = 4;
console.log( z );        //  z'ui mes duodam skaiciaus tipo reiksme 4    
  
console.log('***************************************');
console.log('***************************************');
//  1.2--->   Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//           Po kiekvieno jų inicijavimo, išvesti į console


var x_tekstas = '2 gaideliai';
console.log( x_tekstas );        //  x_tekstas mes duodame teksto tipo reiksme '2 gaideliai'

var y_tekstas = '3 visteles';
console.log( y_tekstas );        //  y_tekstas mes duodame teksto tipo reiksme '3 visteles'

var z_tekstas = '4 ratai';
console.log( z_tekstas );        //  z_tekstas mes duodame teksto tipo reiksme '4 ratai'

console.log('***************************************');
console.log('***************************************');
console.log('***************************************');

//  1.3--->   Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//           Po kiekvieno jų inicijavimo, išvesti į console

var pirmasis_skaiciu_sarasas = [1, 2, 9.9e+307, 4, 5];
console.log( pirmasis_skaiciu_sarasas );    // "pirmasis_skaiciu_sarasas" duota penkiu skaitmenu reiksme

var antras_skaiciu_sarasas = [66, 66, 66, 69, 66];
console.log( antras_skaiciu_sarasas );      // "antras_skaiciu_sarasas" duota penkiu skaitmenu reiksme 66, 66, 66, 69, 66 

var trecias_skaiciu_sarasas = [5, 1, -2, 3, -4];
console.log( trecias_skaiciu_sarasas );     // "trecias_skaiciu_sarasas" duota penkiu skaitmenu reiksme 5, 1, -2, 3, -4

// skaiciai visuomet uzdaromi [ ] o tekstas''
 
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');

//  1.4--->   Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//           Po kiekvieno jų inicijavimo, išvesti į console

var pirmasis_tekstu_sarasas = ['koja', 'ranka', 'galva', 'kunas', 'kaklas']; 
console.log( pirmasis_tekstu_sarasas );      // "pirmasis_tekstu_sarasas" duotos penkios texto tipo reiksmes

var antras_tekstu_sarasas = ['66', '66', '9.9e+307', '69', '66'];
console.log( antras_tekstu_sarasas );         // "antras_tekstu_sarasas" duotos penkios texto tipo reiksmes

var trecias_tekstu_sarasas = ['5', '1', '-2', '3', '-4']; // "trecias_tekstu_sarasas" duotos 
console.log( trecias_tekstu_sarasas );                    //  penkios texto tipo reiksmes

console.log('***************************************');

var combo = [1, 'antras', true, false, pirmasis_skaiciu_sarasas];  //sudarytas misrus sarasa is teksto reiksme turinciu 
console.log( combo );                            // simbiuliu, skaitine reiksme turiciu simboliu ir dar idetas jau sudeliotas sarasas       

console.log('***************************************');

var x_y_z_suma = x + y + z;  //cia sudarytas veiksmu algoritmas toms reiksmems kurias mes ivardinome x, y, z
console.log( x_y_z_suma );   // siuo atveju mes matome kad jie sumuojmi (sudedami)
 
console.log('***************************************');
console.log('***************************************');

var x_y_z_tekstai = x_tekstas + ' ' + y_tekstas + ' ' + z_tekstas;  // //cia sudarytas veiksmu algoritmas toms reiksmems 
console.log( x_y_z_tekstai );              //kurias mes ivardinome x_tekstas, y_tekstas, z_tekstas ir kad gautume tarp reiksmiu 
                                           //tarpus mes juos iskart sudedame  tokiu budu ' ' tarpas pas mus turi tekstine verte.  


var t_1 = 'a';                         // cia mes "t_1" daveme tekstine verte 'a' "t_2" davem tekstine verte 'b' ir paraseme
var t_2 = 'b';                         // tolimesni veiksmu algoritma siuo atveju sumavimas "t_1"+ 'tarpas'+"t_2"
console.log( t_1 + ' ' + t_2 );

console.log('***************************************');
console.log('***************************************');
console.log('***************************************');
console.log('***************************************');


var ilgas_tekstas = trecias_tekstu_sarasas[0] + ', '            // sis textas "trecias_tekstu_sarasas" buvo surasytas taip, kad jame tarp 
                        + trecias_tekstu_sarasas[1] + ', '      //elementu issidestitu tarpai bei kableliai, ir iskarto naujai sumodeliuotai 
                        + trecias_tekstu_sarasas[2] + ', '      // "trecias_tekstu_sarasas" tarkai verte (ivardinimas) "ilgas_textas"
                        + trecias_tekstu_sarasas[3] + ', '
                        + trecias_tekstu_sarasas[4];
console.log( ilgas_tekstas );