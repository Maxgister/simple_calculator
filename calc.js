function calculator(string) {
  // write your code here
  
  let numbers = string.split(' '),
      numbersArab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numbersRome = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
      operators = ['/', '*','+', '-'];

  let x = numbers[0],
      y = numbers[2],
      z = numbers[1];
  let result = '';

    //ПРОВЕРЯЕМ РИМСКИЕ ЦИФРЫ I <= X
    function checkElementRome (arg) {
        for (let i = 0; i < numbersRome.length; i++) {
            if (numbersRome[i] == arg) {
                return true;
            }
        }
        return false;
    }

    //ПРОВЕРЯЕМ АРАБСКИЕ ЦИФРЫ  1 <= 10
    function checkElementArab (arg) {
    for (let i = 0; i < numbersArab.length; i++) {
        if (numbersArab[i] === Number(arg) ) {
                return true;
            }
        }
    return false;
    }

    //ПРОВЕРЯЕМ ОПЕРАТОРЫ
    function checkOperator (arg) {
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] == (arg) ) {    
                return true;
                }
            }
        return false;
        }
    
    //ИЗ РИМСКИХ В АРАБСКИЕ
    function deromanization (roman) {
        roman = roman.toUpperCase();
        let lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
            arabic = 0,
            i = roman.length;
        while (i--) {
          if ( lookup[roman[i]] < lookup[roman[i+1]] )
            arabic -= lookup[roman[i]];
          else
            arabic += lookup[roman[i]];
        }
        return arabic;
      }
    
    //ИЗ АРАБСКИХ В РИМСКИЕ 
    function romanization (arg) {
        let dict = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
            roman = '',
            i;
        for ( i in dict ) {
          while ( arg >= dict[i] ) {
            roman += i;
            arg -= dict[i];
          }
        }
        return roman;
      }

    //ВЫЧИСЛЕНИЯ
    function calculation () {
        x = Number(x);
        y = Number(y);
        switch (z) {
            case '+':
                result = x + y;
                break;
            case '-':
                result = x - y;
                break;
            case '*':
                result = x * y;
                break;
            case '/':
                result = Math.floor(x / y);
                break;
        }
    }

    switch (checkElementRome(x) && checkElementRome(y) || !checkElementArab(x) && !checkElementArab(y)) {
        case false:
            calculation();
            return `${result}`;
        case true:
            x = deromanization(x);
            y = deromanization(y);
            calculation();
            result = romanization(result);
            return `${result}`;
        default :
            return Error();
        }

}

module.exports = calculator;
