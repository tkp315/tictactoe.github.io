let music = new Audio("music.mp3");
let Turnting = new Audio("ting.mp3");
let click = new Audio("click.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let para = document.getElementById("in");
let isgameover = false;
// change turn
const changeTurn = () => {
  if (turn === "X") {
    return "0";
  } else {
    return "X";
  }
  // return turn === "X"? "0": "X"
};
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imagebox")
        .getElementsByTagName("img")[0].style.width = "200px";
      music.pause();
      gameover.play();
    } else if (
      win.forEach((i) => {
        if (
          boxtext[i[0]].innerText !== "" &&
          boxtext[i[1]].innerText !== "" &&
          boxtext[i[2]].innerText !== ""
        ) {
          if (
            boxtext[i[0]].innerText !== boxtext[i[1]].innerText ||
            boxtext[i[0]].innerText !== boxtext[i[2]].innerText ||
            boxtext[i[1]].innerText !== boxtext[i[2]].innerText
          ) {
          }
        }
      })
    );
  });
};

// Game logic
if (!isgameover) {
  music.play();
}
let boxes = document.getElementsByClassName("gamebox");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      Turnting.play();
      checkWin();
      if (!isgameover) {
        // para.innerText = "Turn for" + turn;
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
// adding reset button

reset.addEventListener("click", () => {
  click.play();
  music.pause();
  let boxes = document.querySelectorAll(".boxtext");
  Array.from(boxes).forEach((element) => {
    element.innerText = "";
  });
  isgameover = false;
  turn = "X";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

  document
    .querySelector(".imagebox")
    .getElementsByTagName("img")[0].style.width = "0px";
  music.play();
});
