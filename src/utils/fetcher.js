import axios from 'axios';

export class fetcher {
  result = null;

  async GET(url) {
    const query = await axios.get(url);
    this.result = query.data;
  }

  async POST(url) {
    const query = await axios.post(url);
    this.result = query.data;
  }

  async DELETE(url) {
    const query = await axios.delete(url);
    this.result = query.data;
  }
}
