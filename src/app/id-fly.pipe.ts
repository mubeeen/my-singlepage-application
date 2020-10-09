import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idFly'
})
export class IdFlyPipe implements PipeTransform {

  transform(animals: any): any{
    //console.log(animals);

    if(animals.values() == true)
    {
      console.log("inside");
      console.log(animals);
      return animals;
    }
  }

}
