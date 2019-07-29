function getRandom () {
  return Math.floor(Math.random() * (120 - 20 + 1) ) + 20;
}

function getCrystal () {
  return Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
}

var crystals = [];
var red = 0;
var green = 0;
var blue = 0;
var yellow = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;
var crystalValue = 0;

function resetCrystals () {
  crystals = [];
  for (var i = 0; i < 4; i++) {
  var number = getCrystal();
  if (crystals.indexOf(number) >= 0) {
    number = getCrystal();
    i--;
  } else {
     crystals.push(number);
   }
};
};

var rnd = getRandom();

function setValues () {
  red = crystals[0];
  green = crystals[1];
  blue = crystals[2];
  yellow = crystals[3];
  totalScore = 0;
  rnd = getRandom();
  $(".red").attr("value", red);
  $(".green").attr("value", green);
  $(".blue").attr("value", blue);
  $(".yellow").attr("value", yellow);
  $("#random").text(rnd);
  $("#totalScore").text(0);
  console.log(crystals);
  console.log(rnd);
  console.log(red);
  console.log(green);
  console.log(blue);
  console.log(yellow);
};

resetCrystals();
setValues();

$(".img").on("click", function() {
  crystalValue = parseInt($(this).attr("value"));
  totalScore += crystalValue;
  $("#totalScore").text(totalScore);

if (totalScore == rnd) {
  $("#result").text("You've won the game");
  wins++;
  $("#wins").text(wins);
  resetCrystals();
  setValues();
} else if (totalScore > rnd) {
  $("#result").text("You've lost the game");
  losses++;
  $("#losses").text(losses);
  resetCrystals();
  setValues();
};

});

// $(".crystals").click(clickedCrystal());
