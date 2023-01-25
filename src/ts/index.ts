import { Character, type CharacterDataStructure } from "./Character/Character";
import { King } from "./King/King";
import { Fighter } from "./Fighter/Fighter";
import { Advisor } from "./Advisor/Advisor";
import { Squire } from "./Squire/Squire";
import joffreyImage from "../img/joffrey.jpg";
import { CardBody } from "./Components/CardBody";
import { CharacterCard } from "./Components/CharacterCard";
import { CharacterInfo } from "./Components/CharacterInfo";
import { CardOverlay } from "./Components/CardOverlay";
import { CharacterActions } from "./Components/CharacterActions";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: String(joffreyImage),
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daeneryse = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daeneryse);
export const bronn = new Squire(bronnData, 0, jaime);

const joffreyCard = new CharacterCard(joffreyData);
const joffreyCardBody = new CardBody(joffreyData);
const joffreyCardInfo = new CharacterInfo(joffreyData);
const joffreyCardOverlay = new CardOverlay(joffreyData);
const joffreyActions = new CharacterActions(joffreyData);
