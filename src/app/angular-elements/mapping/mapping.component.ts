import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EleServiceService } from '../../ele-service.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {
  value = "MyName is Parent";
  sampleString: string = "MyName is Parent";

  constructor(private service: EleServiceService)
  {
    this.service.setvalue(this.sampleString);
  }
  updateBox(e) {
    this.sampleString = e.target.value; 
    this.service.setvalue(this.sampleString);
  }

  ngOnInit(): void {
  }

}
