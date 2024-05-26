<script lang="ts">
  import RouteStore from "./routeStore";
  export let to: string = "/";
  export let deactiveClass: string = "";
  export let activeClass: string = "";
  export let baseClass: string = "";

  let active: boolean = false;
  function handleChangePath() {
    window.history.pushState("", "", to);
    active = window.location.pathname == to;
    RouteStore.set(to);
  }
  const unSubscribe = RouteStore.subscribe(() => {
    active = window.location.pathname == to;
  });
</script>

<span
  aria-hidden="true"
  style="cursor: pointer;display: block;"
  class={active
    ? activeClass + " " + baseClass
    : deactiveClass + " " + baseClass}
  on:click={handleChangePath}
>
  <slot />
</span>
