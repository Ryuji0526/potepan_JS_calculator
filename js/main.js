'use strict'
{
  const mainSymbolBtns = document.querySelectorAll('#mainSymbol td');
  const subSymbolBtns = document.querySelectorAll('#subSymbol td')
  const numsBtns = document.querySelectorAll('#nums td');
  const resultValue = document.querySelector('#result > p');
  let currentValue = '0';

  // ０が数字 1が記号
  let prevLetter = 1;
  resultValue.textContent = currentValue;

  // font-sizeの変更
  function checkLength(){
    if(currentValue.length === 7){
      resultValue.style.fontSize = '53px';
    }
    if(currentValue.length === 8){
      resultValue.style.fontSize = '48px';
    }
    if(currentValue.length === 9){
      resultValue.style.fontSize = '43px';
    }
    if(currentValue.length === 10){
      resultValue.style.fontSize = '38px';
    }
  }

  // +/-入れ替え
  function changeSign(){
    if(currentValue === '0'){
      return;
    }
    if(eval(currentValue) > 0){
      currentValue = '-' + String(eval(currentValue));
      resultValue.textContent = currentValue;
      checkLength();
    }else{
      currentValue = String(eval(currentValue)).slice(1);
      resultValue.textContent = currentValue;
    }
  }

  //  結果表示
  function showResult(){
    currentValue = eval(currentValue);
    resultValue.textContent = currentValue;
  }
  
  // mainSymbolBtn押した時の操作
  mainSymbolBtns.forEach(btn => {
    btn.addEventListener('click', () =>{
      // 前の文字が記号だったら
      if(prevLetter === 1){
        return;
      }
      // =ボタン
      if(btn.textContent === '='){
        showResult(btn)
        return;
      }
      currentValue += btn.textContent;
      resultValue.textContent += btn.textContent;
      checkLength();
      prevLetter = 1;
    });
  });

  
   // subSymbolBtn押した時の操作
  subSymbolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // +/-ボタン
      if(prevLetter === 0 && btn.textContent === '+/-'){
        changeSign(btn);
        return;
        // %ボタン
      }else  if(prevLetter === 0 && btn.textContent === '%'){
        checkLength();
        currentValue =String(currentValue / 100);
        resultValue.textContent = currentValue;
        // ACボタン
      }else if(btn.textContent === 'AC'){
        currentValue = '0';
        prevLetter = 1;
        resultValue.style.fontSize = '60px';
        resultValue.textContent = currentValue;
      }
        return;
    })
  })

   // numsSymbolBtn押した時の操作
  numsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if(currentValue === '0'){
        currentValue = '';
      }
      if(currentValue.length === 10){
        return;
      }
    currentValue += btn.textContent;
    prevLetter = 0;
    resultValue.textContent = currentValue;
    checkLength();

  });
});
}