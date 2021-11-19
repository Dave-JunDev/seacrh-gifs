const apiKey = "place your api key here!!!"


export default function getGifs({keyword = ''} = {} ) {

const ApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

    return fetch(ApiURL)
   .then(res => res.json())
   .then(response =>{
      const {data} = response;
      if (Array.isArray(data)) {
          const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return {title, url, id}
      })
      return gifs;
    }
   })
};
