const apiKey = "MgbAc48XyG1EQOju9ewsr66BqtoQeI8A"; // Apikey de giphy develop

export default function getGifs({ keyword = "", numGifs = 10 } = {}) {
	const ApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${numGifs}&offset=0&rating=g&lang=en`;

	return fetch(ApiURL)
		.then((res) => res.json())
		  .then((response) => {
			  const { data } = response;
			  if (Array.isArray(data)) {
				    const gifs = data.map((image) => {
					  const { images, title, id } = image;
					  const { url } = images.downsized_medium;
					  return { title, url, id };
				  });
				  return gifs;
			  }
		  });
}
