export interface Input {
  name: string;
  type: string;
  id: string;
  value: string | string[];
}

export interface Resistor {
  title: string;
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
    value: ["/", "K", "M", "G", "m", "u", "n", "p", "f"],
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
  },
  {
    title: "Otpornik sa 5 boja",
  },
];
