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
    [key: string]: string;
  };
  colorToTolerance: {
    [key: string]: string;
  };
  colorToMultiplier: {
    [key: string]: string;
  };
}
