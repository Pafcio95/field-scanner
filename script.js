window.addEventListener("DOMContentLoaded", () => {
  //getting elements
  const wrapperElement = document.querySelector(".wrapper");
  const settingsComponent = document.querySelector(".settings");
  const programComponent = document.querySelector(".program");
  const startBtn = document.querySelector(".settings__button");
  const timeInput = document.querySelector(".settings__input");
  const numberParagraph = document.querySelector(".program__number");
  const timeParagraph = document.querySelector(".program__time");

  //settings
  let time, number, color, numberOrder, refreshIntervalId;

  //functions
  const startExercise = () => {
    settingsComponent.classList.add("hide");
    programComponent.classList.remove("hide");
    time = timeInput.value;
    refresh();
    refreshIntervalId = setInterval(refresh, 1000);
  };

  const endExercise = () => {
    programComponent.classList.add("hide");
    wrapperElement.removeAttribute("style");
    settingsComponent.classList.remove("hide");
    clearInterval(refreshIntervalId);
  };

  const draw = () => {
    number = Math.floor(Math.random() * 100);
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    if (red + green + blue > 500)
      wrapperElement.classList.add("wrapper--bright");
    else wrapperElement.classList.remove("wrapper--bright");

    color = `rgb(${red}, ${green}, ${blue})`;

    numberOrder = Math.floor(Math.random() * 3) - 1;
  };

  const refresh = () => {
    time--;
    if (time <= 0) return endExercise();

    draw();
    numberParagraph.textContent = number;
    numberParagraph.style.order = numberOrder;
    timeParagraph.textContent = `${time}s`;
    wrapperElement.style.backgroundColor = color;
  };

  //listeners
  startBtn.addEventListener("click", startExercise);
});
