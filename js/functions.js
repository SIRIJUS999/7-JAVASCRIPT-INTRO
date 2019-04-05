console.log('********************************************');
console.log('********************************************');
console.log('********************************************');
console.log('*************FUNCTIONS**********************');
console.log('********************************************');
console.log('********************************************');
console.log('********************************************');

function tusciaFunkcija () { 
    return false;
}
console.log( tusciaFunkcija( ))                    //mes tokiu budu iskvieciame funkcija


function daugyba( a, b ){                                       // cia 15-26 eilutese mes apraseme daugybos funkcijA  su visais
    // ar "a" yra skaicius?                                     // galimais simboliu ivedimais ir ka daryt jei simbolis 
    if ( typeof(a) !== 'number' ) {                             // netenkina musu reikalavimu o jau 30 eiluteje mes 
        return 'Pirma reiksme nera skaiciaus tipo. Tu ivedei: '+a;        // iskvieciam musu aprasyta funkcija
    }
    // ar "b" yra skaicius?
    if ( typeof(b) !== 'number' ) {
        return 'Antra reiksme nera skaiciaus tipo. Tu ivedei: '+b;
    }
    var sandauga = a * b;
    return sandauga;
}

// apacioje surasyti patikrinimai kur skirti mum  kad mes galetume patikrint ar veikia musus daugyba su 
// tais simboliais
console.log( daugyba( 9, 9 ) )
console.log( daugyba( 2, 3 ) );
console.log( daugyba( 1.5, 3.6 ) );
console.log( daugyba( 0, -8 ) );
console.log( daugyba( '9', 6 ) );
console.log( daugyba( '7', '5' ) );
console.log( daugyba( 4, 'ZZ' ) );
console.log( daugyba( 4, 'nan' ) );
   



console.log( '*********************skaitmenu kiekis skaiciuje ***************' )
console.log( '*********************skaitmenu kiekis skaiciuje ***************' )
console.log( '*********************skaitmenu kiekis skaiciuje ***************' )
console.log( '*********************skaitmenu kiekis skaiciuje ***************' )

function skaitmenuKiekisSkaiciuje( skaicius ) {
    if ( typeof(skaicius) !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( isNaN(skaicius) === true ) {
        return 'Pateikta netinkamo tipo reikšmė.';
  }

    var skaitmenu_kiekis = 0;
    // skaiciuojame skaitmenu kieki duotame skaiciuje "skaicius"
    skaitmenu_kiekis = (''+skaicius).length;

       
 
 
 // eliminuojame minuso zenkla
    // if ( skaicius < 0 ) {
    //     skaitmenu_kiekis--;
    // }

    // eliminuojame kablelio zenkla
    // 1. variantas
    // if ( skaicius % 1 !== 0 ) {
    //     skaitmenu_kiekis--;
    // }

    // 2. variantas
    // for ( var i=0; i<(''+skaicius).length; i++) {
    //     if ( (''+skaicius)[i] === '.' ) {
    //         skaitmenu_kiekis--;
    //     }
    //     if ( (''+skaicius)[i] === '-' ) {
    //         skaitmenu_kiekis--;
    //     }
    //     if ( (''+skaicius)[i] === ',' ) {
    //         skaitmenu_kiekis--;
    //     }
    // }

    // 3. variantas
    if ( (''+skaicius).indexOf('.') >= 0 ) {
        skaitmenu_kiekis--;
    }
    if ( (''+skaicius).indexOf('-') >= 0 ) {
        skaitmenu_kiekis--;
    }
    if ( (''+skaicius).indexOf(',') >= 0 ) {
        skaitmenu_kiekis--;
    }
 return skaitmenu_kiekis;
}
 console.log( skaitmenuKiekisSkaiciuje( 7811212 ) );
 console.log( skaitmenuKiekisSkaiciuje(  99+99 ) );
 

console.log( '*********************didziausias skaicius sarase ***************' )
console.log( '*********************didziausias skaicius sarase ***************' )
console.log( '*********************didziausias skaicius sarase ***************' )
console.log( '*********************didziausias skaicius sarase ***************' )
   
function didziausiasSkaiciusSarase( sarasas ) {
    // ar gautas tinkamas formatas
    if ( typeof(sarasas) !== 'object' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( sarasas.length === 0 ) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    // ieskome didziausio skaiciaus sarase
    var didziausias = sarasas[0];
    console.log(sarasas);
    
    for ( var i=0; i<sarasas.length; i++ ) {
        if ( typeof(didziausias) !== 'number' ) {
            didziausias = sarasas[i];
        }

        if ( typeof(didziausias) === 'number' &&
             sarasas[i] > didziausias ) {
            didziausias = sarasas[i];
        }
    }

    if ( typeof(didziausias) !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmės.';
    }

    return didziausias;
}
// 140 eiluteje as issaugojau funkcijos rezulata "pimas_didz_skaic" vardu kuri siuo vardu 
// as galesiu iskviest ir manipuliuot juo kaip tik panoresiu 
var arturas = [ -5, 99, 14, 0, 18 ];
var pirmas_didz_skaic = didziausiasSkaiciusSarase( arturas );

console.log( pirmas_didz_skaic );
console.log( didziausiasSkaiciusSarase( [ -5, 79, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 'pomidoras', '1a', true, [1, 2, 3, 4, 5] ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 'pomidoras', '1a'] ) );
console.log( didziausiasSkaiciusSarase( [ 'pomidoras', -5, 78, 0, 18 ] ) )

console.log( '*********************isrinktiRaides ***************' )
console.log( '*********************isrinktiRaides ***************' )
console.log( '*********************isrinktiRaides ***************' )
console.log( '*********************isrinktiRaides ***************' )
 
function isrinktiRaides( text, exclude ) {
    console.log('-----');
    console.log(text+' - '+exclude);
    
    var rezultatas = '';
    if ( typeof(text) !== 'string' ) {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if ( text.length < 1 || text.length > 100 ) {
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    }
    if ( typeof(exclude) !== 'number' ||
        //  isNaN(exclude) === true ||
         isNaN(exclude) ||
        //  isFinite(exclude) !== true ||
         !isFinite(exclude) ) {
        return 'Antrasis kintamasis yra netinkamo tipo.';
    }
    if ( exclude < 1 ) {
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    }
    if ( exclude > text.length ) {
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    }
    if ( exclude % 1 > 0 ) {
        return 'Antrasis kintamasis negali būti ne sveikasis skaičius.';
    }

    // isrenkame kas kelinta raide is duoto teksto
    for ( var i=exclude-1; i<text.length; i=i+exclude ) {
        rezultatas += text[i];
        // rezultatas += text.charAt(i);
    }

    return rezultatas;
}

// nelabai teisingi
console.log( isrinktiRaides( "abc", 0 ) );
console.log( isrinktiRaides( "", 0 ) );
console.log( isrinktiRaides( "", 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );
console.log( isrinktiRaides( false, 2 ) );
console.log( isrinktiRaides( "text", NaN ) );
console.log( isrinktiRaides( "text", Infinity ) );
console.log( isrinktiRaides( "text", Math.PI ) );
console.log( isrinktiRaides( "abc", 4 ) );
// teisingi

console.log( isrinktiRaides( "abcdefg", 2 ) );
console.log( isrinktiRaides( "abSdeIghEjkRDSAssS", 3 ) );
console.log( isrinktiRaides( "3.1415e0", 2 ) );


console.log( '*********************dalyba ***************' )
console.log( '*********************dalyba ***************' )
console.log( '*********************dalyba ***************' )
console.log( '*********************dalyba ***************' )


function dalyba( a, b ) {                                        //cia 214-226 eilutese aprasyta dalybos funkcija
    if ( typeof(a) !== 'number' ||                               //su visais aprasymais kad dalintu tik skaiciu ir 
         typeof(b) !== 'number' ||                               //neisiveltu jokiu kitu elementu      
         isNaN(a) ||
         isNaN(b) ) {
        return 'Dalyba galima tik su tikrais skaiciais.';
    }
    if ( b === 0 ) {
        return 'Dalyba is nulio negalima.'
    }

    return a / b;
}


// nelabai teisingi
console.log( dalyba( true, false ) );
console.log( dalyba( 'true', 'false' ) );
console.log( dalyba( ['true'], ['false'] ) );
console.log( dalyba( 5, NaN ) );
console.log( dalyba( NaN, 5 ) );
console.log( dalyba( 5, 0 ) );
console.log( dalyba( 0, 0 ) );
console.log( dalyba( '5', '5' ) );
console.log( dalyba( -'5', -'asd' ) );
console.log( dalyba( +'2+2', 2 ) );
console.log( dalyba( +'2'+'2', 2 ) );
// teisingi
console.log( dalyba( +('2'+'2'), 2 ) );
console.log( dalyba( -'5', -'5' ) );
console.log( dalyba( +'5', +'5' ) );
console.log( dalyba( 10, 2 ) );
console.log( dalyba( 0.5, -.2 ) );
console.log( dalyba( 0, -.2 ) );
console.log( dalyba( 5, 5 ) );
console.log( dalyba( 5, 5e0 ) );
console.log( dalyba( 2+2, Math.PI ) );
console.log( dalyba( -1050, -50 ) );
console.log( dalyba( -1050, Infinity ) );
console.log( dalyba( Infinity, -1050 ) );

