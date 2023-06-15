// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

const boxPicturesEl = document.querySelector('.gallery');

const galleryPicturesEls = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>
</li>`);

boxPicturesEl.insertAdjacentHTML('beforeend', galleryPicturesEls.join(''));

const lightboxGalleryEl = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
});
