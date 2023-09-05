interface ColorMappings {
  digitToColor: {
    [key: string]: string;
  };
  toleranceToColor: {
    [key: string]: string;
  };
}

interface MultiplierMappings {
  suffixToMultiplier: {
    [key: string]: number;
  };
}

interface ResistorMappings {
  multiplierMappings: MultiplierMappings;
  colorMappings: ColorMappings;
}
