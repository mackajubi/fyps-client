import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGroup'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, term: any): any {
    if(term == undefined) return value;

    return value.filter(item =>{
      return item.group.toLowerCase().includes(term.toLowerCase());
      /*
      if(item.group.toLowerCase().includes(term.toLowerCase())){
        return item.group.toLowerCase().includes(term.toLowerCase());
      }else{
        console.log("search among dates");
        return item.status.filter( res =>{
          return res.date.toLowerCase().includes(term.toLowerCase());
        });
      }
      */
    });
  }

}
