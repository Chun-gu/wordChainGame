const currentWord = document.getElementById("currentWord");
const nextWord = document.getElementById("nextWord");
const wordArr = [];

nextWord.addEventListener("keydown", onEnter);

function onEnter(e) {
  if (e.key === "Enter") {
    Submit();
  }
}

function addWord(newWord) {
  wordArr.push(newWord);
}

function Submit() {
  let cw = currentWord.innerText;
  const nw = nextWord.value.replace(/\s/gi, "");

  if (nw.length < 2 || nw.length > 5) {
    alert("두 글자 이상 다섯 글자 이하로 입력하세요. (공백 제외)");
    nextWord.value = "";
  } else if (wordArr.includes(nw)) {
    alert("이미 사용한 단어는 사용할 수 없습니다.");
    nextWord.value = "";
  } else if (cw.length === 0 && nw.length !== 0) {
    currentWord.innerText = nw;
    addWord(nw);
    nextWord.placeholder = "다음 단어";
    nextWord.value = "";
  } else if (cw[cw.length - 1] === nw[0]) {
    currentWord.innerText = nw;
    nextWord.value = "";
    addWord(nw);
  } else {
    alert(`"${cw[cw.length - 1]}"로 시작하는 단어를 입력하세요`);
    nextWord.value = "";
  }
}
