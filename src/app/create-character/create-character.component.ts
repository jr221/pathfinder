import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';
import { Character } from './character.model';
import { ClassLevel } from  './classLevel.model';
import { Spells } from './spells.model';


@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  public errorMessage;
  public er = false;
  newCharacter: Character;

  constructor(public fireService: AF, private router: Router) {
  }

  ngOnInit() {

  }

  confirm(cName: HTMLInputElement, cClass: string, cBackground: string,
    cFaction: string, cRace: string, cAllignment: string, cStrength: HTMLInputElement,
    cDexterity: HTMLInputElement, cConstitution: HTMLInputElement, cIntelligence: HTMLInputElement, cWisdom: HTMLInputElement,
    cCharisma: HTMLInputElement){
      console.log('Character Class Value: ', cClass);
      if(cName.value == "" || cClass == null || cBackground == null || cFaction == null || cRace == null
        || cAllignment == null || cStrength.value == "" || cDexterity.value == "" || cConstitution.value == "" ||
         cIntelligence.value == "" || cWisdom.value == "" || cCharisma.value == ""){
          this.errorMessage = "Please enter a value for every field";
          this.er  = true;
          setTimeout(function() {
            this.er = false;
          }.bind(this), 3000);
      }
      else if(!(Number(cStrength.value) ) || !(Number(cDexterity.value)) ||!(Number(cConstitution.value)) ||
       !(Number(cIntelligence.value)) || !(Number(cWisdom.value)) || !(Number(cCharisma.value))){
         this.errorMessage = "Please enter a number value for the right hand fields";
         this.er = true;
         setTimeout(function() {
           this.er = false;
         }.bind(this), 3000);
      }
      else{
        this.newCharacter = new Character(cName.value, cClass, cBackground, cFaction,
          cRace, cAllignment, +cStrength.value,
          +cDexterity.value, +cConstitution.value, +cIntelligence.value, +cWisdom.value, +cCharisma.value)

          var playerCharacter = {
            uid: this.fireService.uid,
            character: this.newCharacter,
            playerId: Math.floor(Math.random() * 10000000) + 1
          }
          this.fireService.pushToDatabase("character", playerCharacter);
          this.fireService.setCurChar(this.newCharacter);
          this.router.navigate(['playerChar']);
      }


        console.log('all the info: ', this.newCharacter);
        console.log('Error Message; ', this.errorMessage);



  }
  cancel(){
    this.router.navigate(['adventureOptions']);
  }


}
