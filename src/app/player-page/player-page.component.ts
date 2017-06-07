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
  constructor(public fireService: AF, private router: Router) {
    this.playerCharacter = fireService.getCurrentChar();
    console.log('get current char', this.playerCharacter);
  }

  ngOnInit() {
  }

}
