function random(m,mx,inc=0,r=10){return (Math.floor(Math.random()*(mx-m+inc))+m).toString(r)}
function randomHex() {
  let hexVal = `#${
    random(0, 255, 1, 16).padStart(2, "0")
  }${
    random(0, 255, 1, 16).padStart(2, "0")
  }${
    random(0, 255, 1, 16).padStart(2, "0")
  }`;
  console.log(hexVal);
  return hexVal;
}

const rHex = randomHex();

let div = document.querySelector("#color"),
hex = div.childNodes[0] || document.querySelector("#color-name"),
box = div.childNodes[1] || document.querySelector("#color-box");

hex.innerHTML += rHex;
box.innerHTML = "";
box.style.backgroundColor = rHex;