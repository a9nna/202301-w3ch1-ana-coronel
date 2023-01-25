import { Character, type CharacterDataStructure } from "../Character/Character";

export interface CharacterInfoStructure {
  element: Element;
}

export class CharacterInfo extends Character implements CharacterInfoStructure {
  constructor(characterData: CharacterDataStructure) {
    super(characterData);
    this.render();
  }

  render(): void {
    document.querySelector(".card-body")!.insertAdjacentHTML(
      "beforeend",
      `<div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.characterData.age}</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>`
    );
  }
}
