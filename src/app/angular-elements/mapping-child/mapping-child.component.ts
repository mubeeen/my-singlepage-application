import { Component, OnInit, OnChanges } from '@angular/core';
import { EleServiceService } from '../../ele-service.service';

@Component({
  selector: 'app-mapping-child',
  templateUrl: './mapping-child.component.html',
  styleUrls: ['./mapping-child.component.css']
})
export class MappingChildComponent implements OnInit, OnChanges {
  value = '';
  constructor(private service: EleServiceService) { 
    this.value = service.getvalue();
    console.log("child Componenet : ",this.value);
  }
  ngOnChanges()
  {
    console.log("child change");
  }

  ngOnInit(): void {
  }

}
