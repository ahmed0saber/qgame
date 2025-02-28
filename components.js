class NavbarComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container navbar-container">
                <a href="./#home" class="navbar-logo">
                    QGame
                </a>

                <button class="mobile-menu-toggle" id="mobileMenuToggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <ul class="navbar-menu" id="navbarMenu">
                    <li class="navbar-item"><a href="./#home" class="navbar-link">Home</a></li>
                    <li class="navbar-item"><a href="./#about" class="navbar-link">About US</a></li>
                    <li class="navbar-item"><a href="./#games" class="navbar-link">Top Games</a></li>
                    <li class="navbar-item"><a href="./#team" class="navbar-link">Our Team</a></li>
                    <!-- <li class="navbar-item"><a href="#" class="navbar-link">For Parents</a></li>
                    <li class="navbar-item"><a href="#" class="navbar-link">For Teachers</a></li> -->
                </ul>
            </div>
        `;
    }
}

class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="footer-logo">
                                QGame
                            </div>
                            <p>Making education fun and accessible for people around the world.</p>
                            <div class="social-icons">
                                <a href="https://www.linkedin.com/company/qgame-studio/" target="_blank" class="social-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                        </path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="col footer-links">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="./#home">Home</a></li>
                                <li><a href="./#about">About US</a></li>
                                <li><a href="./#games">Top Games</a></li>
                                <li><a href="./#team">Our Team</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>&copy; ${new Date().getFullYear()} QGame. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('navbar-component', NavbarComponent);
customElements.define('footer-component', FooterComponent);
