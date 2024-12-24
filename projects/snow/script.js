// susigeneruosim HTML struktura naudodami arrow funkcija

const generateHTML = () => {
  document.body.innerHTML = `
<div id="snow-container"></div>
<div id="greeting">
<h1>Linksmu kaledu! </h1>
<p>Kaledu be sniego nebuna!</p>
<button id="start-snowing">Let it snow</button>
</div> 
`;
};

// Cia gyvens musu snaigiu objektai
const snowflakes = [];

// Funkcija, kur sugeneruos snaiges objekta
const createSnowflake = () => {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * -50,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 3 + 1,
  };
};

// Funkcija, kuri prides nauja snaige i musu masyva;
const addSnowflake = () => {
  const snowflake = createSnowflake();
  snowflakes.push(snowflake);
};

// Funkcija, kuri atnaujins snaiges pozicija ekrane
const updateSnowflakes = () => {
  snowflakes.forEach((flake) => {
    flake.y += flake.speed;
    if (flake.y > window.innerHeight) {
      flake.y = Math.random() * -50;
      flake.x = Math.random() * window.innerWidth;
    }
  });
};

// Funkcija, kuri atvaizduos snaiges DOM'e
const renderSnowflakes = () => {
  const container = document.getElementById("snow-container");
  container.innerHTML = "";

  snowflakes.forEach((flake) => {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.backgroundColor = "white";
    div.style.borderRadius = "50%";
    div.style.width = `${flake.size}px`;
    div.style.height = `${flake.size}px`;
    div.style.left = `${flake.x}px`;
    div.style.top = `${flake.y}px`;
    container.appendChild(div);
  });
};

// Funkcija, prades sniega
const startSnowing = () => {
  setInterval(() => {
    addSnowflake();
    updateSnowflakes();
    renderSnowflakes();
  }, 50);
};

const applyStyles = () => {
  document.body.style.margin = "0";
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";
  document.body.style.backgroundColor = "#4276a2";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";

  const snowContainer = document.getElementById("snow-container");
  snowContainer.style.position = "absolute";
  snowContainer.style.top = "0";
  snowContainer.style.left = "0";
  snowContainer.style.width = "100%";
  snowContainer.style.height = "100%";
  snowContainer.style.pointerEvents = "none";
};

const initPage = () => {
  generateHTML();
  applyStyles();

  // Mygtuko funkcionalumas
  const button = document.getElementById("start-snowing");

  button.addEventListener("click", () => {
    startSnowing();
    button.disabled = true;
  });
};

initPage();
