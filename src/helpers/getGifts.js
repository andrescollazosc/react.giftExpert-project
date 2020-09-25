const API_KEY = "4unRoUHivM7m8qxkM6QxU4he4znh1tCB";

export const getGift = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${API_KEY}`;

  const result = await fetch(URL);
  const { data } = await result.json();
  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifts;
};
