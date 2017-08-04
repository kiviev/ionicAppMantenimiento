import { Pipe, PipeTransform } from '@angular/core';

/**
 * Esta todo sin hacer
 */
@Pipe({
  name: 'change-trans',
})
export class ChangeTransPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
