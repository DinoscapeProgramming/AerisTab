const lines = [
  "🌬️   Welcome to AerisTab!",
  "✨   Your fresh new tab experience",
  "🔍   Search fast, browse smart",
  "🚀   Ready to boost your productivity!"
];

const boxWidth = Math.max(...lines.map(line => line.length)) + 4;
const horizontal = "═".repeat(boxWidth);

const center = (text) => {
  const totalPadding = boxWidth - text.length;
  const left = Math.ceil(totalPadding / 2);
  const right = Math.floor(totalPadding / 2);
  return "║" + " ".repeat(left) + text + " ".repeat(right + (Boolean(text.includes("🌬️")) * 2) - Boolean(text.includes("✨"))) + "║";
};

console.log("\x1b[38;2;108;160;220m", `
╔${horizontal}╗
${lines.map(center).join("\n")}
╚${horizontal}╝`, "\x1b[0m");