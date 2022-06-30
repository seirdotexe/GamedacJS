'use strict';

const response = await fetch('https://vac.muzychenko.net/en/index.htm');
const html = await response.text();
const version = html.split('Latest version: <a href="download.htm">')[1].split('</a></h1>')[0];

console.log(`Latest version: ${version}`);
