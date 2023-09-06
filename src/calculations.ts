import {
  Observable,
  combineLatest,
  concat,
  concatMap,
  debounceTime,
  interval,
  map,
  merge,
  mergeMap,
  of,
  race,
  switchMap,
  take,
  tap,
  timer,
  zip,
} from "rxjs";

export function suffixToMultiplierr(
  suffix: string,
  mapping: SuffixToMultiplierMapping
): Observable<number> {
  return of(suffix).pipe(map((x) => mapping[x]));
}

export function multiplyResistance(
  resistance: number,
  multiplier: number
): Observable<number> {
  return of(resistance).pipe(
    map((x) => {
      return x * multiplier;
    })
  );
}

function getNumberOfZerosObservable(
  resistanceString: string,
  subtractor: number,
  colorMappings: ColorMappings,
  origin: number
): Observable<Color> {
  return of(resistanceString.split("").length - subtractor).pipe(
    map(
      (x) =>
        <Color>{
          origin,
          color: colorMappings.multiplierToColor[x.toString()],
        }
    )
  );
}
function getToleranceObservable(
  tolerance: number,
  colorMappings: ColorMappings,
  origin: number
): Observable<Color> {
  return of(tolerance).pipe(
    map(
      (x) =>
        <Color>{
          origin,
          color: colorMappings.toleranceToColor[x.toString()],
        }
    )
  );
}

function getSignificantDigitsObservable(
  resistanceString: string,
  indexRange: number,
  colorMappings: ColorMappings,
  origin: number
): Observable<Color> {
  return of(...resistanceString.split("").slice(0, indexRange)).pipe(
    concatMap((digit) =>
      of(<Color>{
        origin,
        color: colorMappings.digitToColor[digit],
      })
    )
  );
}

export function calculateColorsFor4Bands(
  multipliedResistance: number,
  tolerance: number,
  colorMappings: ColorMappings
) {
  const resistanceString = multipliedResistance.toString();
  const significantDigit$ = getSignificantDigitsObservable(
    resistanceString,
    2,
    colorMappings,
    4
  );
  const numberOfZero$ = getNumberOfZerosObservable(
    resistanceString,
    2,
    colorMappings,
    4
  );
  const toleranceObservable = getToleranceObservable(
    tolerance,
    colorMappings,
    4
  );

  const combinedObservable$ = concat(
    significantDigit$,
    numberOfZero$,
    toleranceObservable
  );
  const interval$ = interval(1000).pipe(take(4));

  return zip(combinedObservable$, interval$).pipe(map(([color, _]) => color));
}

export function calculateColorsFor5Bands(
  multipliedResistance: number,
  tolerance: number,
  colorMappings: ColorMappings
) {
  const resistanceString = multipliedResistance.toString();
  const significantDigit$ = getSignificantDigitsObservable(
    resistanceString,
    3,
    colorMappings,
    5
  );
  const numberOfZero$ = getNumberOfZerosObservable(
    resistanceString,
    3,
    colorMappings,
    5
  );
  const toleranceObservable = getToleranceObservable(
    tolerance,
    colorMappings,
    5
  );

  const combinedObservable$ = concat(
    significantDigit$,
    numberOfZero$,
    toleranceObservable
  );

  const interval$ = interval(1000).pipe(take(5));

  return zip(combinedObservable$, interval$).pipe(map(([color, _]) => color));
}

export function calculateColors(
  multipliedResistance: number,
  tolerance: number,
  colorMappings: ColorMappings
) {
  console.log(multipliedResistance);
  const calculate4Band$ = calculateColorsFor4Bands(
    multipliedResistance,
    tolerance,
    colorMappings
  );
  const calculate5Band$ = calculateColorsFor5Bands(
    multipliedResistance,
    tolerance,
    colorMappings
  );
  return merge(calculate4Band$, calculate5Band$);
}

export function drawBand(color: string, host: HTMLDivElement) {
  const bandDiv = document.createElement("div");
  bandDiv.classList.add("band-div");
  bandDiv.style.backgroundColor = color;
  host.appendChild(bandDiv);
}

export function clearSrtipes(host: HTMLDivElement) {
  while (host.lastChild) host.removeChild(host.firstChild);
}
