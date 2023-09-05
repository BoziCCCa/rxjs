import { Observable, from } from "rxjs";

const apiUrl = "http://localhost:3000";

export function getColorMappings(): Observable<ColorMappings> {
  return from(
    fetch(`${apiUrl}/colorMappings`)
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
