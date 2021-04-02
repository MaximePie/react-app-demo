import axios from "axios";

const baseUrl = 'https://api.thecatapi.com/v1/images/search';

async function getCats(mimes = null) {
  let url = baseUrl;
  if (mimes) {
    url += `?mime_types=${mimes}`;
  }

  return await axios.get(url)
}

export { getCats };
