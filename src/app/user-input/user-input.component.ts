import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  message = 'You have not pressed the button';
  notification = '';
  dir = '';
  val2 = '';
  cities = [];

  constructor() { }
  OnBtnPress()
  {
    this.message = 'You have pressed the button';
  }
  onKey(event: any)
  {
    this.notification += (event.target as HTMLInputElement).value;
  }
  directVal(val: any)
  {
    console.log(val);
    this.dir = val;
  }
  onEnter(val: string)
  {
    this.val2 +=val;
  }
  addCity(city: string)
  {
    if(city){
      this.cities.push(city);
      console.log(this.cities);
    }    
    
  }
  ngOnInit(): void {
  }

}
