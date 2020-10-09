import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ComponentInteractionChildComponent } from '../component-interaction-child/component-interaction-child.component';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {
  serverElements = [
    {type: 'server', name: 'Test Server',content: 'Just a test'},
    {type: 'server', name: 'Mubeen',content: 'J-My server'}
  ];

  names = ['Mubeen','Abrar','Uzair','Hamza'];
  //there is a get and set method to interact with different components
  /*@ViewChild('serverContentInput') serverContentInput: ElementRef;

  testing()
  {
    console.log(this.serverContentInput);
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
