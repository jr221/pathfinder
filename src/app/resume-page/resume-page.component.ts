import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';
import { Character } from '../create-character/character.model';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  public characters;
  constructor(public fireService: AF, private router: Router) {
    fireService.getFromDatabase('character', fireService.uid, 'uid').subscribe((data) => {
      this.characters = data;
      console.log('Checking data in get: ', data);
      console.log(this.characters);
    });
   }

  resume(character: Character){
    console.log('the character from selection: ', character);
    this.fireService.setCurChar(character);
    this.router.navigate(['playerChar']);
    console.log('wooohooo');
  }

  ngOnInit() {
  }

}
