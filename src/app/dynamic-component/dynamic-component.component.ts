import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  constructor() { }
  myArr = [];
  generateRandomNumbers()
  {
    let number:Number = Math.floor(Math.random() * Math.floor(100));
    this.myArr.push(number);
    console.log(this.myArr);
  }
  ngOnInit(): void {
  }

}
