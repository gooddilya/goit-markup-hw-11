import axios from 'axios';

export default class API_KEY {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.per_page = 40;
  }
  async fetchGallery() {
    const axiosOptions = {
      method: 'get',
      url: 'https://pixabay.com/api/',
      params: {
        key: '41014008-5eaed4c4e1b5d212520c9fe8d',
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: `${this.page}`,
        per_page: `${this.per_page}`,
      },
    };
    try {
      const response = await axios(axiosOptions);

      const data = response.data;

      this.incrementPage();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  resetEndOfHits() {
    this.endOfHits = false;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
