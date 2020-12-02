import * as $ from 'jquery'
import scss from './styles/styles.scss'
function importAll(r) {
    return r.keys().map(r);
}


const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const fonts = importAll(require.context('./fonts', false, /\.(ttf|woff|woff2|eot)$/));


console.log("It works");