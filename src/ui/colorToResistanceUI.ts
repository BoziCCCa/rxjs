import {
  Input,
  Label,
  colorInputs4Band,
  colorInputs5Band,
  labelResistance4Band,
  labelResistance5Band,
} from "./UIconfig";
import { createSelectInput } from "./initialUI";

export function drawInitResistorsForBands(host: HTMLElement) {
  const container = document.createElement("div");
  container.classList.add("main-container");

  const inputsContainer4band = document.createElement("div");
  inputsContainer4band.classList.add("input-container");

  const inputsContainer5band = document.createElement("div");
  inputsContainer5band.classList.add("input-container");

  drawInputs(inputsContainer4band, colorInputs4Band);
  container.appendChild(inputsContainer4band);

  draw4BandResitorDiv(container);
  drawResistanceValueLabel(container, labelResistance4Band);

  drawInputs(inputsContainer5band, colorInputs5Band);
  container.appendChild(inputsContainer5band);

  draw5bandResistorDiv(container);
  drawResistanceValueLabel(container, labelResistance5Band);

  host.appendChild(container);
}

function draw4BandResitorDiv(host: HTMLElement) {
  const resistorDiv = document.createElement("div");
  resistorDiv.classList.add("resistor-div");

  const resistorLeftSide = document.createElement("div");
  resistorLeftSide.classList.add("resistor4-left-side");

  const resistorRightSide = document.createElement("div");
  resistorRightSide.classList.add("resistor4-right-side");

  drawBands(resistorLeftSide, resistorRightSide, 4);

  resistorDiv.appendChild(resistorLeftSide);
  resistorDiv.appendChild(resistorRightSide);

  host.appendChild(resistorDiv);
}

function draw5bandResistorDiv(host: HTMLElement) {
  const resistorDiv = document.createElement("div");
  resistorDiv.classList.add("resistor-div");

  const resistorLeftSide = document.createElement("div");
  resistorLeftSide.classList.add("resistor5-left-side");

  const resistorRightSide = document.createElement("div");
  resistorRightSide.classList.add("resistor5-right-side");

  drawBands(resistorLeftSide, resistorRightSide, 5);

  resistorDiv.appendChild(resistorLeftSide);
  resistorDiv.appendChild(resistorRightSide);

  host.appendChild(resistorDiv);
}

function drawInputs(host: HTMLDivElement, inputs: Input[]) {
  inputs.forEach((input) => {
    createSelectInput(host, input);
  });
}

function drawBands(
  host1: HTMLDivElement,
  host2: HTMLDivElement,
  number: number
) {
  for (let i = 1; i <= number; i++) {
    const band = document.createElement("div");
    band.classList.add("band-div");
    band.id = "band-" + number + "-" + i;
    if (i < number) {
      host1.appendChild(band);
    } else {
      host2.appendChild(band);
    }
  }
}

export function fillBandWithColor(band: HTMLDivElement, color: string) {
  band.style.backgroundColor = color;
}

function drawResistanceValueLabel(host: HTMLDivElement, labelElement: Label) {
  const resistanceValueDiv = document.createElement("div");
  resistanceValueDiv.classList.add("resistance-value-div");

  const label = document.createElement("label");

  const value = document.createElement("label");
  value.classList.add(labelElement.class);

  resistanceValueDiv.appendChild(label);
  resistanceValueDiv.appendChild(value);
  host.appendChild(resistanceValueDiv);
}

export function editResistanceLabel(label: HTMLLabelElement, text: string) {
  label.innerHTML = text;
}
