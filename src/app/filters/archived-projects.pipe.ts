import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'archivedProjectsFilter'
})
export class ArchivedProjectsPipe implements PipeTransform {

  transform(archivedPros: any, term: any): any {
    if(term === undefined) return archivedPros;
    
    return archivedPros.filter(function(item){
      if(item.group_name.toLowerCase().includes(term.toLowerCase())){
        return item.group_name.toLowerCase().includes(term.toLowerCase());
      }else if(item.title.toLowerCase().includes(term.toLowerCase())){
        return item.title.toLowerCase().includes(term.toLowerCase());
      }else if(item.supervisor.toLowerCase().includes(term.toLowerCase())){
        return item.supervisor.toLowerCase().includes(term.toLowerCase());
      }        
    });  

  }

}
