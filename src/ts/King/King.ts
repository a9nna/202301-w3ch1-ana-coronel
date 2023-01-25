import {
  Character,
  type CharacterDataStructure,
  type CharacterStructure,
} from "../Character/Character";

export interface KingStructure extends CharacterStructure {
  yearsOfReign: number;
  element: Element;
}

export class King extends Character implements KingStructure {
  die: () => void;

  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
