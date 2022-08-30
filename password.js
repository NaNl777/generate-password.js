function generatePassword(length, lvl, number = 1) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';
    const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';
    let newPassword = [];
    

 for(let i = 0; i < number; i++) {
    let word = '';
// Проверяет второй параметр. Т.е если не вы указали качестве второго параметра строку, и неправильно написал уровень, то условия не выполниться!
    if(lvl === 'easy') { 
        for (let i = 0; i < length; i++) { // Цикл потворяеться столько раз, сколько вы число указали в качачестве первой параметры. Т.е длина ищет длину пороля!
          let ramdomAlphabet = alphabet.charAt([Math.floor(Math.random() * alphabet.length)]);
          word += ramdomAlphabet;      
    } 
   }

    else if (lvl === "medium") {
        for(let i = 0; i < length; i++) {
            let randomAlphDig = alphabet.concat(digits); //Использую метод concat для того чтобы соединить значения.
            let one_symbol = randomAlphDig.charAt([Math.floor(Math.random() * randomAlphDig.length)]);
            word += one_symbol;// Умею брать по 1 символу.
    } 
   }

    else if (lvl === "hard") {
        for (let i = 0; i < length; i++) {
           let randomSymbols = alphabet.concat(digits, symbols)
           let one_symbol = randomSymbols.charAt([Math.floor(Math.random() * randomSymbols.length)]);
           word += one_symbol;
    }   
}
//Check на повторние пороля в массиве! Т.е если пороль повториться, итерация каждый раз будет откатываться
  if(newPassword.includes(word)){
    i--;
 } else {
    newPassword.push(word)
 }
 }
 return number > 1 ? newPassword : newPassword.join(' ') 
}

generatePassword(5, 'hard', 2)
