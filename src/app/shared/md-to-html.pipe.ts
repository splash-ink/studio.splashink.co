import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
