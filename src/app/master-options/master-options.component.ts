import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-master-options',
  templateUrl: './master-options.component.html',
  styleUrls: ['./master-options.component.css']
})
export class MasterOptionsComponent implements OnInit {

  constructor(public fireService: AF, private router: Router) { }

  ngOnInit() {
  }

  createAdventure(){
      this.router.navigate(['dungeonMasterSetup']);
  }

  resumeGame(){
      this.router.navigate(['resumeAdventure']);
  }

  cancel(){
      this.router.navigate(['user']);
  }
}
