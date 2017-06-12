import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';
import { Character } from '../create-character/character.model';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  public playerCharacter: Character;

  public dexterityModifier;
  public strengthModifier;
  public charismarModfier;
  public intelligenceModifier;
  public constitutionModifier;
  public wisdomModifier;

  constructor(public fireService: AF, private router: Router) {
    this.playerCharacter = fireService.getCurrentChar();
    this.dexterityModifier = this.calculateModifier(this.playerCharacter.characterDexterity);
    this.strengthModifier = this.calculateModifier(this.playerCharacter.characterStrength);
    this.charismarModfier = this.calculateModifier(this.playerCharacter.characterCharisma);
    this.intelligenceModifier = this.calculateModifier(this.playerCharacter.characterIntelligence);
    this.constitutionModifier = this.calculateModifier(this.playerCharacter.characterConstitution);
    this.wisdomModifier = this.calculateModifier(this.playerCharacter.characterWisdom);

    console.log('get current char', this.playerCharacter);
  }


  calculateModifier(mod: number):number{
    switch(mod){
      case 1: {
        return -5;
      }
      case 2:{
        return -4;
      }
      case 3: {
        return -4;
      }
      case 4: {
        return -3;
      }
      case 5:{
        return -3;
      }
      case 6:{
        return -2;
      }
      case 7: {
        return -2;
      }
      case 8: {
        return -1;
      }
      case 9:{
        return -1;
      }
      case 10: {
        return 0;
      }
      case 11: {
        return 0;
      }
      case 12:{
        return 1;
      }
      case 13: {
        return 1;
      }
      case 14: {
        return 2;
      }
      case 15:{
        return 2;
      }
      case 16: {
        return 3;
      }
      case 17: {
        return 3;
      }
      case 18:{
        return 4;
      }
      case 19:{
        return 4;
      }
      case 20: {
        return 5;
      }
    }
    return 0;
  }
  ngOnInit() {
  }

}
