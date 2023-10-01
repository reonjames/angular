import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() featureStr = new EventEmitter<String>();
    feature:String = '';
    collapsed = true;
    onSelect(feature:String){
        this.featureStr.emit(feature);
    }
}