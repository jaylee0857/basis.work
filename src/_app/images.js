// Use 'as: "url"' to get the URLs of the images after build
const images = import.meta.glob("../assets/images/*.{png,jpg,svg,webp}", {
  eager: true,
  as: "url",
});

// Collect the image URLs
const imagesUrls = Object.values(images);

// Plugin to provide the image URLs
const plugins = {
  install: (app) => {
    app.provide("imageUrls", imagesUrls);
  },
};

export default plugins;
