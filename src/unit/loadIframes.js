export const loadIframe = (iframe) => {
  return new Promise((resolve) => {
    if (iframe) {
      iframe.onload = () => {
        resolve("success");
      };
    }
    /** 5秒沒回應就表示失敗 */
    setTimeout(() => {
      resolve("error");
    }, 500);
  });
};

export default loadIframe;
