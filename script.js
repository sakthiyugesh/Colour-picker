const Code = document.querySelector(".code");
const Buttton = document.querySelector(".button");

colourPicker = async () => {
  const eyeDropper = new EyeDropper();
  if (!window.EyeDropper) {
    console.log("not");
    return;
  } else {
    eyeDropper
      .open()
      .then((result) => {
        // console.log(result.sRGBHex);
        Code.innerHTML = result.sRGBHex;
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
Buttton.addEventListener("click", colourPicker);
