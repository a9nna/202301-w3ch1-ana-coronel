export interface CharacterDataStructure {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface CharacterStructure {
  element: Element;
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}

export class Character implements CharacterStructure {
  element: Element;
  public isAlive = true;
  public series = "Game of Thrones";

  constructor(public characterData: CharacterDataStructure) {}

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}
