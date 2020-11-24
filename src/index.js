import * as $ from 'jquery'
import './styles/style.css'
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
/*
import './fonts/Montserrat-Black.ttf'
*/
const fonts = importAll(require.context('./fonts', false, /\.(ttf|woff|woff2|eot)$/));


console.log("It works");