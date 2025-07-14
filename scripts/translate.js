const fs = require("fs");
const path = require("path");
const pLimit = require("p-limit").default;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const { languages, terms } = JSON.parse(fs.readFileSync(path.join(__dirname, "translate.json"), "utf8"));

if (!fs.existsSync("./dist/locales")) fs.mkdirSync("./dist/locales");
if (!fs.existsSync("./presets")) fs.mkdirSync("./presets");

const presets = Object.fromEntries(
  fs.readdirSync("./presets").map((language) => [
    language.slice(0, -5),
    JSON.parse(fs.readFileSync(`./presets/${language}`, "utf8") || "{}"),
  ])
);

const limit = pLimit(5);

(async () => {
  for (const language of languages) {
    const translations = Object.fromEntries(
      (await Promise.all(terms.map((term) =>
        limit(async () => {
          await delay(300);

          if (presets?.[language]?.[term]) {
            return [term, presets[language][term]];
          };

          try {
            const res = await fetch(`https://translate-service.scratch.mit.edu/translate?language=${encodeURIComponent(language)}&text=${encodeURIComponent(term)}`);
            const data = await res.json();

            if (!data.result) console.log(data);

            return [term, data.result];
          } catch (err) {
            const lines = [
              `❌  Error for term "${term}" in "${language}": `,
              err.message || err
            ];

            const boxWidth = Math.max(...lines.map((line) => line.length)) + 4;
            const horizontal = "═".repeat(boxWidth);

            const hasEmoji = (text) => {
              const emojiRegex = /(?:\p{Emoji}(?:\p{Emoji_Modifier}|\uFE0F)?(?:\u200D\p{Emoji})*)/gu;
              const numberOrSpecialCharacterRegex = /^[0-9]$|[.*+?^${}()|[\]\\]/;
              return Array.from(text).map((character) => emojiRegex.test(character) && !numberOrSpecialCharacterRegex.test(character)).includes(true);
            };

            const center = (text) => {
              const totalPadding = boxWidth - text.length;
              const left = Math.ceil(totalPadding / 2);
              const right = Math.floor(totalPadding / 2);
              return "║" + " ".repeat(left) + text + " ".repeat(right - Array.from(text).filter((character) => hasEmoji(character)).length) + "║";
            };

            console.log("\x1b[38;2;218;165;32m", `
╔${horizontal}╗
${lines.map(center).join("\n")}
╚${horizontal}╝`, "\x1b[0m");

            return [];
          };
        })
      ))).filter((entry) => entry.length)
    );

    fs.writeFileSync(`./dist/locales/${language}.json`, JSON.stringify(translations, null, 2), "utf8");

    const lines = [
      `🗣️    Translation Completed: ${language}`
    ];

    const boxWidth = Math.max(...lines.map(line => line.length)) + 4;
    const horizontal = "═".repeat(boxWidth);

    const center = (text) => {
      const totalPadding = boxWidth - text.length;
      const left = Math.ceil(totalPadding / 2);
      const right = Math.floor(totalPadding / 2);
      return "║" + " ".repeat(left) + text + " ".repeat(right + 2) + "║";
    };

    console.log("\x1b[38;2;218;165;32m", `
╔${horizontal}╗
${lines.map(center).join("\n")}
╚${horizontal}╝`, "\x1b[0m");

    await delay(1000);
  };
})();