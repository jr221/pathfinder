export class Character {
  characterName: string;
  characterClass: string;
  characterBackground: string;
  characterFaction: string;
  characterRace: string;
  characterAllignment: string;
  characterStrength: number;
  characterDexterity: number;
  characterConstitution: number;
  characterIntelligence: number;
  characterWisdom: number;
  characterCharisma: number;

  // these ones can be figured out by the answer to the previous set
  characterArmorClass: number;
  characterInspiration: number;
  characterInitiative: number;
  characterSpeed: number;
  charracterCurrentHitPoint: number;
  characterTotalHitPoints: number;

  constructor(characterName: string, characterClass: string, characterBackground: string,
  characterFaction: string, characterRace: string, characterAllignment: string, characterStrength: number,
  characterDexterity: number, characterConstitution: number, characterIntelligence: number, characterWisdom: number,
  characterCharisma: number){
    this.characterName = characterName;
    this.characterClass = characterClass;
    this.characterBackground = characterBackground;
    this.characterFaction = characterFaction;
    this.characterRace = characterRace;
    this.characterAllignment = characterAllignment;
    this.characterStrength = characterStrength;
    this.characterDexterity = characterDexterity;
    this.characterConstitution = characterConstitution;
    this.characterIntelligence = characterIntelligence;
    this.characterWisdom = characterWisdom;
    this.characterCharisma = characterCharisma;
  }

  raiseInspiration(){
    this.characterInspiration += 1;
  }
  reduceInspiration(){
    this.characterInspiration -= 1;
  }
  raiseHitPoints(){
    this.charracterCurrentHitPoint += 1;
  }
  reduceHitPoints(){
    this.charracterCurrentHitPoint -= 1;
  }
}
