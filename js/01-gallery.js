import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal__image");

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function openModal(event) {
  event.preventDefault();
  const imageSrc = event.target.getAttribute("data-source");
  modalImage.src = imageSrc;
  modal.classList.add("is-open");
}

function closeModal(event) {
  if (event.key === "Escape") {
    modal.classList.remove("is-open");
    modalImage.src = "";
  }
}

function renderGallery() {
  const galleryItemsHTML = galleryItems.map((item) => createGalleryItem(item));
  galleryList.append(...galleryItemsHTML);

  const galleryLinks = document.querySelectorAll(".gallery__link");
  galleryLinks.forEach((link) => link.addEventListener("click", openModal));

  document.addEventListener("keydown", closeModal);
}

renderGallery();

console.log(galleryItems);
