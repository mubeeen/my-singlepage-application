import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
