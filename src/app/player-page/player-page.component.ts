import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  public playerCharacter;
  constructor(public fireService: AF, private router: Router) {
    this.playerCharacter = fireService.currentChar;
    console.log('get current char', fireService.currentChar);
  }

  ngOnInit() {
  }

}
