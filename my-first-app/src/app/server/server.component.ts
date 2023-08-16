import { SelectorContext } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    serviceId:number=12;
    serviceName:string='angular';
    clickToSee=false;
    changeClick=false;
    incr=0;
    addServer=['testserver1'];
    incrArr=[];
    serverName='testserver';
    getClickToSee(){
        this.clickToSee=true;
    }
    onAddServer(){
        this.addServer.push(this.serverName);
    }
    onChangeClick(){
        this.changeClick=!this.changeClick;
        this.incr+=1;
        this.incrArr.push(this.incr);
    }
}