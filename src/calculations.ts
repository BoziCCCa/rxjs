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
  colorMappings: DigitToColorMappings,
  origin: number
): Observable<Color> {
  const numberOfZeros =
    resistanceString.split("").filter((x) => x !== ".").length - subtractor;

  if (subtractor === 2 && Number(resistanceString) < 10) {
    return of(<Color>{
      origin,
      color: colorMappings.multiplierToColor["-1"],
    });
  } else if (subtractor === 3) {
    if (Number(resistanceString) < 10)
      return of(<Color>{
        origin,
        color: colorMappings.multiplierToColor["-2"],
      });
    else if (Number(resistanceString) < 100)
      return of(<Color>{
        origin,
        color: colorMappings.multiplierToColor["-1"],
      });
  }

  return of(<Color>{
    origin,
    color: colorMappings.multiplierToColor[numberOfZeros.toString()],
  });
}
function getToleranceObservable(
  tolerance: number,
  colorMappings: DigitToColorMappings,
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
  colorMappings: DigitToColorMappings,
  origin: number
): Observable<Color> {
  const resistanceNumber = parseFloat(resistanceString);
  let newResistanceString = resistanceString;

  if (resistanceNumber < Math.pow(10, indexRange - 1)) {
    let multipliedNumber = resistanceNumber;
    while (multipliedNumber < Math.pow(10, indexRange - 1))
      multipliedNumber *= 10;

    newResistanceString = multipliedNumber.toString();
  }
  return of(
    ...newResistanceString
      .split("")
      .slice(0, indexRange)
      .filter((x) => x !== ".")
  ).pipe(
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
  colorMappings: DigitToColorMappings
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
  colorMappings: DigitToColorMappings
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
  colorMappings: DigitToColorMappings
) {
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

export function calculateResistanceAndToleranceFor4Colors(
  color1: string,
  color2: string,
  color3: string,
  color4: string,
  colorToDigitMappings: ColorToDigitMappings
) {
  const resistanceObservable = calculateResistanceFor4Colors(
    color1,
    color2,
    color3,
    colorToDigitMappings
  );

  const toleranceObservable = calculateColorToTolerance(
    color4,
    colorToDigitMappings
  );

  return zip(resistanceObservable, toleranceObservable).pipe(
    switchMap(([resistance, tolerance]) =>
      formatResistance(Number(resistance)).pipe(
        map((formattedResistance) => ({
          resistance: formattedResistance,
          tolerance,
        }))
      )
    )
  );
}

export function calculateResistanceAndToleranceFor5Colors(
  color1: string,
  color2: string,
  color3: string,
  color4: string,
  color5: string,
  colorToDigitMappings: ColorToDigitMappings
) {
  const resistanceObservable = calculateResistanceFor5Colors(
    color1,
    color2,
    color3,
    color4,
    colorToDigitMappings
  );

  const toleranceObservable = calculateColorToTolerance(
    color5,
    colorToDigitMappings
  );

  return zip(resistanceObservable, toleranceObservable).pipe(
    switchMap(([resistance, tolerance]) =>
      formatResistance(Number(resistance)).pipe(
        map((formattedResistance) => ({
          resistance: formattedResistance,
          tolerance,
        }))
      )
    )
  );
}

function calculateResistanceFor5Colors(
  color1: string,
  color2: string,
  color3: string,
  color4: string,
  colorToDigitMappings: ColorToDigitMappings
): Observable<string> {
  const firstDigitObservable = calculateColorToSignificantDigit(
    color1,
    colorToDigitMappings
  );

  const secondDigitObservable = calculateColorToSignificantDigit(
    color2,
    colorToDigitMappings
  );

  const thirdDigitObservable = calculateColorToSignificantDigit(
    color3,
    colorToDigitMappings
  );

  const multiplierDigitObservable = calculateColorToMultiplier(
    color4,
    colorToDigitMappings
  );

  return zip(
    firstDigitObservable,
    secondDigitObservable,
    thirdDigitObservable,
    multiplierDigitObservable
  ).pipe(
    map(([digit1, digit2, digit3, multiplier]): string => {
      const resistance =
        (digit1 * 100 + digit2 * 10 + digit3) * 10 ** multiplier;
      return resistance.toFixed(3);
    })
  );
}

function calculateResistanceFor4Colors(
  color1: string,
  color2: string,
  color3: string,
  colorToDigitMappings: ColorToDigitMappings
): Observable<string> {
  const firstDigitObservable = calculateColorToSignificantDigit(
    color1,
    colorToDigitMappings
  );

  const secondDigitObservable = calculateColorToSignificantDigit(
    color2,
    colorToDigitMappings
  );

  const multiplierDigitObservable = calculateColorToMultiplier(
    color3,
    colorToDigitMappings
  );

  return zip(
    firstDigitObservable,
    secondDigitObservable,
    multiplierDigitObservable
  ).pipe(
    map(([digit1, digit2, multiplier]): string => {
      const resistance = (digit1 * 10 + digit2) * 10 ** multiplier;
      return resistance.toFixed(2);
    })
  );
}

export function calculateColorToSignificantDigit(
  color: string,
  mappings: ColorToDigitMappings
): Observable<number> {
  return of(color).pipe(
    map((color): number => {
      return mappings.colorToDigit[color];
    })
  );
}

function calculateColorToMultiplier(
  color: string,
  mappings: ColorToDigitMappings
): Observable<number> {
  return of(color).pipe(
    map((color): number => {
      return mappings.colorToMultiplier[color];
    })
  );
}

function calculateColorToTolerance(
  color: string,
  mappings: ColorToDigitMappings
): Observable<number> {
  return of(color).pipe(
    map((color): number => {
      return mappings.colorToTolerance[color];
    })
  );
}

function formatResistance(resistance: number): Observable<string> {
  return of(resistance).pipe(
    map((value) => {
      if (value >= 1e9) {
        return (value / 1e9).toFixed(2) + " GΩ";
      } else if (value >= 1e6) {
        return (value / 1e6).toFixed(2) + " MΩ";
      } else if (value >= 1e3) {
        return (value / 1e3).toFixed(2) + " KΩ";
      } else {
        return value.toFixed(2) + " Ω";
      }
    })
  );
}
