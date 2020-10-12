import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },1000)
  }
  allowNewServer = false;

  ngOnInit(): void {
  }

}
