const initGame = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const slug = urlParams.get('slug')
    const gameComponentUrl = `https://edugame-games.github.io/${slug}/script.js`
    const gameComponent = document.createElement('script')
    gameComponent.src = gameComponentUrl
    document.documentElement.appendChild(gameComponent)
}

initGame()
