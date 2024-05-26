<script>
  import RouteStore from "./routeStore";

  export let transtion = {};
  export let component;
  export let path = "";

  let browserUrl = "";
  let newPath = path;
  let classTransition = null;
  let QUERY_PARAMS = {};
  let DYNAMIC_ROUTES = [];

  RouteStore.subscribe((data) => {
    QUERY_PARAMS = [];
    DYNAMIC_ROUTES = [];
    const dynamicVar = window.location.pathname;

    // * ----------------------------- Query Params -------------------------

    let queries = window.location.href.split("?");
    if (queries.length > 1) {
      for (let Q of queries[1].split("&")) {
        const query = Q.split("=");
        QUERY_PARAMS[query[0]] = query[1];
      }
    }
    // * ----------------------------- ------------ -------------------------

    // * ------------------------ Dynamic Routes ----------------------------

    const pathList = path.split("/");
    const reqList = dynamicVar.split("/");
    const pathCheck = path.includes(":") && pathList.length == reqList.length;
    const allColons = pathList.filter((PL) => PL.includes(":"));

    if (pathCheck) {
      allColons.forEach((D) =>
        DYNAMIC_ROUTES.push(reqList[pathList.indexOf(D)])
      );
      newPath = dynamicVar;
    }
    // * ----------------------------- ------------ -------------------------

    if (transtion) {
      classTransition = transtion?.transOut;
      setTimeout(
        () => {
          classTransition = transtion?.transIn;
          browserUrl = data;
        },
        browserUrl == "" ? 0 : transtion.duration - 20
      );
    } else browserUrl = data;
  });
</script>

{#if newPath.toLowerCase() == browserUrl.toLowerCase()}
  <div
    style="animation-duration:{transtion?.duration}ms;"
    class={classTransition}
  >
    <svelte:component this={component} {DYNAMIC_ROUTES} {QUERY_PARAMS} />
  </div>
{/if}
