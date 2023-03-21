import './css/styles.css';
import PixabayApiService from './pixabay';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
}
console.log(refs.searchForm);
console.log(refs.galleryContainer);

const pixabayApiService = new PixabayApiService();
refs.searchForm.addEventListener('submit', onSearchForm);

function onSearchForm(evt) {
  evt.preventDefault();
  clearContainer();  
pixabayApiService.searchQuery = evt.currentTarget.elements.searchQuery.value;
  
  pixabayApiService.axiosArticales().then(renderGallery);
}

function renderGallery(hits) {
  const markupGallery = createGalleryCard(hits);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markupGallery);
  // console.log(markupGallery);
  const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
}

function createGalleryCard(hits) {
  console.log(hits);
  return hits.map(
    ({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `<div class="photo-card">
 <a class=photo-card__link href="${largeImageURL}"> <img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${likes}
    </p>
    <p class="info-item">
      <b>Views</b>${views}
    </p>
    <p class="info-item">
      <b>Comments</b>${comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${downloads}
    </p>
  </div>
</div>`;
    }
  )
    .join('');

}

function clearContainer() {
  refs.galleryContainer.innerHTML = ' ';
}




