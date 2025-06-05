const { SitemapStream, streamToPromise } = require('sitemap');
const { writeFileSync } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://aranarice.com' });

const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/products', changefreq: 'weekly', priority: 0.8 },
  { url: '/factory-tour', changefreq: 'monthly', priority: 0.6 },
  { url: '/csr', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
];

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap)
  .then(data => writeFileSync('./public/sitemap.xml', data.toString()))
  .catch(err => console.error(err));