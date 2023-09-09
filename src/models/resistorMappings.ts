interface DigitToColorMappings {
  digitToColor: {
    [key: string]: string;
  };
  toleranceToColor: {
    [key: string]: string;
  };
  multiplierToColor: {
    [key: string]: string;
  };
}

interface ColorToDigitMappings {
  colorToDigit: {
    [key: string]: number;
  };
  colorToTolerance: {
    [key: string]: number;
  };
  colorToMultiplier: {
    [key: string]: number;
  };
}
