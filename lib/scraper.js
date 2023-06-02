const axios = require('axios');

const https = require('https');

const cheerio = require('cheerio');

const aniList = async (title) => {

  try {

    const response = await axios.get(`https://otakudesu.lol/?s=${title}&post_type=anime`);

    const html = response.data;

    const $ = cheerio.load(html);

    const animeList = [];

    $('div#venkonten li').each((index, el) => {

      const title = $(el).find('h2').text().trim()

      const link = $(el).find('a').attr('href')

      console.log(title ? title : 'data not found')

      animeList.push({ title, link })

    })

    console.log(animeList);

    return animeList

  } catch(error) {

    console.error(error)

  }

}

//aniList('isekai')

const detik = async () => {

  const link = 'https://detik.com/terpopuler';

  try {

    console.log('Scraping....');

    const { data } = await axios.get(link);

    const $ = cheerio.load(data);

    let result = [];

    $('article.list-content__item').each((i, element) => {

      const title = $(element).find('h3.media__title a').text().trim();

      const link = $(element).find('h3.media__title a').attr('href');

      const date = $(element).find('div.media__date span').text().trim();

      result.push({ title, date, link });

    });

    return result;

  } catch(error) {

    console.log('Error:', error);

    return [];

  }

};

module.exports = { detik, aniList };
