import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';
import { Character } from './character.model';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  newCharacter: Character;

  constructor(public fireService: AF, private router: Router) { }

  ngOnInit() {

  }

  confirm(cName: HTMLInputElement, cClass: HTMLInputElement, cBackground: HTMLInputElement,
    cFaction: HTMLInputElement, cRace: HTMLInputElement, cAllignment: HTMLInputElement, cStrength: HTMLInputElement,
    cDexterity: HTMLInputElement, cConstitution: HTMLInputElement, cIntelligence: HTMLInputElement, cWisdom: HTMLInputElement,
    cCharisma: HTMLInputElement){
      this.newCharacter = new Character(cName.value, cClass.value, cBackground.value, cFaction.value,
        cRace.value, cAllignment.value, +cStrength.value,
        +cDexterity.value, +cConstitution.value, +cIntelligence.value, +cWisdom.value, +cCharisma.value)

        console.log('all the info: ', this.newCharacter);

      var playerCharacter = {
        uid: this.fireService.uid,
        character: this.newCharacter,
        playerId: Math.floor(Math.random() * 10000000) + 1
      }
      this.fireService.pushToDatabase("character", playerCharacter);
      this.fireService.setCurChar(this.newCharacter);
      this.router.navigate(['playerChar']);

  }
  cancel(){
    this.router.navigate(['adventureOptions']);
  }

}
