import { wordsData } from './data/wordsData.js';
import { Dictionary } from './components/Dictionary.js';


const zodynas = new Dictionary('.content', 'Anglų-Lietuvių kalbos žodynas', wordsData);

console.log(zodynas);
zodynas.init();

