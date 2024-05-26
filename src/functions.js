import RouteStore from "./routeStore";
export function navigate(to, replace = false) {
    if (replace)
        window.history.replaceState("", "", to);
    else
        window.history.pushState("", "", to);
    RouteStore.set(to);
}
export function goBack() {
    window.history.back();
    setTimeout(() => RouteStore.set(window.location.pathname), 1);
}
//# sourceMappingURL=Functions.js.map