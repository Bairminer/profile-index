// ==========================================================================
// Atom One Dark Pro (Darker) Theme - Application Logic
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Application State - Random initial quote and track on page load
  let currentTheme = localStorage.getItem("theme") || "dark";
  let currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  let currentSongIndex = Math.floor(Math.random() * songs.length);

  // DOM Elements
  const body = document.body;
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  
  const avatarImg = document.getElementById("avatarImg");
  const profileName = document.getElementById("profileName");
  const profileHandle = document.getElementById("profileHandle");
  const profileDesc = document.getElementById("profileDesc");
  const shareBtn = document.getElementById("shareBtn");

  const quoteText = document.getElementById("quoteText");
  const quoteCounter = document.getElementById("quoteCounter");
  const prevQuoteBtn = document.getElementById("prevQuoteBtn");
  const nextQuoteBtn = document.getElementById("nextQuoteBtn");
  const shuffleQuoteBtn = document.getElementById("shuffleQuoteBtn");
  const copyQuoteBtn = document.getElementById("copyQuoteBtn");

  const trackTitle = document.getElementById("trackTitle");
  const trackArtist = document.getElementById("trackArtist");
  const playerCard = document.getElementById("playerCard");
  const prevSongBtn = document.getElementById("prevSongBtn");
  const nextSongBtn = document.getElementById("nextSongBtn");
  const shuffleSongBtn = document.getElementById("shuffleSongBtn");
  const spotifyEmbed = document.getElementById("spotifyEmbed");
  const toggleEmbedBtn = document.getElementById("toggleEmbedBtn");
  const embedWrapper = document.getElementById("embedWrapper");

  const searchInput = document.getElementById("searchInput");
  const linksContainer = document.getElementById("linksContainer");
  const snackbar = document.getElementById("snackbar");
  const snackbarMsg = document.getElementById("snackbarMsg");

  // --------------------------------------------------------------------------
  // 1. Initial Setup & Render
  // --------------------------------------------------------------------------
  initTheme();
  renderProfile();
  renderQuote();
  renderSong();
  renderLinks(linkData);
  setupInteractiveSpotlight();

  // --------------------------------------------------------------------------
  // 2. Theme Management (Atom One Dark Pro / Atom One Light)
  // --------------------------------------------------------------------------
  function initTheme() {
    document.documentElement.setAttribute("data-theme", currentTheme);
    body.setAttribute("data-theme", currentTheme);
    updateThemeIcon();
    updateThemeColorMeta();
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    body.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    updateThemeIcon();
    updateThemeColorMeta();
    showToast(`Switched to Atom One ${currentTheme === "dark" ? "Dark" : "Light"} theme`);
  }

  function updateThemeColorMeta() {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", currentTheme === "dark" ? "#121418" : "#e8eaef");
    }
  }

  function updateThemeIcon() {
    if (currentTheme === "dark") {
      themeIcon.innerHTML = `<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4C12.92 3.04 12.46 3 12 3z"/>`;
    } else {
      themeIcon.innerHTML = `<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.02-.39-1.41 0zm12.37-12.37l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z"/>`;
    }
  }

  themeToggleBtn.addEventListener("click", toggleTheme);

  // --------------------------------------------------------------------------
  // 3. Profile Render
  // --------------------------------------------------------------------------
  function renderProfile() {
    avatarImg.src = profileData.photoLink;
    profileName.textContent = profileData.userName;
    profileHandle.textContent = profileData.handle;
    profileDesc.textContent = profileData.desc;
  }

  shareBtn.addEventListener("click", () => {
    if (navigator.share) {
      navigator.share({
        title: `Bairminer's Profile`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Bairminer's Profile URL copied to clipboard!");
    }
  });

  const avatarWrapper = document.querySelector(".avatar-wrapper");
  if (avatarWrapper) {
    avatarWrapper.addEventListener("click", (e) => {
      if (!e.target.closest(".steam-popover")) {
        e.stopPropagation();
        avatarWrapper.classList.toggle("is-pinned");
      }
    });

    document.addEventListener("click", (e) => {
      if (!avatarWrapper.contains(e.target)) {
        avatarWrapper.classList.remove("is-pinned");
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Quote Generator
  // --------------------------------------------------------------------------
  function renderQuote() {
    quoteText.textContent = quotes[currentQuoteIndex];
    if (quoteCounter) {
      quoteCounter.textContent = `Quote ${currentQuoteIndex + 1} of ${quotes.length}`;
    }
  }

  function changeQuote(newIndex) {
    quoteText.classList.add("fade-out");
    setTimeout(() => {
      currentQuoteIndex = (newIndex + quotes.length) % quotes.length;
      renderQuote();
      quoteText.classList.remove("fade-out");
    }, 180);
  }

  if (prevQuoteBtn) {
    prevQuoteBtn.addEventListener("click", () => {
      changeQuote(currentQuoteIndex - 1);
    });
  }

  if (nextQuoteBtn) {
    nextQuoteBtn.addEventListener("click", () => {
      changeQuote(currentQuoteIndex + 1);
    });
  }

  shuffleQuoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    changeQuote(randomIndex);
  });

  copyQuoteBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quotes[currentQuoteIndex]);
    showToast("Quote copied to clipboard!");
  });

  // --------------------------------------------------------------------------
  // 5. Music Player
  // --------------------------------------------------------------------------
  function renderSong() {
    const song = songs[currentSongIndex];
    trackTitle.textContent = "Featured Tracks";
    trackArtist.textContent = `Track ${currentSongIndex + 1} of ${songs.length}`;
    spotifyEmbed.src = song.embed;
    playerCard.classList.add("is-playing");
  }

  prevSongBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    renderSong();
  });

  nextSongBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    renderSong();
  });

  if (shuffleSongBtn) {
    shuffleSongBtn.addEventListener("click", () => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * songs.length);
      } while (nextIndex === currentSongIndex && songs.length > 1);
      currentSongIndex = nextIndex;
      renderSong();
    });
  }

  if (toggleEmbedBtn) {
    toggleEmbedBtn.addEventListener("click", () => {
      if (embedWrapper.style.display === "none") {
        embedWrapper.style.display = "block";
        toggleEmbedBtn.style.background = "var(--md-primary-container)";
        toggleEmbedBtn.style.color = "var(--atom-blue)";
      } else {
        embedWrapper.style.display = "none";
        toggleEmbedBtn.style.background = "var(--md-surface)";
        toggleEmbedBtn.style.color = "var(--atom-fg-bright)";
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. Links Render (Atom One Dark Pro Syntax Colors)
  // --------------------------------------------------------------------------
  function renderLinks(links) {
    linksContainer.innerHTML = "";

    if (links.length === 0) {
      linksContainer.innerHTML = `
        <div style="text-align: center; padding: 24px; color: var(--atom-fg-muted); font-family: var(--font-code);">
          // No matching links found
        </div>
      `;
      return;
    }

    links.forEach((link) => {
      const card = document.createElement("a");
      card.className = "link-card";
      card.href = link.link;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("data-id", link.id);

      // Atom One Dark Pro Syntax Accent colors for icon background & badge
      const accentHex = link.accent || "#61afef";

      card.innerHTML = `
        <div class="link-left">
          <div class="icon-box" style="background: ${accentHex}1a; border: 1px solid ${accentHex}40;">
            <span class="icon-mask" style="background-color: ${accentHex}; -webkit-mask: url('${link.icon}') no-repeat center / contain; mask: url('${link.icon}') no-repeat center / contain;"></span>
          </div>
          <div class="link-info">
            <span class="link-name">${link.name}</span>
            <span class="link-subtitle">${link.subtitle}</span>
          </div>
        </div>
        <div class="link-right">
          <span class="badge-tag" style="background: ${accentHex}1a; color: ${accentHex}; border: 1px solid ${accentHex}35;">${link.badge}</span>
          <button class="copy-link-btn" title="Copy Link" data-url="${link.link}">
            <svg class="svg-icon" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
          </button>
          <svg class="svg-icon open-icon" viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
        </div>
      `;

      // Copy button event listener
      const copyBtn = card.querySelector(".copy-link-btn");
      copyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const url = copyBtn.getAttribute("data-url");
        navigator.clipboard.writeText(url);
        showToast(`Copied ${link.name} link!`);
      });

      linksContainer.appendChild(card);
    });

    setupInteractiveSpotlight();
  }

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const filtered = linkData.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.badge.toLowerCase().includes(query)
    );
    renderLinks(filtered);
  });

  // --------------------------------------------------------------------------
  // 7. macOS Window Control Buttons (Close, Minimize, Maximize View Modes)
  // --------------------------------------------------------------------------
  const macCloseBtn = document.getElementById("macCloseBtn");
  const macMinimizeBtn = document.getElementById("macMinimizeBtn");
  const macMaximizeBtn = document.getElementById("macMaximizeBtn");
  const appContainer = document.querySelector(".app-container");

  function resetWindowViewClasses() {
    appContainer.classList.remove("view-close-profile", "view-minimize-widgets", "view-maximize-all", "is-closed", "is-minimized", "is-maximized");
  }

  if (macCloseBtn) {
    macCloseBtn.addEventListener("click", () => {
      const isAlreadyClose = appContainer.classList.contains("view-close-profile");
      resetWindowViewClasses();
      if (!isAlreadyClose) {
        appContainer.classList.add("view-close-profile");
        showToast("View mode: Profile card only");
      } else {
        showToast("View mode: Restored full Index view");
      }
    });
  }

  if (macMinimizeBtn) {
    macMinimizeBtn.addEventListener("click", () => {
      const isAlreadyMinimize = appContainer.classList.contains("view-minimize-widgets");
      resetWindowViewClasses();
      if (!isAlreadyMinimize) {
        appContainer.classList.add("view-minimize-widgets");
        showToast("View mode: Profile, Quote & Song player");
      } else {
        showToast("View mode: Restored full Index view");
      }
    });
  }

  if (macMaximizeBtn) {
    macMaximizeBtn.addEventListener("click", () => {
      resetWindowViewClasses();
      showToast("View mode: Showing everything");
    });
  }

  // --------------------------------------------------------------------------
  // 8. Cursor Tracking Spotlight Hover Effect
  // --------------------------------------------------------------------------
  function setupInteractiveSpotlight() {
    const interactiveElements = document.querySelectorAll(
      ".link-card, .md-button-icon, .quote-card, .player-card, .steam-card, .profile-card, .top-bar"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Toast Snackbar Notification
  // --------------------------------------------------------------------------
  let snackbarTimeout = null;
  function showToast(message) {
    if (snackbarTimeout) clearTimeout(snackbarTimeout);
    snackbarMsg.textContent = message;
    snackbar.classList.add("show");

    snackbarTimeout = setTimeout(() => {
      snackbar.classList.remove("show");
    }, 2500);
  }
});
