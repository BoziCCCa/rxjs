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

export const inputs: Input[] = [
  {
    name: "resistance-input",
    type: "number",
    id: "resistance-input",
    value: "",
    label: "Otpornost",
  },
  {
    name: "suffix-input",
    type: "select",
    id: "suffix-input",
    value: ["/", "K", "M", "G"],
    label: "Sufiks:",
  },
  {
    name: "tollerance-input",
    type: "select",
    id: "tollerance-input",
    value: ["1", "2", "0.5", " 0.25", " 0.1", " 0.05", "5", "10"],
    label: "Tolerancija:",
  },
];

export const resistors: Resistor[] = [
  {
    title: "Otpornik sa 4 boje",
    id: "4band",
  },
  {
    title: "Otpornik sa 5 boja",
    id: "5band",
  },
];

export const colorInputs5Band: Input[] = [
  {
    name: "color-1-input",
    type: "select",
    id: "color-1-input",
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
    label: "Boja 1:",
  },
  {
    name: "color-2-input",
    type: "select",
    id: "color-2-input",
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
    label: "Boja 2:",
  },
  {
    name: "color-3-input",
    type: "select",
    id: "color-3-input",
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
    label: "Boja 3:",
  },
  {
    name: "color-multiplier-input",
    type: "select",
    id: "color-multiplier-input",
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
    label: "Boja 4:",
  },
  {
    name: "color-tolerance-input",
    type: "select",
    id: "color-tolerance-input",
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
    label: "Boja 5:",
  },
];

export const colorInputs4Band: Input[] = [
  {
    name: "color-1-input",
    type: "select",
    id: "color-1-input",
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
    label: "Boja 1:",
  },
  {
    name: "color-2-input",
    type: "select",
    id: "color-2-input",
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
    label: "Boja 2:",
  },
  {
    name: "color-3-input",
    type: "select",
    id: "color-3-input",
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
    label: "Boja 3:",
  },
  {
    name: "color-4-input",
    type: "select",
    id: "color-4-input",
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
    label: "Boja 4:",
  },
];
