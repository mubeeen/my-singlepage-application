import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdirective',
  templateUrl: './bdirective.component.html',
  styles: [
    `
    .online
    {
      color:white;
    }
    `
  ]
  //styleUrls: ['./bdirective.component.css']
})
export class BdirectiveComponent implements OnInit {

  IsServer = false;
  serverStatus: string;
  value = 65;

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  CreateServer(){
    this.IsServer = true;
    console.log(this.IsServer);
  }
  getColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  ngOnInit(): void {
  }

}
