import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  fromEvent,
  map,
  merge,
  pairwise,
  startWith,
  switchMap,
  take,
} from "rxjs";

export function InputNumberInit(input: HTMLInputElement): Observable<string> {
  return <Observable<string>>fromEvent(input, "input").pipe(
    map((ev: InputEvent) => {
      const inputValue = parseFloat((ev.target as HTMLInputElement).value);
      return Number.isInteger(inputValue) && inputValue >= 0
        ? inputValue.toString()
        : null;
    }),
    filter((value) => value !== null),
    debounceTime(1000),
    distinctUntilChanged()
  );
}

export function InputSelectToleranceInit(
  input: HTMLSelectElement
): Observable<string> {
  let blankOptionRemoved = false;

  const changeObservable = fromEvent(input, "change").pipe(
    map(() => {
      if (!blankOptionRemoved) {
        const blankOption = input.querySelector('option[value=""]');
        if (blankOption) {
          input.removeChild(blankOption);
          blankOptionRemoved = true;
        }
      }
      return input.value;
    })
  );

  const inputObservable = fromEvent(input, "change").pipe(
    map(() => input.value)
  );

  return merge(changeObservable, inputObservable).pipe(
    debounceTime(1000),
    distinctUntilChanged()
  );
}
export function InputSelectSuffixInit(
  input: HTMLSelectElement
): Observable<string> {
  let blankOptionRemoved = false;

  const changeObservable = fromEvent(input, "change").pipe(
    map(() => {
      if (!blankOptionRemoved) {
        const blankOption = input.querySelector('option[value=""]');
        if (blankOption) {
          input.removeChild(blankOption);
          blankOptionRemoved = true;
        }
      }
      return input.value;
    })
  );

  const inputObservable = fromEvent(input, "change").pipe(
    map(() => input.value)
  );

  return merge(changeObservable, inputObservable).pipe(
    debounceTime(1000),
    distinctUntilChanged()
  );
}

export function InputSelectColorInit(
  input: HTMLSelectElement
): Observable<string> {
  let blankOptionRemoved = false;

  const changeObservable = fromEvent(input, "change").pipe(
    map(() => {
      if (!blankOptionRemoved) {
        const blankOption = input.querySelector('option[value=""]');
        if (blankOption) {
          input.removeChild(blankOption);
          blankOptionRemoved = true;
        }
      }
      return input.value;
    })
  );

  const inputObservable = fromEvent(input, "change").pipe(
    map(() => input.value)
  );

  return merge(changeObservable, inputObservable).pipe(
    debounceTime(1000),
    distinctUntilChanged()
  );
}
