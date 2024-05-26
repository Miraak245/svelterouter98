import { SvelteComponent } from "svelte";

type LinkProps = {
  to: string;
  linkClass: string;
  activeClass: string;
  baseClass: string;
};

export class Link extends SvelteComponent<
  Omit<LinkProps & HTMLAnchorAttributes, "href">
> {}
