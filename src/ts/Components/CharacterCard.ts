import { Character, type CharacterDataStructure } from "../Character/Character";

export interface CharacterCardStructure {
  element: Element;
}

export class CharacterCard extends Character implements CharacterCardStructure {
  constructor(characterData: CharacterDataStructure) {
    super(characterData);
    this.render();
  }

  render(): void {
    const charactersList = document.querySelector(".characters-list")!;
    charactersList.innerHTML = `<li class="character">
        <div class="character__card">
          <img src=${this.characterData.imageSource} alt="Character's Name and family" class="character__picture" />
          <i class="emoji"></i>
        </div>
      </li>`;
  }
}
