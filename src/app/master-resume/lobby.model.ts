import { LobbyUser } from './lobbyUser.model';

export class Lobby {
  public lobbyName: string;
  private password: string;
  public blurb: string;
  private users: LobbyUser[];

  constructor(lobbyName:string, password:string, blurb: string){
    this.lobbyName = lobbyName;
    this.password = password;
    this.blurb = blurb;
  }

  addToLobby(user:LobbyUser){
    this.users.push(user);
  }

}
