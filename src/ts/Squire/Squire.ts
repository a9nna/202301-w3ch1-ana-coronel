import {
  Character,
  type CharacterDataStructure,
  type CharacterStructure,
} from "../Character/Character";
import { Fighter, type FighterStructure } from "../Fighter/Fighter";

export interface SquireStructure extends CharacterStructure {
  serves: FighterStructure;
  kissAssLevel: number;
}

export class Squire extends Character implements SquireStructure {
  die: () => void;

  constructor(
    characterData: CharacterDataStructure,
    public kissAssLevel: number,
    public serves: Fighter
  ) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  private kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}
