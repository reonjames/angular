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
  serverColor=Math.random()>0.5 ? 'red': 'green';
  

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
  getColor(){
    return this.serverColor;
  }
  
}
