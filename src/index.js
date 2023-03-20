import './css/styles.css';
const axios = require('axios').default;
const refs = {
    searchForm: document.querySelector('#search-form'),
}
console.log(refs.searchForm);

axios
  .get(
    'https://pixabay.com/api/?key=34571804-15b594ccd9e8c9a81bc1227fe&q=flowers&language=en&image_type=photo&orientation=horizontal&safesearch=true'
  )
  .then(response => console.log('response', response.data));