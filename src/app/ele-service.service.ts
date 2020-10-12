import { Injectable } from '@angular/core';
import { MappingChildComponent } from './angular-elements/mapping-child/mapping-child.component';
import { MappingComponent } from './angular-elements/mapping/mapping.component';

@Injectable({
  providedIn: 'root'
})
export class EleServiceService {

  constructor() { }
  private value: string;

  public getvalue(): string {
    return this.value;
  }

  public setvalue(input): void {
    this.value = input;
  }
}
