import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css']
})
export class OptionsPageComponent implements OnInit {

  constructor(public fireService: AF, private router: Router) { }

  ngOnInit() {
  }

  createCharacter(){
      this.router.navigate(['newCharacter']);
  }

  resumeGame(){
      this.router.navigate(['resumeAdventure']);
  }

  cancel(){
      this.router.navigate(['user']);
  }

}
