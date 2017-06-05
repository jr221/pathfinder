import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

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

  ngOnInit() {
  }

}
