import { Input, Resistor, inputs, resistors } from "./UIconfig";

export function drawInit(host: HTMLElement) {
  const container = document.createElement("div");
  container.classList.add("main-container");

  drawInputs(container);

  resistors.forEach((resistor) => {
    drawResistorDiv(container, resistor);
  });

  host.appendChild(container);
}

function drawInputs(host: HTMLDivElement) {
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  const labelInput = document.createElement("label");
  labelInput.textContent = "Ω";

  inputs.forEach((input) => {
    if (input.type === "number") {
      createNumberInput(inputContainer, input, "Otpornost");
      inputContainer.appendChild(labelInput);
    } else if (input.type === "select") {
      if (input.name === "suffix-input")
        createSelectInput(inputContainer, input);
      else if (input.name === "tollerance-input")
        createSelectInput(inputContainer, input);
    }
  });

  host.appendChild(inputContainer);
}

function createNumberInput(
  host: HTMLDivElement,
  input: Input,
  placeholder: string
) {
  const inputText = document.createElement("input");
  inputText.type = input.type;
  inputText.classList.add(input.id);
  inputText.value = "";
  inputText.placeholder = placeholder;
  inputText.id = input.id;
  inputText.name = input.name;
  inputText.step = "1";

  host.appendChild(inputText);
}

export function createSelectInput(host: HTMLDivElement, input: Input) {
  const inputSelect = document.createElement("select");
  inputSelect.classList.add(input.id);
  inputSelect.id = input.id;
  inputSelect.name = input.name;

  const label = document.createElement("label");
  label.innerHTML = input.label;
  label.classList.add("input-label");
  label.htmlFor = input.id;

  const selectOption = document.createElement("option");
  selectOption.value = "";
  selectOption.text = "";
  inputSelect.appendChild(selectOption);

  (<string[]>input.value).forEach((element) => {
    const selectOption = document.createElement("option");
    selectOption.value = element;
    selectOption.text = element;
    inputSelect.appendChild(selectOption);
  });
  host.appendChild(label);
  host.appendChild(inputSelect);
}

function drawResistorDiv(host: HTMLDivElement, resistor: Resistor) {
  const resistorDiv = document.createElement("div");
  resistorDiv.classList.add("resistor-container");

  const titleElement = document.createElement("h2");
  titleElement.textContent = resistor.title;
  resistorDiv.appendChild(titleElement);

  const stripesSpace = document.createElement("div");
  stripesSpace.classList.add("stripes-space");
  stripesSpace.id = resistor.id;
  resistorDiv.appendChild(stripesSpace);

  host.appendChild(resistorDiv);
}
