export const getVideoUrl = (router) => {
  return new URL(`../assets/video/${router}`, import.meta.url).href;
};

export default getVideoUrl;
