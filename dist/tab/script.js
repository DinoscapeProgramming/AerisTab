if (!location.href.endsWith("?")) {
  location.search = "?";
};

const bangs = {
  "!g": "https://www.google.com/search?q=",
  "!ddg": "https://duckduckgo.com/?q=",
  "!b": "https://www.bing.com/search?q=",
  "!yt": "https://www.youtube.com/results?search_query=",
  "!gh": "https://github.com/search?q=",
  "!npm": "https://www.npmjs.com/search?q=",
  "!mdn": "https://developer.mozilla.org/en-US/search?q=",
  "!so": "https://stackoverflow.com/search?q=",
  "!r": "https://www.reddit.com/search/?q=",
  "!imdb": "https://www.imdb.com/find?q=",
  "!w": "https://en.wikipedia.org/w/index.php?search=",
  "!tw": "https://twitter.com/search?q=",
  "!ig": "https://www.instagram.com/explore/tags/",
  "!ln": "https://www.linkedin.com/search/results/all/?keywords=",
  "!amz": "https://www.amazon.com/s?k=",
  "!ebay": "https://www.ebay.com/sch/i.html?_nkw=",
  "!maps": "https://www.google.com/maps/search/",
  "!news": "https://news.google.com/search?q=",
  "!p": "https://www.pinterest.com/search/pins/?q=",
  "!gi": "https://www.google.com/search?tbm=isch&q=",
  "!tr": "https://translate.google.com/?sl=auto&tl=en&text=",
  "!ud": "https://www.urbandictionary.com/define.php?term=",
  "!wa": "https://www.wolframalpha.com/input/?i=",
  "!thes": "https://www.thesaurus.com/browse/",
  "!dict": "https://www.dictionary.com/browse/",
  "!l": "https://libgen.rs/search.php?req=",
  "!a": "https://arxiv.org/search/?query=",
  "!t": "https://torrentz2.nz/search?f=",
  "!hn": "https://news.ycombinator.com/search?query=",
  "!v": "https://vimeo.com/search?q=",
  "!tiktok": "https://www.tiktok.com/search?q=",
  "!devto": "https://dev.to/search?q=",
  "!gpt": "https://chat.openai.com/?q=",
  "!pdf": "https://www.google.com/search?q=filetype:pdf+",
  "!geeksforgeeks": "https://www.geeksforgeeks.org/?s=",
  "!cpp": "https://en.cppreference.com/mwiki/index.php?search=",
  "!py": "https://docs.python.org/3/search.html?q=",
  "!js": "https://developer.mozilla.org/en-US/search?q=",
  "!css": "https://css-tricks.com/search-results/?q=",
  "!react": "https://reactjs.org/search?q=",
  "!vite": "https://vitejs.dev/search.html?q=",
  "!astro": "https://docs.astro.build/search/?q=",
  "!tailwind": "https://tailwindcss.com/docs/search?q=",
  "!next": "https://nextjs.org/search?q=",
  "!vercel": "https://vercel.com/search?q=",
  "!firebase": "https://firebase.google.com/search?q=",
  "!ytm": "https://music.youtube.com/search?q=",
  "!gs": "https://genius.com/search?q=",
  "!bandcamp": "https://bandcamp.com/search?q=",
  "!soundcloud": "https://soundcloud.com/search?q=",
  "!anilist": "https://anilist.co/search/anime?search=",
  "!mal": "https://myanimelist.net/anime.php?q=",
  "!tmdb": "https://www.themoviedb.org/search?query=",
  "!gog": "https://www.gog.com/en/games?search=",
  "!steam": "https://store.steampowered.com/search/?term=",
  "!epic": "https://store.epicgames.com/en-US/browse?q=",
  "!itch": "https://itch.io/search?q=",
  "!igdb": "https://www.igdb.com/search?type=1&q=",
  "!whois": "https://who.is/whois/",
  "!dns": "https://dnschecker.org/#A/",
  "!ytm": "https://music.youtube.com/search?q=",
  "!sc": "https://soundcloud.com/search?q=",
  "!genius": "https://genius.com/search?q=",
  "!spotify": "https://open.spotify.com/search/",
  "!bandcamp": "https://bandcamp.com/search?q=",
  "!lastfm": "https://www.last.fm/search?q=",
  "!amz": "https://www.amazon.com/s?k=",
  "!ebay": "https://www.ebay.com/sch/i.html?_nkw=",
  "!aliexpress": "https://www.aliexpress.com/wholesale?SearchText=",
  "!newegg": "https://www.newegg.com/p/pl?d=",
  "!bestbuy": "https://www.bestbuy.com/site/searchpage.jsp?st=",
  "!etsy": "https://www.etsy.com/search?q=",
  "!walmart": "https://www.walmart.com/search?q=",
  "!target": "https://www.target.com/s?searchTerm=",
  "!tor": "https://www.torproject.org/search/?q=",
  "!proton": "https://proton.me/search?q=",
  "!startpage": "https://www.startpage.com/sp/search?q=",
  "!brave": "https://search.brave.com/search?q=",
  "!whois": "https://who.is/whois/",
  "!ip": "https://whatismyipaddress.com/ip/",
  "!arxiv": "https://arxiv.org/search/?query=",
  "!libgen": "https://libgen.rs/search.php?req=",
  "!scihub": "https://sci-hub.se/",
  "!jstor": "https://www.jstor.org/action/doBasicSearch?Query=",
  "!wikidata": "https://www.wikidata.org/w/index.php?search=",
  "!quora": "https://www.quora.com/search?q=",
  "!udemy": "https://www.udemy.com/courses/search/?q=",
  "!coursera": "https://www.coursera.org/search?query=",
  "!steam": "https://store.steampowered.com/search/?term=",
  "!epic": "https://store.epicgames.com/en-US/browse?q=",
  "!gog": "https://www.gog.com/en/games?search=",
  "!itch": "https://itch.io/search?q=",
  "!igdb": "https://www.igdb.com/search?type=1&q=",
  "!discord": "https://discord.com/search?q=",
  "!reddit": "https://www.reddit.com/search/?q=",
  "!tiktok": "https://www.tiktok.com/search?q=",
  "!insta": "https://www.instagram.com/explore/tags/",
  "!twitter": "https://twitter.com/search?q=",
  "!threads": "https://www.threads.net/search?q=",
  "!facebook": "https://www.facebook.com/search/top/?q=",
  "!tumblr": "https://www.tumblr.com/search/"
};

const languageFiles = [
  "es",
  "zh",
  "fr",
  "de",
  "pt",
  "ja",
  "ru",
  "ko",
  "ar",
  "it",
  "nl",
  "sv",
  "nb",
  "da",
  "fi",
  "pl",
  "tr",
  "cs",
  "he",
  "hi",
  "th",
  "vi",
  "id",
  "ms",
  "ro",
  "hu",
  "el",
  "uk",
  "bg",
  "hr",
  "sk",
  "lt",
  "lv",
  "et",
  "sl",
  "sr"
];

document.querySelector("#searchForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  if (((navigator.userAgentData?.platform === "Windows") ? /^[a-zA-Z]:\\(?:[^\\/:*?"<>|\r\n]+\\)*[^\\/:*?"<>|\r\n]*$/ : /^(\/[^\/\0]+)+\/?$/).test(document.querySelector("#searchBar").value)) {
    chrome.tabs.create({
      url: `file:///${document.querySelector("#searchBar").value}`
    });

    return window.close();
  };

  if ((document.querySelector("#searchBar").value.length <= 253) && (document.querySelector("#searchBar").value.split(".").length >= (2 - Boolean(/^localhost(:\d+)?(\/.*)?$/i.test(document.querySelector("#searchBar").value)))) && (document.querySelector("#searchBar").value.split(".").length <= 127) && document.querySelector("#searchBar").value.split(".").every((label, index) => ((index !== (document.querySelector("#searchBar").value.split(".").length - 1)) ? /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)$/ : /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(:\d+)?$/).test(label))) {
    if (/^localhost(:\d+)?(\/.*)?$/i.test(document.querySelector("#searchBar").value)) return (location.href = `http://${document.querySelector("#searchBar").value}`);

    let domains = JSON.parse(localStorage.getItem("domains") || "[]");

    if (!domains.length) {
      const response = await fetch(chrome.runtime.getURL("resources/domains.txt"));
      const data = await response.text();

      domains = data.split("\r\n");

      setTimeout(() => {
        localStorage.setItem("domains", JSON.stringify(domains));
      }, 0);
    };

    if (domains.includes(document.querySelector("#searchBar").value.split(".").at(-1).toUpperCase())) return (location.href = `https://${document.querySelector("#searchBar").value}`);
  };

  try {
    const url = new URL(document.querySelector("#searchBar").value);

    if (![
      ...["http:", "https:", "about:"],
      ...(!chrome.runtime.getBrowserInfo) ? ["file:", "chrome:"] : []
    ].includes(url.protocol)) throw null;

    if ((url.protocol === "about:") && !/^about:blank\/?$/.test(document.querySelector("#searchBar").value) && ((await chrome.runtime.getBrowserInfo?.())?.name === "Firefox")) {
      throw null;
    };
    
    if (/^about:blank\/?$/.test(document.querySelector("#searchBar").value)) return (location.href = document.querySelector("#searchBar").value);

    if (["file:", "about:", "chrome:"].includes(url.protocol)) {
      chrome.tabs.create({
        url: document.querySelector("#searchBar").value
      });

      window.close();
    } else {
      location.href = document.querySelector("#searchBar").value;
    };
  } catch {
    const parts = document.querySelector("#searchBar").value.trim().split(" ");
    const bang = parts[0];

    if (!parts.slice(Boolean(bangs.hasOwnProperty(bang))).join(" ")) return;

    location.href = ((bangs.hasOwnProperty(bang)) ? bangs[bang] : "https://google.com/search?q=") + encodeURIComponent(parts.slice(Boolean(bangs.hasOwnProperty(bang))).join(" "));
  };
});

document.addEventListener("keydown", (event) => {
  if (!event.ctrlKey || (event.key.toLowerCase() !== "l")) return;

  event.preventDefault();

  document.querySelector("#searchBar").focus();
});

function updateGreetingDateTime() {
  const now = new Date();

  const hour = now.getHours();
  let greeting = "Good evening";
  if (hour >= 5 && hour < 12) greeting = "Good morning";
  else if (hour >= 12 && hour < 18) greeting = "Good afternoon";

  const time = now.toLocaleTimeString(navigator.language || "en-US", { hour: "2-digit", minute: "2-digit" });
  const date = now.toLocaleDateString(navigator.language || "en-US", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });
  const capitalizedDate = date.charAt(0).toUpperCase() + date.slice(1);

  document.getElementById("greeting").textContent = greeting;
  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = capitalizedDate;
};

function scheduleUpdate() {
  updateGreetingDateTime();

  const now = new Date();
  const seconds = now.getSeconds();
  const milliseconds = now.getMilliseconds();

  const delay = ((60 - seconds) * 1000) - milliseconds;

  setTimeout(() => {
    scheduleUpdate();
  }, delay);
};

window.onload = scheduleUpdate;

function extractIndent(str) {
  const lines = str.split("\n").filter((line) => line.trim() !== "");

  if (lines.length === 0) return "";

  const match = lines[0].match(/^(\s*)/);
  return (match) ? match[1] : "";
};

function applyIndent(string, indent) {
  return string.split("\n").map((line) => ((line.trim() === "") ? line : indent + line)).join("\n");
};

async function loadDictionary() {
  if (!languageFiles.includes((navigator.language || "en").split("-")[0])) return {};

  const languageCode = (navigator.language || "en").split("-")[0];
  const locales = JSON.parse(localStorage.getItem("locales") || "{}");

  if (Object.keys(locales).includes(languageCode)) return locales[languageCode];

  const response = await fetch(chrome.runtime.getURL(`locales/${languageCode}.json`));
  const data = await response.json();

  setTimeout(() => {
    localStorage.setItem("locales", JSON.stringify({
      ...locales,
      ...{
        [languageCode]: data
      }
    }));
  }, 0);

  return data;
};

loadDictionary().then((dictionary) => {
  if (languageFiles.includes((navigator.language || "en").split("-")[0]) && ((navigator.language || "en").split("-")[0] !== "en")) {
    document.querySelector("title").textContent = dictionary[document.querySelector("title").textContent];
  };

  function translateTextNode(textNode) {
    const originalText = textNode.textContent.trim();

    if (!dictionary[originalText] || !Object.hasOwn(dictionary, originalText)) return;

    textNode.textContent = applyIndent(dictionary[originalText], extractIndent(textNode.textContent));
  };

  function translateElementNode(elementNode) {
    const originalText = elementNode.placeholder?.trim();

    if (!originalText || !dictionary[originalText] || !Object.hasOwn(dictionary, originalText)) return;

    elementNode.placeholder = applyIndent(dictionary[originalText], extractIndent(elementNode.textContent));
  };

  function scanAndTranslate(node) {
    if (!languageFiles.includes((navigator.language || "en").split("-")[0]) || (navigator.language || "en").split("-")[0] === "en") return;

    if (node.nodeType === Node.TEXT_NODE) {
      translateTextNode(node);
    } else {
      if (node.nodeType === Node.ELEMENT_NODE) translateElementNode(node);

      node.childNodes.forEach((node) => scanAndTranslate(node));
    };
  };

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach((node) => scanAndTranslate(node));
    };
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  scanAndTranslate(document.body);
});