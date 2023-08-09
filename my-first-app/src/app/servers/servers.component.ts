import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewserver:boolean=false;
  serverMsg='New server is not created';

  constructor(){
    setTimeout(() => {
      this.allowNewserver=true;
    }, 5000);
  }
  onServerBtnClick(){
    this.serverMsg='New server is created';
  }
}
