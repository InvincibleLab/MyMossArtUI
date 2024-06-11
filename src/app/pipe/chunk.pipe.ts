import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {
  transform(value: any[], size: number): any[] {
    const newArray = [];
    for (let i = 0; i < value.length; i += size) {
      newArray.push(value.slice(i, i + size));
    }
    return newArray;
  }
}
