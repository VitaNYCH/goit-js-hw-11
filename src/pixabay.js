import axios from 'axios';
export default class PixabayApiService {
  constructor() {
    this.searchQueryEl = '';
  }

  axiosArticales() {
    console.log(this);
    const url = `https://pixabay.com/api/?key=34571804-15b594ccd9e8c9a81bc1227fe&q=${this.searchQueryEl}&language=en&image_type=photo&orientation=horizontal&safesearch=true&field=webformatURL,largeImageURL,tags,likes,views,comments,downloads`;

    return axios
          .get(url)
          .then(response => {
              return response.data.hits;
          })
    }
    
  get searchQuery() {
    return this.searchQueryEl;
  }
  set searchQuery(newQuery) {
    this.searchQueryEl = newQuery;
    }
    
}
