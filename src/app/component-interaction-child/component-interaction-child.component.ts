import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './component-interaction-child.component.html',
  styleUrls: ['./component-interaction-child.component.css']
})
export class ComponentInteractionChildComponent implements OnInit {
  @Input() element: {type:string,name:string,content:string};
  constructor() { }

  ngOnInit(): void {
  }

}
