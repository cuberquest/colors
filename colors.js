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

document.getElementById("color-name").innerHTML += rHex;
document.getElementById("color-box").innerHTML = "";
document.getElementById("color-box").style.backgroundColor = rHex;