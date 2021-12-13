import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipre'
})
export class PiprePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
