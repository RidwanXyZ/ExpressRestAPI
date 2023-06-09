const axios = require('axios');
const cheerio = require('cheerio');
const res = require('express/lib/response');


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

  } catch (error) {

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

  } catch (error) {

    console.log('Error:', error);

    return [];

  }

};




 const xnxx = async(q = "") => {
   axios.get('https://xnxx.com/search/'+q)
   .then(({data}) => {
    const $ = cheerio.load(data)
    let result = []
    $('#content-thumbs > div.mozaique.cust-nb-cols > div').each((i, element) => {

      const judul = $(element).find('a').text().trim();

      const link = $(element).find('a').attr('href');

      const date = $(element).find('a > img').attr('src')
      
      result.push({ judul, date, link: `https://www.xnxx.com${link}`});

    });

   // console.log(result)
   return result;
   })
   .catch(e => console.log(e))
 }



module.exports = { detik, aniList, xnxx };
