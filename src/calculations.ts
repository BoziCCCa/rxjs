import { Observable, map, of, tap } from "rxjs";

export function suffixToMultiplierr(
  suffix: string,
  mapping: SuffixToMultiplierMapping
): Observable<number> {
  return of(suffix).pipe(
    tap((x) => {
      console.log("Input Suffix:", mapping[x]);
    }),
    map((x) => mapping[x])
  );
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
