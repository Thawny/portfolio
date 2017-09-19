import Rx from 'rxjs/Rx';

// ===== cache =====
const body = document.getElementsByTagName('body')
const container = document.querySelector('.container')
const overlay = document.getElementById('overlay')
// end cache

// ===== UI intercations listeners =====
var dbclick = Rx.Observable.fromEvent(body, 'dblclick')
                           .map(x => 1)
                           .scan(count => count + 1, 0)
dbclick.subscribe(x => x % 2 == 0 ? transitionToLandingPage() : transitionToProject())

// end UI intercations listeners

// ===== UI intercation handles =====
function transitionToProject() {
    overlay.classList.remove('hidden')
    setTimeout(() => overlay.classList.add('to-black'), 100)
    container.classList.add('to-blur')
}
function transitionToLandingPage() {
    console.log('transition to landing page')
    overlay.classList.remove('to-black')
    setTimeout(() => overlay.classList.add('hidden'), 1500)
    container.classList.remove('to-blur')
}

// end UI intercations handlers
