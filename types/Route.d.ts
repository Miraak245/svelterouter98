import { SvelteComponent } from "svelte";

type AsyncSvelteComponent = () => Promise<{
  default: typeof SvelteComponent<any>;
}>;
export declare type RouteTransition = {
  transIn: "fadeIn" | "slideLeftIn" | "slideRightIn" | "scaleIn" | string;
  transOut: "fadeOut" | "slideLeftOut" | "slideRightOut" | "scaleOut" | string;
  duration: number;
} | null;

type RouteProps = {
  transtion?: RouteTransition;
  path: string;
  component: typeof SvelteComponent<any> | AsyncSvelteComponent;
};

export class Route extends SvelteComponent<RouteProps> {}
