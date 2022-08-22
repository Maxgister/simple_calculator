function calculator(string) {
  // write your code here
  let numbers = string.split(' '),
      Arab = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      Rome = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
      operators = ['/', '*','+', '-'];

  let x = numbers[0],
      y = numbers[2],
      z = numbers[1],
      result = null;


    function checkType (type, arg) {
      if (numbers.length <= 3) {
        for (let i = 0; i < type.length; i++) {
          switch (arg) {
            case Rome[i]:
              return 'Rome';
            case Arab[i]:
              return 'Arab';
            case !Rome:
              return false;
            case !Arab:
              return false;
          }
        }    
      } else {
        throw Error();
      }
    }

    //ИЗ РИМСКИХ В АРАБСКИЕ
    function toArab (roman) {
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
    function toRome (arg) {
        let dict = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
            roman = '',
            i;
        if (arg > 0) {
            for ( i in dict ) {
          while ( arg >= dict[i] ) {
            roman += i;
            arg -= dict[i];
          }
        }
      } else {
            return '';
      }
        return roman;
      }

    //ВЫЧИСЛЕНИЯ
    function calculation () {
        x = Number(x);
        y = Number(y);
        if (operators.includes(z)) {
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
      } else {
        throw Error();
      }
    }

    
   switch (checkType(Arab, x) && checkType(Arab, y) || checkType(Rome, x) && checkType(Rome, y)) {
        case 'Arab':
            calculation();
            return `${result}`;
        case 'Rome':
            x = toArab(numbers[0]);
            y = toArab(numbers[2]);
            calculation();
            result = toRome (result);
            return `${result}`;
        default:
            throw Error();
        }
    
} 

module.exports = calculator;