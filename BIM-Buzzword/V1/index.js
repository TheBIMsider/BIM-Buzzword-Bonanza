// BIM Buzzword Bonanza V1.0
// Constants
const buzzBtn = document.getElementById("buzzBtn");
const buzzWindow = document.getElementById("window");
const buzzDisplay = document.getElementById("buzzDisplay");
const buzz = [
  "Digital Twin",
  "LOD (Level of Development or Detail)",
  "LOI (Level of Information)",
  "LOX (Level of X)",
  "BIM Level 2",
  "BIM Level 3",
  "BIM Level 8 😆",
  "Disruptive Technology 😱",
  "6D (Performance)",
  "7D (Facilities Maintenance and Management)",
  "8D (Deconstruction)",
  "BIM Mandate",
  "ISO 19650",
  "Generative Design",
  "AI (Artificial Intelligence)",
  "Machine Learning",
  "Robots 🤖",
  "CDE (Common Date Environment)",
  "The Cloud ☁",
  "BIM Model 😺",
  "Visual Programing",
  "AR (Augmented Reality) ",
  "VR (Virtual Reality)",
  "XR (Extended Reality)",
];
// Shuffle the buzzword array so the first answer is not always the same
shuffle(buzz);

const windowColor = [
  "#ABDEE6",
  "#CBAACB",
  "#FFFFB5",
  "#FFCCB6",
  "#F3B0C3",
  "#C6DBDA",
  "#FEE1E8",
  "#FED7C3",
  "#F6EAC2",
  "#ECD5E3",
  "#FCB9AA",
  "#FFDBCC",
  "#ECEAE4",
  "#A2E1DB",
  "#55CBCD",
];

let counterWindowColor = 0;
let windowColorCount = windowColor.length;
let counterBuzz = 0;
let buzzCount = buzz.length;

// load all event listeners
loadEventListeners();
function loadEventListeners() {
  // Change advice
  buzzBtn.addEventListener("click", changeBuzz);
  // Change  window color event
  buzzBtn.addEventListener("click", changeWindowColor);
}

// Change Window Color
function changeWindowColor() {
  shuffle(windowColor);
  counterWindowColor += 1;
  let currentColor = counterWindowColor % windowColorCount;
  nextColor = (currentColor + 1) % windowColorCount;
  buzzWindow.style.backgroundColor = windowColor[nextColor];
}

// Change Buzzword
function changeBuzz() {
  counterBuzz += 1;
  let currentBuzz = counterBuzz % buzzCount;
  nextBuzz = (currentBuzz + 1) % buzzCount;
  buzzDisplay.innerHTML = buzz[nextBuzz];
}

// Shuffle function - like taking a card out of a deck and sticking it back in the middle
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
