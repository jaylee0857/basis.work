/* vite2版本中 glob導入的為異步導入 globEager則為同步導入 */
const pngFiles = Object.keys(
  import.meta.globEager("../assets/images/**/*.png")
);
const svgFiles = Object.keys(
  import.meta.globEager("../assets/images/**/*.svg")
);
const jpgFiles = Object.keys(
  import.meta.globEager("../assets/images/**/*.jpg")
);
const wedpFiles = Object.keys(
  import.meta.globEager("../assets/images/**/*.jpg")
);

const imagesUrls = [];

const plugins = {
  install: (app) => {
    const files = [...pngFiles, ...svgFiles, ...jpgFiles, wedpFiles];
    for (let file of files) {
      const imagesUrl = new URL(`${file}`, import.meta.url).href;
      imagesUrls.push(imagesUrl);
    }
    app.provide("imageUrls", imagesUrls);
  },
};

export default plugins;
