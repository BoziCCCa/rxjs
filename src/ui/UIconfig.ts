export interface Input {
  name: string;
  type: string;
  id: string;
  label: string;
  value: string | string[];
}

export interface Resistor {
  title: string;
  id: string;
}

export interface Label {
  class: string;
}

export const labelResistance4Band: Label = {
  class: "resistance-value-label-4band",
};

export const labelResistance5Band: Label = {
  class: "resistance-value-label-5band",
};

export const inputs: Input[] = [
  {
    name: "resistance-input",
    type: "number",
    id: "resistance-input",
    value: "",
    label: "Resistance",
  },
  {
    name: "suffix-input",
    type: "select",
    id: "suffix-input",
    value: ["/", "K", "M", "G"],
    label: "Suffix:",
  },
  {
    name: "tollerance-input",
    type: "select",
    id: "tollerance-input",
    value: ["1", "2", "0.5", " 0.25", " 0.1", " 0.05", "5", "10"],
    label: "Tolerance:",
  },
];

export const resistors: Resistor[] = [
  {
    title: "Resistor with 4 bands",
    id: "4band",
  },
  {
    title: "Resistor with 5 bands",
    id: "5band",
  },
];

export const colorInputs5Band: Input[] = [
  {
    name: "color-1-input-5band",
    type: "select",
    id: "color-1-input-5band",
    value: [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
    ],
    label: "Color 1:",
  },
  {
    name: "color-2-input-5band",
    type: "select",
    id: "color-2-input-5band",
    value: [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
    ],
    label: "Color 2:",
  },
  {
    name: "color-3-input-5band",
    type: "select",
    id: "color-3-input-5band",
    value: [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
    ],
    label: "Color 3:",
  },
  {
    name: "color-4-input-5band",
    type: "select",
    id: "color-4-input-5band",
    value: [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
      "Gold",
      "Silver",
    ],
    label: "Color 4:",
  },
  {
    name: "color-5-input-5band",
    type: "select",
    id: "color-5-input-5band",
    value: [
      "Brown",
      "Red",
      "Green",
      "Blue",
      "Violet",
      "Grey",
      "Gold",
      "Silver",
    ],
    label: "Color 5:",
  },
];

export const colorInputs4Band: Input[] = [
  {
    name: "color-1-input-4band",
    type: "select",
    id: "color-1-input-4band",
    value: [
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
    ],
    label: "Color 1:",
  },
  {
    name: "color-2-input-4band",
    type: "select",
    id: "color-2-input-4band",
    value: [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
    ],
    label: "Color 2:",
  },
  {
    name: "color-3-input-4band",
    type: "select",
    id: "color-3-input-4band",
    value: [
      "Black",
      "Brown",
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Violet",
      "Gray",
      "White",
      "Gold",
      "Silver",
    ],
    label: "Color 3:",
  },
  {
    name: "color-4-input-4band",
    type: "select",
    id: "color-4-input-4band",
    value: [
      "Brown",
      "Red",
      "Green",
      "Blue",
      "Violet",
      "Grey",
      "Gold",
      "Silver",
    ],
    label: "Color 4:",
  },
];
