import {
  drawInitResistorsForBands,
  editResistanceLabel,
  fillBandWithColor,
} from "./ui/colorToResistanceUI";
import { InputSelectColorInit } from "./inputs";
import { combineLatest, switchMap } from "rxjs";
import {
  calculateResistanceAndToleranceFor4Colors,
  calculateResistanceAndToleranceFor5Colors,
} from "./calculations";
import { getColorToDigitMappings } from "./apiService";

const container: HTMLElement = document.body;
drawInitResistorsForBands(container);

const color1input4band: HTMLSelectElement = document.querySelector(
  ".color-1-input-4band"
);
const color2input4band: HTMLSelectElement = document.querySelector(
  ".color-2-input-4band"
);
const color3input4band: HTMLSelectElement = document.querySelector(
  ".color-3-input-4band"
);
const color4input4band: HTMLSelectElement = document.querySelector(
  ".color-4-input-4band"
);

const color1input5band: HTMLSelectElement = document.querySelector(
  ".color-1-input-5band"
);
const color2input5band: HTMLSelectElement = document.querySelector(
  ".color-2-input-5band"
);
const color3input5band: HTMLSelectElement = document.querySelector(
  ".color-3-input-5band"
);
const color4input5band: HTMLSelectElement = document.querySelector(
  ".color-4-input-5band"
);
const color5input5band: HTMLSelectElement = document.querySelector(
  ".color-5-input-5band"
);

const band1FourBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-4-1")
);
const band2FourBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-4-2")
);
const band3FourBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-4-3")
);
const band4FourBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-4-4")
);

const band1FiveBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-5-1")
);
const band2FiveBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-5-2")
);
const band3FiveBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-5-3")
);
const band4FiveBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-5-4")
);
const band5FiveBand: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("band-5-5")
);

const resitsanceLabel4band = <HTMLLabelElement>(
  document.querySelector(".resistance-value-label-4band")
);

const resitsanceLabel5band = <HTMLLabelElement>(
  document.querySelector(".resistance-value-label-5band")
);

const colorToDigitMapping$ = getColorToDigitMappings();

const color1Observable4band = InputSelectColorInit(color1input4band);
const color2Observable4band = InputSelectColorInit(color2input4band);
const color3Observable4band = InputSelectColorInit(color3input4band);
const color4Observable4band = InputSelectColorInit(color4input4band);

const color1Observable5band = InputSelectColorInit(color1input5band);
const color2Observable5band = InputSelectColorInit(color2input5band);
const color3Observable5band = InputSelectColorInit(color3input5band);
const color4Observable5band = InputSelectColorInit(color4input5band);
const color5Observable5band = InputSelectColorInit(color5input5band);

const combined4bandObservable$ = combineLatest([
  color1Observable4band,
  color2Observable4band,
  color3Observable4band,
  color4Observable4band,
  colorToDigitMapping$,
]);

const combined5bandObservable$ = combineLatest([
  color1Observable5band,
  color2Observable5band,
  color3Observable5band,
  color4Observable5band,
  color5Observable5band,
  colorToDigitMapping$,
]);

combined4bandObservable$
  .pipe(
    switchMap(([color1, color2, color3, color4, colorToDigitMappings]) =>
      calculateResistanceAndToleranceFor4Colors(
        color1,
        color2,
        color3,
        color4,
        colorToDigitMappings
      )
    )
  )
  .subscribe(({ resistance, tolerance }) => {
    editResistanceLabel(
      resitsanceLabel4band,
      "Resistance: " + resistance + "  Tolerance: " + tolerance + " %"
    );
  });

combined5bandObservable$
  .pipe(
    switchMap(
      ([color1, color2, color3, color4, color5, colorToDigitMappings]) =>
        calculateResistanceAndToleranceFor5Colors(
          color1,
          color2,
          color3,
          color4,
          color5,
          colorToDigitMappings
        )
    )
  )
  .subscribe(({ resistance, tolerance }) => {
    editResistanceLabel(
      resitsanceLabel5band,
      "Resistance: " + resistance + "  Tolerance: " + tolerance + " %"
    );
  });

color1Observable4band.subscribe((color) =>
  fillBandWithColor(band1FourBand, color)
);
color2Observable4band.subscribe((color) =>
  fillBandWithColor(band2FourBand, color)
);
color3Observable4band.subscribe((color) =>
  fillBandWithColor(band3FourBand, color)
);
color4Observable4band.subscribe((color) =>
  fillBandWithColor(band4FourBand, color)
);

color1Observable5band.subscribe((color) => {
  fillBandWithColor(band1FiveBand, color);
});
color2Observable5band.subscribe((color) =>
  fillBandWithColor(band2FiveBand, color)
);
color3Observable5band.subscribe((color) =>
  fillBandWithColor(band3FiveBand, color)
);
color4Observable5band.subscribe((color) =>
  fillBandWithColor(band4FiveBand, color)
);
color5Observable5band.subscribe((color) =>
  fillBandWithColor(band5FiveBand, color)
);
