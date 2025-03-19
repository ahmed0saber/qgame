function getRandomItems(array, numItems) {
    // Shuffle the array using the Fisher-Yates algorithm
    const shuffled = array.slice(); // Create a copy of the array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    // Return the first `numItems` elements from the shuffled array
    return shuffled.slice(0, numItems);
}

const renderFourRandomGames = async () => {
    const request = await fetch("./data/games.json");
    const games = await request.json();
    const randomGames = getRandomItems(games, 4);

    const gamesContainer = document.querySelector(".games-grid");
    const DOM_Fragment = document.createDocumentFragment();

    randomGames.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");
        gameCard.innerHTML = `
            <img src="./images/games/${game.slug}.webp" alt="${game.title}" class="game-image">
            <div class="game-content">
                <span class="game-subject">${game.subject}</span>
                <h3 class="game-title">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <a href="./game.html?slug=${game.slug}" class="game-link">Play Now →</a>
            </div>
        `;
        DOM_Fragment.appendChild(gameCard);
    });

    gamesContainer.appendChild(DOM_Fragment);
}

renderFourRandomGames();
