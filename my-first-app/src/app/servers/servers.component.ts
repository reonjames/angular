import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewserver:boolean=false;
  serverMsg='New server is not created';
  serverName='testserver';
  username='';
  allowButton=true;

  constructor(){
    setTimeout(() => {
      this.allowNewserver=true;
    }, 5000);
  }
  onServerBtnClick(){
    this.serverMsg='New server is created and name is'+this.serverName;
  }
  onServerUpdate(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  onusernameUpdate(event:Event){
    this.username=(<HTMLInputElement>event.target).value;
    this.allowButton=false;
  }
  onUserNameButton(){
      this.username='';
  }
}
