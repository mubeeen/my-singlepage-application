import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  //it is use to add a new tag on the runtime. The tag is already rendered and added during the runtime.
  constructor() { }
  addElement()
  {
    const container = document.getElementById('container');
    container.innerHTML = '<app-greet></app-greet>';
  }
  ngOnInit(): void {
  }

}
