const profileData = {
  userName: "Bairminer",
  handle: "@bairminer",
  photoLink: "assets/images/profile.png",
  desc: "taking over the world",
  bio: "Creator & Explorer | Digital Nomad & Gamer",
  joined: "2026",
};

const quotes = [
  "\"Some people, I'd fight the world for.\"",
  "\"We make our own luck.\"",
  "\"Good luck. Don't fail.\"",
  "\"Sweat memes, sweet dreams.\"",
  "\"Never stop.\"",
  "\"It's cute and fuzzy!\"",
  "\"Frick\"",
  "\"I need a new pfp\"",
  "\"EECS grind\"",
  "\"Ngl\"",
];

const songs = [
  {
    id: 1,
    title: "Wolves",
    artist: "Selena Gomez, Marshmello",
    embed: "https://open.spotify.com/embed/track/0tBbt8CrmxbjRP0pueQkyU",
    url: "https://open.spotify.com/track/0tBbt8CrmxbjRP0pueQkyU"
  },
  {
    id: 2,
    title: "New World ft. Vava",
    artist: "Krewella, Yellow Claw, Vava",
    embed: "https://open.spotify.com/embed/track/1vn7Y9dR0e6i58R71yccG9",
    url: "https://open.spotify.com/track/1vn7Y9dR0e6i58R71yccG9"
  },
  {
    id: 3,
    title: "Monody(feat. Laura Brehm)",
    artist: "TheFatRat, Laura Brehm",
    embed: "https://open.spotify.com/embed/track/3VvBPkc24zC7x05mgJTyGO",
    url: "https://open.spotify.com/track/3VvBPkc24zC7x05mgJTyGO"
  },
  {
    id: 4,
    title: "Starboy",
    artist: "The Weeknd, Daft Punk",
    embed: "https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB",
    url: "https://open.spotify.com/track/7MXVkk9YMctZqd1Srtv4MB"
  },
  {
    id: 5,
    title: "Drag Me Down",
    artist: "One Direction",
    embed: "https://open.spotify.com/embed/track/2K87XMYnUMqLcX3zvtAF4G",
    url: "https://open.spotify.com/track/2K87XMYnUMqLcX3zvtAF4G"
  },
  {
    id: 6,
    title: "Hotel California - 2014 Remaster",
    artist: "Eagles",
    embed: "https://open.spotify.com/embed/track/40riOy7x9W7GXjyGp4pjAv",
    url: "https://open.spotify.com/track/40riOy7x9W7GXjyGp4pjAv"
  },
  {
    id: 7,
    title: "Nice For What",
    artist: "Drake",
    embed: "https://open.spotify.com/embed/track/3CA9pLiwRIGtUBiMjbZmRw",
    url: "https://open.spotify.com/track/3CA9pLiwRIGtUBiMjbZmRw"
  },
  {
    id: 8,
    title: "Faster Car",
    artist: "Loving Caliber",
    embed: "https://open.spotify.com/embed/track/0c7o0AEDnXKGZto2FVuyGG",
    url: "https://open.spotify.com/track/0c7o0AEDnXKGZto2FVuyGG"
  },
  {
    id: 9,
    title: "INTERNET OVERDOSE",
    artist: "NEEDY GIRL OVERDOSE, KOTOKO, Aiobahn+81",
    embed: "https://open.spotify.com/embed/track/5oEoZdIrz0izZwqFCy6gDa",
    url: "https://open.spotify.com/track/5oEoZdIrz0izZwqFCy6gDa"
  },
  {
    id: 9,
    title: "blue",
    artist: "yung kai",
    embed: "https://open.spotify.com/embed/track/3be9ACTxtcL6Zm4vJRUiPG",
    url: "https://open.spotify.com/track/3be9ACTxtcL6Zm4vJRUiPG"
  },
];

// Atom One Dark Pro Darker Color Palette Mapping
const linkData = [
  {
    id: 1,
    link: "https://steamcommunity.com/id/bairminer/",
    name: "Steam",
    subtitle: "Gaming Profile & Library",
    icon: "assets/icons/steam.svg",
    badge: "Gamer",
    accent: "#61afef" // Atom Blue
  },
  {
    id: 2,
    link: "https://www.youtube.com/@bairminer",
    name: "YouTube",
    subtitle: "Video Content & Highlights",
    icon: "assets/icons/youtube.svg",
    badge: "Videos",
    accent: "#e06c75" // Atom Red
  },
  {
    id: 3,
    link: "https://open.spotify.com/user/bairminer",
    name: "Spotify",
    subtitle: "Music Playlists & Favorites",
    icon: "assets/icons/spotify.svg",
    badge: "Playlists",
    accent: "#98c379" // Atom Green
  },
  {
    id: 4,
    link: "https://www.reddit.com/user/Bairminer",
    name: "Reddit",
    subtitle: "Discussions & Posts",
    icon: "assets/icons/reddit.svg",
    badge: "Community",
    accent: "#d19a66" // Atom Orange
  },
  {
    id: 6,
    link: "https://www.instagram.com/bairminer/",
    name: "Instagram",
    subtitle: "Photos & Stories",
    icon: "assets/icons/instagram.svg",
    badge: "Photos",
    accent: "#c678dd" // Atom Purple
  },
  {
    id: 5,
    link: "https://x.com/Bairminer",
    name: "X (Twitter)",
    subtitle: "Thoughts & Real-time Updates",
    icon: "assets/icons/x-twitter.svg",
    badge: "Updates",
    accent: "#61afef" // Atom Blue
  },
  {
    id: 8,
    link: "https://pin.it/30hsMYm",
    name: "Pinterest",
    subtitle: "Inspiration & Boards",
    icon: "assets/icons/pinterest.svg",
    badge: "Inspo",
    accent: "#e06c75" // Atom Red
  },
  {
    id: 7,
    link: "https://www.twitch.tv/bairminer",
    name: "Twitch",
    subtitle: "Live Streams & Broadcasts",
    icon: "assets/icons/twitch.svg",
    badge: "Live Stream",
    accent: "#c678dd" // Atom Purple
  },
  {
    id: 9,
    link: "https://imgur.com/user/Bairminer/submitted",
    name: "Imgur",
    subtitle: "Image Gallery & Memes",
    icon: "assets/icons/imgur.svg",
    badge: "Gallery",
    accent: "#98c379" // Atom Green
  },
  {
    id: 10,
    link: "https://www.tumblr.com/bairminer",
    name: "Tumblr",
    subtitle: "Blog & Aesthetic Posts",
    icon: "assets/icons/tumblr.svg",
    badge: "Blog",
    accent: "#61afef" // Atom Blue
  }
];

const footerData = {
  text: "△ ☽ α",
  subtext: "Designed in Atom One Dark Style"
};
