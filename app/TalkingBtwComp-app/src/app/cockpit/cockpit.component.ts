import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string,serverContent:string}>();
  @ViewChild('serverNameInput') serverNameInput:ElementRef; 
  //newServerName = '';
  //newServerContent = '';
  onAddServer(inputContent:HTMLInputElement) {
    // console.log(inputServer.value);
    this.serverCreated.emit({ serverName: this.serverNameInput.nativeElement.value, serverContent: inputContent.value});
  }
  onAddBlueprint(inputContent:HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: this.serverNameInput.nativeElement.value, serverContent: inputContent.value});  }
}
