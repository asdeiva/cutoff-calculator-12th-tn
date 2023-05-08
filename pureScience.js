let submitBtn = document.querySelector("#calculate-btn");
let botony = document.querySelector("#botony");
let zoology = document.querySelector("#zoology");
let chemistry = document.querySelector("#chemistry");
let physics = document.querySelector("#physics");
let medCutoff = document.querySelector("#med-cutoff");

submitBtn.addEventListener("click", calculate);

function calculate() {
  let botMark = botony.value;
  let zooMark = zoology.value;
  let cheMark = chemistry.value;
  let phyMark = physics.value;
  if (botMark != "" && zooMark != "" && cheMark != "" && phyMark != "") {
    if (botMark < 101 && zooMark < 101 && cheMark < 101 && phyMark < 101) {
      let medRes =
        parseFloat(botMark / 4) +
        parseFloat(zooMark) / 4 +
        parseFloat(cheMark) / 4 +
        parseFloat(phyMark) / 4;

      medCutoff.innerHTML = `Medical Cut-off Mark : ${medRes}`;
      console.log("submit clicked");
    } else {
      alert("Enter marks outoff 100");
    }
  } else {
    alert("Enter marks outoff 100");
  }
}
