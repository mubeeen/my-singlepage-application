import { Component, OnInit } from '@angular/core';
import { IdFlyPipe } from '../id-fly.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  Name = 'mubeen';
  amount = '';

  constructor() { }

  animals = {
    cow: false,
    crow: true,
    tiger: false,
    bee:true,
    lion: false
  }

  ngOnInit(): void {
    
  }

}
