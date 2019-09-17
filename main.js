"use strict";

{
  const ROOT = document.documentElement;
  const BUTTON = document.querySelector(".button");
  const RESULT = document.querySelector(".result");

  const FORTUNE_LIST = [["大吉", "yellow"],
                       ["吉", "orange"],
                       ["中吉", "pink"],
                       ["小吉", "green"],
                       ["末吉", "blue"],
                       ["凶", "white"],
                       ["大凶", "gray"]];

  BUTTON.addEventListener("click",()=>{
    let _randNum = Math.floor(Math.random()*FORTUNE_LIST.length);

    ROOT.style.setProperty("--result-color",FORTUNE_LIST[_randNum][1]);
    RESULT.textContent = FORTUNE_LIST[_randNum][0];

    // CSS変数の値の取得
    console.log(getComputedStyle(ROOT).getPropertyValue("--result-color"));
  });
}