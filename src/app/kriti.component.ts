import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-kriti, [new-kriti]',
    template: `
        <h1>{{myName | uppercase | titlecase }}</h1>
        <h1>{{myName | lowercase }}</h1>
        <ng-content></ng-content>
        <button (click)="ClickMe()">Click Me</button>
        {{toDate | date}} 
    `,
    styles: [
        `:host{color:#800080;}
        `
    ]
})

export class KritiComponent implements OnInit {
    @Input() myName : string = "";
    @Output() buttonClick: EventEmitter<boolean> =  new EventEmitter();

    toDate = new Date();

    ClickMe(){
        this.buttonClick.emit(true);
    }

    constructor() { }

    ngOnInit() {
        
    }

}
