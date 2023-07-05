import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const element = galleryItems[i];
  const index = i;

  const { preview, original, description } = element;
  const item = document.createElement("li");
  const link = document.createElement("a");
  const image = document.createElement("img");

  image.src = preview;
  image.alt = description;
  link.href = original;

  image.classList.add("gallery__image");
  image.setAttribute("id", `${index}`);
  link.classList.add("gallery__link");

  link.appendChild(image);
  item.appendChild(image);

  gallery.appendChild(item);
}

const galleryLink = document.querySelectorAll(".gallery__link");
galleryLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

gallery.addEventListener("click", (event) => {
  const clickedImage = event.target;

  const id = clickedImage.id;
  const url = galleryItems[id].original;
  const descr = galleryItems[id].description;

  console.log(url);
  const instance = basicLightbox.create(`<img src="${url} alt = ${descr}>`);

  instance.show();
});
