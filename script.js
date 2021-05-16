const root = document.querySelector('#root')
import Home from './src/pages/home.js'
import Bajiner from './src/pages/bajiner.js'

root.innerHTML = Home.render()
Home.bindEvents()

const routes = {
    "home": Home,
    "bajiner": Bajiner,
    // "hogebanner":
    //     "mermasin"
    // "blog"
    // "carayutyuner"
}
window.addEventListener('hashchange', hasChange)

function hasChange(e) {
    let rootName = getScreen()
    let screen = routes[rootName.path]
    root.innerHTML = screen.render()
    screen.bindEvents()
}
function getScreen() {
    let path = location.hash
    let arr = path.split('/')
    return {
        path: arr[1]
    }
}

