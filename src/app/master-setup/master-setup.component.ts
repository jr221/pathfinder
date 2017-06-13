import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AF } from '../providers/af';
import { Lobby } from '../master-resume/lobby.model';

@Component({
  selector: 'app-master-setup',
  templateUrl: './master-setup.component.html',
  styleUrls: ['./master-setup.component.css']
})
export class MasterSetupComponent implements OnInit {
  private newPassword;
  constructor(public fireService: AF, private router: Router) { }

  confirm(newQuestName: HTMLInputElement, newBlurb: HTMLInputElement, newPassword: HTMLInputElement){
    this.newPassword = new Lobby(newQuestName.value, newPassword.value, newBlurb.value);
    this.fireService.pushToDatabase('Lobbies', this.newPassword);
    console.log("inputted values:", newQuestName.value, " ", newBlurb.value, " ", newPassword.value);
  }

  cancel(){
      this.router.navigate(['dungeonMasterOptions']);
  }

  ngOnInit() {
  }


}
