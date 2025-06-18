import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  standalone: false,
})
export class SummaryPipe implements PipeTransform {
  // the question mark makes it optional
  transform(value: any, limit?: number) {
    // if value is falsey then it returns null
    if (!value) null;

    // if a limit is set within the pipe it takes it else 50
    let actualLimit = limit ? limit : 50;
    return value.substr(0, actualLimit) + '...';
  }
}
