import axios from "axios";

const baseUrl = 'https://api.thecatapi.com/v1/images/search';

/**
 * Effectue une requête vers le serveur thecatapi et récupère une photo basée sur les informations
 * passées en paramètres.
 * @param mimes String Le type de fichier désiré ('gif', ou 'png');
 * @returns {Promise<AxiosResponse<T>>} Le résultat de la requête effectuée vers le serveur.
 */
async function getCats(mimes = null) {
  let url = baseUrl;
  if (mimes) {
    url += `?mime_types=${mimes}`;
  }

  return await axios.get(url)
}

export { getCats };
