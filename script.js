let submitBtn = document.querySelector("#calculate-btn");
let maths = document.querySelector("#maths");
let biology = document.querySelector("#biology");
let chemistry = document.querySelector("#chemistry");
let physics = document.querySelector("#physics");
let engCutoff = document.querySelector("#eng-cutoff");
let medCutoff = document.querySelector("#med-cutoff");

submitBtn.addEventListener("click", calculate);

function calculate() {
  let mathsMark = maths.value;
  let bioMark = biology.value;
  let cheMark = chemistry.value;
  let phyMark = physics.value;
  if (mathsMark != "" && bioMark != "" && cheMark != "" && phyMark != "") {
    if (mathsMark < 101 && bioMark < 101 && cheMark < 101 && phyMark < 101) {
      let engRes =
        parseFloat(mathsMark) +
        parseFloat(cheMark) / 2 +
        parseFloat(phyMark) / 2;
      let medRes =
        parseFloat(bioMark) / 2 +
        parseFloat(cheMark) / 4 +
        parseFloat(phyMark) / 4;

      engCutoff.innerHTML = `Engineering Cut-off Mark : ${engRes}`;
      medCutoff.innerHTML = `Medical Cut-off Mark : ${medRes}`;
      console.log("submit clicked");
    } else {
      alert("Enter marks outoff 100");
    }
  } else {
    alert("Enter marks outoff 100");
  }
}
