import { colorInputs4Band } from "./UIconfig";
import { createSelectInput } from "./initialUI";

export function drawInitResistorsForBands(host: HTMLElement) {
  const container = document.createElement("div");
  container.classList.add("main-container-4band");

  const inputsContainer = document.createElement("div");
  inputsContainer.classList.add("input-containers");

  draw4BandsInputs(inputsContainer);
  container.appendChild(inputsContainer);

  draw4BandResitorDiv(container);
  host.append(container);
}

function draw4BandResitorDiv(host: HTMLElement) {
  const resistorDiv = document.createElement("div");
  resistorDiv.classList.add("resistor-div");

  const resistorLeftSide = document.createElement("div");
  resistorLeftSide.classList.add("resistor-left-side");

  const resistorRightSide = document.createElement("div");
  resistorRightSide.classList.add("resistor-right-side");

  drawBands(resistorLeftSide, resistorRightSide);

  resistorDiv.appendChild(resistorLeftSide);
  resistorDiv.appendChild(resistorRightSide);

  host.appendChild(resistorDiv);
}

function draw4BandsInputs(host: HTMLDivElement) {
  colorInputs4Band.forEach((input) => {
    createSelectInput(host, input);
  });
}

function drawBands(host1: HTMLDivElement, host2: HTMLDivElement) {
  for (let i = 1; i <= 4; i++) {
    const band = document.createElement("div");
    band.classList.add("band-div");
    if (i < 4) {
      host1.appendChild(band);
    } else {
      host2.appendChild(band);
    }
  }
}
