import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (typeof value !== undefined || null) {
      return marked(value || '');
    }
    return null;
  }

}
