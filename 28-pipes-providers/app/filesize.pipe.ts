import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extention: string = 'MB') {
    return (size / (1024 * 1024)).toFixed(2) + ' ' + extention;
  }
}
