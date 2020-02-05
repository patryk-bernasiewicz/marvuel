const tailwindcss = require("tailwindcss");
const postcssPurge = require("@fullhuman/postcss-purgecss");

const purge = postcssPurge({
  content: ["./public/**/*.html", "./src/**/*.vue"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-to|from|active)$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/
  ]
});

module.exports = {
  plugins: [
    tailwindcss,
    ...(process.env.NODE_ENV === "production" ? [purge] : [])
  ]
};
