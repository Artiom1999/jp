// Gaunu, konteneri,i kuri sukursiu profilio kortele
const container = document.getElementById("profile-container");
// Mano profelio korteles duomenys kurie atsivaizdzuos kortelei
const userProfile = {
  name: "Vardenis Pavardenis",
  age: 30,
  photo:
    "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
  bio: "Esu daktaras kuris gydo zmones",
};

// Susikuriu profilio korteles HTML
const card = document.createElement("div");
card.classList.add("profile-card");

// Pridesim paveiksliuka
const img = document.createElement("img");
img.src = userProfile.photo;
img.alt = userProfile.name;
// Pridesim img
card.append(img);

// pridedam varda
const name = document.createElement("h2");
name.textContent = userProfile.name;
card.append(name);
// pridedam amziu
const age = document.createElement("p");
age.textContent = `Amzius: ${userProfile.age}`;
card.append(age);
// pridedam bio
const bio = document.createElement("p");
bio.textContent = userProfile.bio;
card.append(bio);

// Pridesim card
container.append(card);
