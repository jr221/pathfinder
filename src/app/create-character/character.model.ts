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
  private characterArmorClass: number;
  private characterInspiration: number;
  private characterInitiative: number;
  private characterSpeed: number;
  private characterCurrentHitPoint: number;
  private characterTotalHitPoints: number;


  private characterLevel: number;
  private characterExperience: number;

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

    this.characterLevel = 1;
    this.characterExperience = 0;
    this.characterSpeed = 30;
    this.characterArmorClass = 16;
    this.characterInitiative = 1;
    this.characterCurrentHitPoint = characterConstitution + 8;
    this.characterTotalHitPoints = characterConstitution + 8;
  }

  raiseInspiration(){
    this.characterInspiration += 1;
  }
  reduceInspiration(){
    this.characterInspiration -= 1;
  }
  raiseHitPoints(){
    this.characterCurrentHitPoint += 1;
  }
  reduceHitPoints(){
    this.characterCurrentHitPoint -= 1;
  }
  getCharacterName(){
    return this.characterName;
  }

  raiseExperience(){
    this.characterExperience += 1;

    if(this.characterExperience == 100){
      this.characterLevel += 1;
      this.characterExperience = 0;
    }
  }
  reduceExperience(){
    this.characterExperience -= 1;
  }

}
