import { SelectorContext } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    serviceId:number=12;
    serviceName:string='angular';
    clickToSee=false;
    addServer=['testserver1'];
    serverName='testserver';
    getClickToSee(){
        this.clickToSee=true;
    }
    onAddServer(){
        this.addServer.push(this.serverName);
      }
}