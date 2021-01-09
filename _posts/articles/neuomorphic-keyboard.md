---
date: 2020-12-26T15:52:05.720Z
updated: 2020-12-26T16:05:10.920Z
title: Neuomorphic Keyboard
slug: neuomorphic-keyboard
categories: 折腾
type: Post
permalink: posts/neuomorphic-keyboard
---

> 新拟物化设计
> Writer: Braydon Coyer

## HTML实现

```html
<div class="container">
  <div class="textbox__container">
    <textarea autofocus name="textbox" cols="128" rows="10" class="textbox" placeholder="Start typing on your keyboard to see the neuomorphic keyboard react..."></textarea>
  </div>
  <div class="container__content">
    <div class="keyboard">
    <div class="keyboard__row">
      <div class="keyboard__keys">
        <span class="key"><p class="key__letter">Q</p></span>
        <span class="key"><p class="key__letter">W</p></span>
        <span class="key"><p class="key__letter">E</p></span>
        <span class="key"><p class="key__letter">R</p></span>
        <span class="key"><p class="key__letter">T</p></span>
        <span class="key"><p class="key__letter">Y</p></span>
        <span class="key"><p class="key__letter">U</p></span>
        <span class="key"><p class="key__letter">I</p></span>
        <span class="key"><p class="key__letter">O</p></span>
        <span class="key"><p class="key__letter">P</p></span>
      </div>
    </div>
    <div class="keyboard__row">
      <div class="keyboard__keys">
        <span class="key"><p class="key__letter">A</p></span>
        <span class="key"><p class="key__letter">S</p></span>
        <span class="key"><p class="key__letter">D</p></span>
        <span class="key"><p class="key__letter">F</p></span>
        <span class="key"><p class="key__letter">G</p></span>
        <span class="key"><p class="key__letter">H</p></span>
        <span class="key"><p class="key__letter">J</p></span>
        <span class="key"><p class="key__letter">K</p></span>
        <span class="key"><p class="key__letter">L</p></span>
      </div>
    </div>
    <div class="keyboard__row">
      <div class="keyboard__keys">
         <span class="key"><p class="key__letter">Z</p></span>
        <span class="key"><p class="key__letter">X</p></span>
        <span class="key"><p class="key__letter">C</p></span>
        <span class="key"><p class="key__letter">V</p></span>
        <span class="key"><p class="key__letter">B</p></span>
        <span class="key"><p class="key__letter">N</p></span>
        <span class="key"><p class="key__letter">M</p></span>
      </div>
    </div>
  <div class="keyboard__row">
    <div class="keyboard__keys">
      <span class="key key__space"><p class="key__letter">Space</p></span>
    </div>
  </div>
</div>
  </div>
</div>

```

## CSS实现

> 这里使用了SCSS，据我所知，和css有点不一样的

```scss
@import url('https://fonts.googleapis.com/css?family=Ubuntu:500&display=swap');

$primary-color: #F2F7FB;
$key-corner: #E9F2FB;
$shadow-color: #D9E3EC;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}

body {
  background: $primary-color;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:100vh;
  flex-direction: column;
  
  &__content {
    width: 60%;
  }
}

.textbox {
  width: 100%;
  resize: none;
  background: linear-gradient(145deg, $primary-color, $key-corner);
  box-shadow:  inset 8px 8px 15px $shadow-color;
  border-radius: 12px;
  border: none;
  overflow: auto;
  padding: 20px;
  outline: none;
  margin: 50px 0;
}

.keyboard {
  padding: 25px;
  background: linear-gradient(145deg, $primary-color, $key-corner);
  box-shadow:  8px 8px 15px $shadow-color;
  border-radius: 12px;
  min-width: 750px;
  max-width: 1000px;
  
  &__keys {
    display: flex;
    justify-content: center;
  }
  
}

.key { 
  display: flex;
 
  justify-content: center;
  align-items: center;
  padding:10px;
  margin: 10px;
  min-width: 50px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(145deg, $primary-color, $key-corner);
  box-shadow:  5px 5px 15px $shadow-color;
  
  &__letter {
    background: -webkit-linear-gradient(245deg, #1E71F5, #3CDEE7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  &__down {
    color: linear-gradient(45deg, #1E71F5, #3CDEE7);;
    background: linear-gradient(145deg, $key-corner,  $primary-color);
    box-shadow:  inset 5px 5px 5px $shadow-color;
  }
  
  &__space {
    width: 60%;
  }
}
```

## JavaScript实现

```javascript
const kd = document.querySelectorAll(".key");
const textbox = document.querySelector(".textbox");

let keyPressed = (e) => {
  let kc = e.keyCode;

    if ( (kc >= 65 && kc <= 90) || kc == 32) {
        if (kc == 81) { kd[0].classList.add("key__down"); }
        else if (kc == 87) { kd[1].classList.add("key__down"); }
        else if (kc == 69) { kd[2].classList.add("key__down"); }
        else if (kc == 82) { kd[3].classList.add("key__down"); }
        else if (kc == 84) { kd[4].classList.add("key__down"); }
        else if (kc == 89) { kd[5].classList.add("key__down"); }
        else if (kc == 85) { kd[6].classList.add("key__down"); }
        else if (kc == 73) { kd[7].classList.add("key__down"); }
        else if (kc == 79) { kd[8].classList.add("key__down"); }
        else if (kc == 80) { kd[9].classList.add("key__down"); }
        else if (kc == 65) { kd[10].classList.add("key__down"); }
        else if (kc == 83) { kd[11].classList.add("key__down"); }
        else if (kc == 68) { kd[12].classList.add("key__down"); }
        else if (kc == 70) { kd[13].classList.add("key__down"); }
        else if (kc == 71) { kd[14].classList.add("key__down"); }
        else if (kc == 72) { kd[15].classList.add("key__down"); }
        else if (kc == 74) { kd[16].classList.add("key__down"); }
        else if (kc == 75) { kd[17].classList.add("key__down"); }
        else if (kc == 76) { kd[18].classList.add("key__down"); }
        else if (kc == 90) { kd[19].classList.add("key__down"); }
        else if (kc == 88) { kd[20].classList.add("key__down"); }
        else if (kc == 67) { kd[21].classList.add("key__down"); }
        else if (kc == 86) { kd[22].classList.add("key__down"); }
        else if (kc == 66) { kd[23].classList.add("key__down"); }
        else if (kc == 78) { kd[24].classList.add("key__down"); }
        else if (kc == 77) { kd[25].classList.add("key__down"); }
        else if (kc == 32) {
            kd[26].classList.add("key__down");
            textbox.innerHTML += "&nbsp;";
        }
    }
}

let keyReleased = (e) => {
   let kc = e.keyCode;
  if (kc == 81) { kd[0].classList.remove("key__down"); }
        else if (kc == 87) { kd[1].classList.remove("key__down"); }
        else if (kc == 69) { kd[2].classList.remove("key__down"); }
        else if (kc == 82) { kd[3].classList.remove("key__down"); }
        else if (kc == 84) { kd[4].classList.remove("key__down"); }
        else if (kc == 89) { kd[5].classList.remove("key__down"); }
        else if (kc == 85) { kd[6].classList.remove("key__down"); }
        else if (kc == 73) { kd[7].classList.remove("key__down"); }
        else if (kc == 79) { kd[8].classList.remove("key__down"); }
        else if (kc == 80) { kd[9].classList.remove("key__down"); }
        else if (kc == 65) { kd[10].classList.remove("key__down"); }
        else if (kc == 83) { kd[11].classList.remove("key__down"); }
        else if (kc == 68) { kd[12].classList.remove("key__down"); }
        else if (kc == 70) { kd[13].classList.remove("key__down"); }
        else if (kc == 71) { kd[14].classList.remove("key__down"); }
        else if (kc == 72) { kd[15].classList.remove("key__down"); }
        else if (kc == 74) { kd[16].classList.remove("key__down"); }
        else if (kc == 75) { kd[17].classList.remove("key__down"); }
        else if (kc == 76) { kd[18].classList.remove("key__down"); }
        else if (kc == 90) { kd[19].classList.remove("key__down"); }
        else if (kc == 88) { kd[20].classList.remove("key__down"); }
        else if (kc == 67) { kd[21].classList.remove("key__down"); }
        else if (kc == 86) { kd[22].classList.remove("key__down"); }
        else if (kc == 66) { kd[23].classList.remove("key__down"); }
        else if (kc == 78) { kd[24].classList.remove("key__down"); }
        else if (kc == 77) { kd[25].classList.remove("key__down"); }
        else if (kc == 32) { kd[26].classList.remove("key__down"); }
}


window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyReleased);
// window.onload = () => {
//   document.querySelector(".textbox").focus();
// }

```