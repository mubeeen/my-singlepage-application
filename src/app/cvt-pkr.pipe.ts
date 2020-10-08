import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cvtPkr'
})
export class CvtPkrPipe implements PipeTransform {

  transform(amount: number) {
    return (amount*156);
  }

}
