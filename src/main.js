import { createApp } from "vue";
import App from "./App";

/** plugins */
import jquery from "@/plugins/jquery";
import storage from "@/plugins/storage";
import sweetalert from "@/plugins/sweetalert";
import tabsslider from "@/plugins/tabsslider";
import VueLazyLoad from "vue3-lazyload";
// import ViewUIPlus from "view-ui-plus";
// import "view-ui-plus/dist/styles/viewuiplus.css";
/** _app */
import layouts from "@/_app/layouts";
import getAllImageUrl from "@/_app/images";
import components from "@/_app/components";
import providers from "@/_app/providers";
import directives from "@/_app/directives";
// import "./assets/css/studio-basis.webflow.min.css";
import "./assets/main.scss";
import "@fortawesome/fontawesome-free/js/all";

// import drag from "@/_app/buoyMove";
const app = createApp(App);
app.provide("$jQuery", jquery);
app.provide("$swal", sweetalert);
app.provide("$storage", storage);
app.provide("$tabsslider", tabsslider);
app.use(layouts);
app.use(getAllImageUrl);
app.use(components);
app.use(directives);
app.use(VueLazyLoad, {
  loading: "",
  error: "",
});
// app.use(drag);

/** services register / 自定義hook */
app.use(providers);

app.mount("#app");
