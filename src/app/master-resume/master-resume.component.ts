import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-master-resume',
  templateUrl: './master-resume.component.html',
  styleUrls: ['./master-resume.component.css']
})
export class MasterResumeComponent implements OnInit {

  public characters;
  constructor(public fireService: AF, private router: Router) {
    fireService.getFromDatabase('character', fireService.uid, 'uid').subscribe((data) => {
      this.characters = data;
      console.log('Checking data in get: ', data);
      console.log(this.characters);
    });
   }

  resume(){
    
  }

  ngOnInit() {
  }

}
