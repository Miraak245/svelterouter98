import { writable } from "svelte/store";
import "./index.css";
const RouteStore = writable(window.location.pathname);
export default RouteStore;
//# sourceMappingURL=RouteStore.js.map