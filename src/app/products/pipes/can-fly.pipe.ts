import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Flies' | "can't Fly" {
    return value ? 'Flies' : "can't Fly";
  }
}
