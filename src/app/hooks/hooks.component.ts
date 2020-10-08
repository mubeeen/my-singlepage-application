import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("I'm On Init");
  }
  
  ngOnChanges()
  {
    console.log("I'm on Change");
  }
  ngDoCheck()
  {
    console.log("I'm on Do Check");
  }
  ngAfterContentInit()
  {
    console.log("I'm on Content init");
  }
  ngAfterContentChecked()
  {
    console.log("I'm on After content checked");
  }
  ngAfterViewInit()
  {
    console.log("I'm on After view init");
  }
  ngAfterViewChecked()
  {
    console.log("I'm on view checked");
  }
  ngOnDestroy()
  {
    console.log("I'm destroy");
  }
}
