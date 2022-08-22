function calculator(string) {
  // write your code here
  
  let numbers = string.split(' '),
      Arab = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      Rome = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'],
      x = numbers[0],
      y = numbers[2],
      result = null;

    function checkType () {         
      if (Arab.includes(numbers[0]) && Arab.includes(numbers[2]) && numbers.length <= 3) {
        return 'Arab';
      }
      else if (Rome.includes(numbers[0]) && Rome.includes(numbers[2]) && numbers.length <= 3) {
        return 'Rome';
      }
      else {
        throw Error();
      }
    }

    function toArab (roman) {
        roman = roman.toUpperCase();
        let dict = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000},
            arabic = 0,
            i = roman.length;
        while (i--) {
          if ( dict[roman[i]] < dict[roman[i+1]] )
            arabic -= dict[roman[i]];
          else
            arabic += dict[roman[i]];
        }
        return arabic;
      }
    
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

    
    function calculation () {
        x = Number(x),
        y = Number(y);
    let operators = ['/', '*','+', '-'];
            if (operators.includes(numbers[1])) {
              switch (numbers[1]) {
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

    function counting() {
      switch (checkType()) {
        case 'Arab':
          calculation();
          return `${result}`;
        case 'Rome':
          x = toArab(x);
          y = toArab(y);
          calculation();
          result = toRome (result);
          return `${result}`;
        default:
          throw Error();
      }
    }
    return counting(string);
}
module.exports = calculator;