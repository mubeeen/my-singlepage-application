import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-component-interaction-child',
  templateUrl: './component-interaction-child.component.html',
  styleUrls: ['./component-interaction-child.component.css']
})
export class ComponentInteractionChildComponent implements OnInit {
  //@Input() element: {type:string,name:string,content:string};
  /*@Input()
  get name(): string {
    return this._name
  }
  set name(name: string)
  {
    this._name = name;
  }
  private _name = '';*/
  /*c1 = 'The C1 button is not pressed';
  child1()
  {
    this.c1 = 'The C1 button is pressed';
  }
*/
  constructor() { }

  ngOnInit(): void {
  }

}
