import { drawInit } from "./ui/initialUI";
import {
  InputNumberInit,
  InputSelectSuffixInit,
  InputSelectToleranceInit,
} from "./inputs";
import { combineLatest, filter, map, mergeMap, switchMap, tap } from "rxjs";
import { getDigitToColorMappings, getMultiplierMappings } from "./apiService";
import {
  calculateColors,
  clearSrtipes,
  calculateColorsFor4Bands,
  calculateColorsFor5Bands,
  drawBand,
  multiplyResistance,
} from "./calculations";
import { drawInitResistorsForBands } from "./ui/colorToResistanceUI";

drawInit(document.body);

const resistanceInput: HTMLInputElement =
  document.querySelector(".resistance-input");
const toleranceInput: HTMLSelectElement =
  document.querySelector(".tollerance-input");
const suffixInput: HTMLSelectElement = document.querySelector(".suffix-input");
const div4Band: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("4band")
);
const div5Band: HTMLDivElement = <HTMLDivElement>(
  document.getElementById("5band")
);

function clearBothStripes() {
  clearSrtipes(div4Band);
  clearSrtipes(div5Band);
}

const inputResistanceObservable = InputNumberInit(resistanceInput);
const inputToleranceObservable = InputSelectToleranceInit(toleranceInput);
const inputSuffixObservable = InputSelectSuffixInit(suffixInput);
const colorMapping$ = getDigitToColorMappings();
const multiplierMapping$ = getMultiplierMappings();

const combinedObservables = combineLatest([
  inputResistanceObservable,
  inputToleranceObservable,
  inputSuffixObservable,
  colorMapping$,
  multiplierMapping$,
]);

const mergedColors$ = combinedObservables.pipe(
  switchMap(
    ([resistance, tolerance, suffix, colorMappings, multiplierMappings]) => {
      console.log(resistance, tolerance, suffix, multiplierMappings);
      clearBothStripes();
      return multiplyResistance(
        parseFloat(resistance),
        multiplierMappings[suffix]
      ).pipe(
        switchMap((multipliedResistance) =>
          calculateColors(
            multipliedResistance,
            parseFloat(tolerance),
            colorMappings
          )
        )
      );
    }
  )
);

mergedColors$.pipe(filter((color) => color.origin === 4)).subscribe((color) => {
  drawBand(color.color, div4Band);
});

mergedColors$.pipe(filter((color) => color.origin === 5)).subscribe((color) => {
  drawBand(color.color, div5Band);
});
