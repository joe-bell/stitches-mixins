module.exports = {
  "*.{ts,tsx,jsx,jsx,json,html,css,md,mdx,yml}": (filenames) =>
    filenames.map((filename) => `npm run format -- '${filename}'`),
  "*.ts?(x)": () => ["npm run lint"],
};
