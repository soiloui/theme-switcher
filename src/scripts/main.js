import { soilTheme } from './theme';
import { soilNav } from './nav';

soilTheme.init();
soilNav.init();

const mainFooter = document.querySelector('#main-footer');
mainFooter.innerText = `Mieczysław Palian ${new Date().getFullYear()}`;
