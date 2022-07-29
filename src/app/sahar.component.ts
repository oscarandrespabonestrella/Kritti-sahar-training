import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    template: `
        <h1>{{name| lowercase | titlecase }}</h1>
        <ng-content></ng-content>
        <button (click)="action()"> test</button>
        {{date| date:'dd-MM-YYYY'}}
        
    `,
    selector: "app-sahar, [app-sahar]",
    styles:[
        `:host{color:#000FFF; }
        `
    ]
             
})

export class SaharComponent implements OnInit {
   @Input() name : string = "";
   @Output() buttonClick: EventEmitter<boolean> = new EventEmitter();
    date = new Date();

   action(){
     this.buttonClick.emit(true)    
   } 
    constructor() { }

    ngOnInit() {
        
    }

}