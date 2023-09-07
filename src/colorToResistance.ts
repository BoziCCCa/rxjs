import {
  drawInitResistorsForBands,
  fillBandWithColor,
} from "./ui/colorToResistanceUI";
import { InputSelectColorInit } from "./inputs";
import { combineLatest } from "rxjs";

const container: HTMLElement = document.body;
drawInitResistorsForBands(container);

const color1input: HTMLSelectElement = document.querySelector(".color-1-input");
const color2input: HTMLSelectElement = document.querySelector(".color-2-input");
const color3input: HTMLSelectElement = document.querySelector(".color-3-input");
const color4input: HTMLSelectElement = document.querySelector(".color-4-input");

const band1: HTMLDivElement = <HTMLDivElement>document.getElementById("band-1");
const band2: HTMLDivElement = <HTMLDivElement>document.getElementById("band-2");
const band3: HTMLDivElement = <HTMLDivElement>document.getElementById("band-3");
const band4: HTMLDivElement = <HTMLDivElement>document.getElementById("band-4");

const color1Observable = InputSelectColorInit(color1input);
const color2Observable = InputSelectColorInit(color2input);
const color3Observable = InputSelectColorInit(color3input);
const color4Observable = InputSelectColorInit(color4input);

const combinedObservable$ = combineLatest([
  color1Observable,
  color2Observable,
  color3Observable,
  color4Observable,
]);

combinedObservable$.subscribe(([color1, color2, color3, color4]) => {
  console.log("Boje:", color1, color2, color3, color4);
});

color1Observable.subscribe((color) => fillBandWithColor(band1, color));
color2Observable.subscribe((color) => fillBandWithColor(band2, color));
color3Observable.subscribe((color) => fillBandWithColor(band3, color));
color4Observable.subscribe((color) => fillBandWithColor(band4, color));
