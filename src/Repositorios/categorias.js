import config from '../config'

const URL_CATEGORIA = `${config.URL_BACKEND_TOP}/categorias`

function getAllCategoriesVideos() {
      /* Fetch - buscar dados ou pegar coisas */
  return fetch(`${URL_CATEGORIA}?_embed=videos`)
  .then(async (responstaDoServidor) => {
   
      if(responstaDoServidor.ok){
    const resposta = await responstaDoServidor.json()
    console.log(resposta)
    return resposta
      }
      throw new Error('nao foi')
  })
}

export default {
    getAllCategoriesVideos,
}