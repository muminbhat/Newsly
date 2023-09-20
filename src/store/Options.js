const options = {
    method: "GET",
    url: "https://real-time-news-data.p.rapidapi.com/top-headlines",
    params: {
      country: "IN",
      lang: "en",
      pageSize: pageSize,
      page: page, // Include the page parameter
    },
    headers: {
      'X-RapidAPI-Key': '14616a1273mshd7d4e0ae62d41dep1beac5jsn9bfecb7afa09',
      'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
    },
  }
export default options;