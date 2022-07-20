module.exports = function toReadable (number) {
    // function toReadable(number) {

const lengthNumber = String(number).length;
  //-------------- function for One Number-----------------------------------------
  function oneNumber(number) {
    if (number === 0) {
        return '';
    } if (number === 1) {
        return 'one';
    } if (number === 2) {
        return 'two';
    } if (number === 3) {
         return 'three';
    } if (number === 4) {
        return 'four';
    } if (number === 5) {
        return 'five';
    } if (number === 6) {
        return 'six';
    } if (number === 7) {
        return 'seven';
    } if (number === 8) {
        return 'eight';
    } if (number === 9) {
        return 'nine';
}
  }

 //-----------------преобразование двухзначного в имя--------------------------------------
 function NameTwoDigitNumber(number) {
    const arrayTwoDigitNumber = dividesTwoDigitNumber(number);
    firstNumberTwoDigit = arrayTwoDigitNumber[0]; //число
    nameFirstNumberTwoDigit = twoNumber(firstNumberTwoDigit); //имя 1ой цифры в числе
    secondNumberTwoDigit = arrayTwoDigitNumber[1]; //число
    nameSecondNumberTwoDigit = oneNumber(secondNumberTwoDigit); //имя 2ой цифры в числе
    const nameTwoDigitNumber = String(nameFirstNumberTwoDigit +' '+ nameSecondNumberTwoDigit);
    // console.log(nameTwoDigitNumber);
    return nameTwoDigitNumber;
 }

 //-----------------additional function for Two Number возвразает массив из 2х чисел--------------------------------------
 function dividesTwoDigitNumber(number) { //для 25, 78, 31
    roundingTwoDigit = Math.floor(number / 10) * 10; //округлила до десятков. это число
    differenceTwoDigit = number - roundingTwoDigit; //вторая цифра в двузначном числе
    // console.log(roundingTwoDigit,differenceTwoDigit);
    return [roundingTwoDigit, differenceTwoDigit]
 }

 //-----------------function for Two Number--------------------------------------
    function twoNumber(number) {
        if (number === 10) {
        return 'ten';
    } else if (number === 11) {
        return 'eleven';
    } else if (number === 12) {
        return 'twelve';
    } else if (number === 13) {
        return 'thirteen';
    } else if (number === 14) {
        return 'fourteen';
    } else if (number === 15) {
        return 'fifteen';
    } else if (number === 16) {
        return 'sixteen';
    } else if (number === 17) {
        return 'seventeen';
    } else if (number === 18) {
        return 'eighteen';
    } else if (number === 19) {
        return 'nineteen';
    } else if (number === 20) {
        return 'twenty';
    } else if (number === 30) {
        return 'thirty';
    } else if (number === 40) {
        return 'forty';
    } else if (number === 50) {
        return 'fifty';
    } else if (number === 60) {
        return 'sixty';
    } else if (number === 70) {
        return 'seventy';
    } else if (number === 80) {
        return 'eighty';
    } else if (number === 90) {
        return 'ninety';
    } else {
        return NameTwoDigitNumber(number);
    }

}




  //-----------------function for Three Number--------------------------------------
//   if (secondAndThirdNumberThreeDigit

  //-----------------function for Three Number--------------------------------------
  function threeNumber() {
    const numberToString = String(number);
    firstNumberThreeDigit = numberToString[0];
    secondNumberThreeDigit = numberToString[1];
    thirdNumberThreeDigit = numberToString[2];
    nameFirstNumberTwoDigit = oneNumber(Number(firstNumberThreeDigit)); //имя 1ой цифры в числе
    secondAndThirdNumberThreeDigit = secondNumberThreeDigit + thirdNumberThreeDigit; //строка из двух последних цифр
    if (Number(secondNumberThreeDigit) === 0) {
        const nameThirdNumberTwoDigit = oneNumber(Number(thirdNumberThreeDigit));
        let hundred = 'hundred';
        if(Number(thirdNumberThreeDigit) !== 0) {
            hundred += ' ';
        }
        const threeNumberWithZero = nameFirstNumberTwoDigit + ' ' + hundred + nameThirdNumberTwoDigit;
        return threeNumberWithZero;

    }
    else {
        const nameSecondAndThirdNumberThreeDigit = twoNumber(Number(secondAndThirdNumberThreeDigit));
        nameFirstNumberTwoDigit = oneNumber(Number(firstNumberThreeDigit)); //имя 1ой цифры в числе
        const threeNumberWithoutZero = nameFirstNumberTwoDigit + ' ' + 'hundred' + ' ' + nameSecondAndThirdNumberThreeDigit;
        return threeNumberWithoutZero;
    }

    }

    if (number === 0)
    {
        return 'zero';
    }
//--------------------if for One Number-----------------------------------
    if (lengthNumber === 1) {
        return oneNumber(number);
    }
//-----------------if for Two Number--------------------------------------
    if (lengthNumber === 2) {
        return twoNumber(number);
    }
//-----------------if for Three Number--------------------------------------
    if (lengthNumber === 3) {
        return threeNumber(number);
    }

}
// for(let i = 0; i < 10; i++)
// {
    // i = 397;
    // console.log(toReadable(i));
// }
