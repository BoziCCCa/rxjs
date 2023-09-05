import { drawInit } from "./ui/initialUI";
import {
  InputNumberInit,
  InputSelectSuffixInit,
  InputSelectToleranceInit,
} from "./inputs";
import { combineLatest, map, mergeMap, switchMap } from "rxjs";
import { getColorMappings, getMultiplierMappings } from "./apiService";
import { multiplyResistance, suffixToMultiplierr } from "./calculations";

drawInit(document.body);

const resistanceInput: HTMLInputElement =
  document.querySelector(".resistance-input");
const toleranceInput: HTMLSelectElement =
  document.querySelector(".tollerance-input");
const suffixInput: HTMLSelectElement = document.querySelector(".suffix-input");

const inputResistanceObservable = InputNumberInit(resistanceInput);
const inputToleranceObservable = InputSelectToleranceInit(toleranceInput);
const inputSuffixObservable = InputSelectSuffixInit(suffixInput);
const colorMapping$ = getColorMappings();
const multiplierMapping$ = getMultiplierMappings();

const combinedObservables = combineLatest([
  inputResistanceObservable,
  inputToleranceObservable,
  inputSuffixObservable,
  colorMapping$,
  multiplierMapping$,
]);

// combinedObservables
//   .pipe(
//     mergeMap(
//       ([resistance, tolerance, suffix, colorMappings, multiplierMappings]) => {
//         console.log(resistance, tolerance, suffix);
//         return suffixToMultiplier(suffix, multiplierMappings).pipe(
//           mergeMap((multiplier) =>
//             multiplyResistance(<number>(<unknown>resistance), multiplier)
//           )
//         );
//       }
//     )
//   )
//   .subscribe((result) => {
//     console.log("Result:", result);
//   });

combinedObservables.subscribe(
  ([resistance, tolerance, suffix, colorMappings, multiplierMappings]) => {
    console.log(resistance, tolerance, suffix, multiplierMappings);
    suffixToMultiplierr(suffix, multiplierMappings)
      .pipe(
        mergeMap((multiplier) =>
          multiplyResistance(parseFloat(resistance), multiplier)
        )
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
);
