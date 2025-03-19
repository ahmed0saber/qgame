const renderAllGames = async () => {
    const request = await fetch("./data/games.json");
    const games = await request.json();

    const gamesContainer = document.querySelector(".games-grid");
    const DOM_Fragment = document.createDocumentFragment();

    games.forEach(game => {
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

renderAllGames();
