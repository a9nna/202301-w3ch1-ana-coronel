import { Character, type CharacterDataStructure } from "../Character/Character";

export interface CharacterActionsStructure {
  element: Element;
}

export class CharacterActions
  extends Character
  implements CharacterActionsStructure
{
  constructor(characterData: CharacterDataStructure) {
    super(characterData);
    this.render();
  }

  render(): void {
    document.querySelector(".character__overlay")!.insertAdjacentHTML(
      "beforeend",
      `<div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
        </div>`
    );
  }
}
