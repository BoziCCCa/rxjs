import { Observable, from } from "rxjs";

const apiUrl = "http://localhost:3000";

export function getDigitToColorMappings(): Observable<DigitToColorMappings> {
  return from(
    fetch(`${apiUrl}/digitToColorMappings`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching mappings:", error);
        throw error;
      })
  );
}

export function getMultiplierMappings(): Observable<SuffixToMultiplierMapping> {
  return from(
    fetch(`${apiUrl}/multiplierMappings`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching mappings:", error);
        throw error;
      })
  );
}

export function getColorToDigitMappings(): Observable<ColorToDigitMappings> {
  return from(
    fetch(`${apiUrl}/colorToDigitMappings`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})%`);
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error fetching mappings:", error);
        throw error;
      })
  );
}
