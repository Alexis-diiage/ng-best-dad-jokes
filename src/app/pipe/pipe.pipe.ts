import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'myPipe'
})
export class MyPipe implements PipeTransform {

  transform(value: Post[], slug: string): Post[] {
    return value.filter(e => e.slug != slug);
  }
}
