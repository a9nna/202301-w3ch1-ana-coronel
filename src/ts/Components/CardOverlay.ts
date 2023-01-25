import { Character, type CharacterDataStructure } from "../Character/Character";

export interface CardOverlayStructure {
  element: Element;
}

export class CardOverlay extends Character implements CardOverlayStructure {
  constructor(characterData: CharacterDataStructure) {
    super(characterData);
    this.render();
  }

  render(): void {
    document.querySelector(".card-body")!.insertAdjacentHTML(
      "beforeend",
      `<div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: X</li>
                <li>Weapon: XXX</li>
                <li>Dexterity: X</li>
                <li>Kiss Ass level: X</li>
                <li>Advises to: X</li>
                <li>Serves to: X</li>
              </ul>
        </div>`
    );
  }
}
