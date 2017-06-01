import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';

@Component({
  selector: 'app-join-adventure',
  templateUrl: './join-adventure.component.html',
  styleUrls: ['./join-adventure.component.css']
})
export class JoinAdventureComponent implements OnInit {

  constructor(public authService: AF, private router: Router) {
    if(!status){
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
  }

}
