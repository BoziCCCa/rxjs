export interface Input {
  name: string;
  type: string;
  id: string;
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
  },
  {
    name: "suffix-input",
    type: "select",
    id: "suffix-input",
    value: ["/", "K", "M", "G"],
  },
  {
    name: "tollerance-input",
    type: "select",
    id: "tollerance-input",
    value: ["1", "2", "0.5", " 0.25", " 0.1", " 0.05", "5", "10"],
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

export const colorInputs: Input[] = [
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
  },
];
