// const imageUrls = [
//   "https://placehold.co/600x400",
//   "https://placehold.co/600x400",
//   "https://placehold.co/600x400",
//   "https://placehold.co/600x400",
// ];

// const gallery = document.getElementById("gallery");

// // 1 budas

// for (let i = 0; i < imageUrls.length; i++) {
//   const image = imageUrls[i];
//   const imageElement = document.createElement("img");

//   imageElement.src = image;
//   imageElement.alt = image;

//   gallery.append(imageElement);
// }

/// 2 budas

const imageUrls = [
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
];

const gallery = document.getElementById("gallery");

imageUrls.forEach((image) => {
  const imageElement = document.createElement("img");

  imageElement.src = image;
  imageElement.alt = "Alt tekstas kai neuzkrauna image";

  gallery.append(imageElement);
});
