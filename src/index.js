import './style.css'
function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


console.log("It works");