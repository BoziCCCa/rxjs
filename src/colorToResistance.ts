import { drawInitResistorsForBands } from "./ui/colorToResistanceUI";
import { InputSelectColorInit } from "./inputs";

const container: HTMLElement = document.body;
drawInitResistorsForBands(container);

const color1input: HTMLSelectElement = document.querySelector(".color-1-input");
const color2input: HTMLSelectElement = document.querySelector(".color-2-input");
const color3input: HTMLSelectElement = document.querySelector(".color-3-input");
const color4input: HTMLSelectElement = document.querySelector(".color-4-input");

const Color1Observable = InputSelectColorInit(color1input);
const Color2Observable = InputSelectColorInit(color2input);
const Color3Observable = InputSelectColorInit(color3input);
const Color4Observable = InputSelectColorInit(color4input);

Color1Observable.subscribe((res) => console.log("Boja 1:", res));
Color2Observable.subscribe((res) => console.log("Boja 2:", res));
Color3Observable.subscribe((res) => console.log("Boja 3:", res));
Color4Observable.subscribe((res) => console.log("Boja 4:", res));
