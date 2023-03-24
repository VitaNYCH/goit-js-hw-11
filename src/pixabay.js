import axios from 'axios';
export default class PixabayApiService {
  constructor() {
    this.searchQueryEl = '';
    this.page = 1;
  }

  axiosArticales() {
    console.log(this);
    const url = `https://pixabay.com/api/?key=34571804-15b594ccd9e8c9a81bc1227fe&q=${this.searchQueryEl}&language=en&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

    return axios
          .get(url)
      .then(response => {
        this.incrementPage()
        // console.log(response.data.totalHits);
        console.log(response.data);
        return response.data;  
          })
    }
  
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get searchQuery() {
    return this.searchQueryEl;
  }
  set searchQuery(newQuery) {
    this.searchQueryEl = newQuery;
    }
    
}
