import { Character, type CharacterDataStructure } from "../Character/Character";

export interface CardBodyStructure {
  element: Element;
}

export class CardBody extends Character implements CardBodyStructure {
  constructor(characterData: CharacterDataStructure) {
    super(characterData);
    this.render();
  }

  render(): void {
    document.querySelector(".character__card")!.insertAdjacentHTML(
      "beforeend",
      `<div class="card-body">
            <h2 class="character__name"> ${this.characterData.name} ${this.characterData.family} </h2>
            </div>`
    );
  }
}
