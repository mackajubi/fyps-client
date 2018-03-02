import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class CoordinatorSearchPipe implements PipeTransform {

  transform(projects: any, term: any): any {
    if(term === undefined) return projects;
    
    return projects.filter(function(item){
      if(item.group_name.toLowerCase().includes(term.toLowerCase())){
        return item.group_name.toLowerCase().includes(term.toLowerCase());
      }else if(item.supervisor.toLowerCase().includes(term.toLowerCase())){
        return item.supervisor.toLowerCase().includes(term.toLowerCase());
      }else if(item.submissionTime.toLowerCase().includes(term.toLowerCase())){
        return item.submissionTime.toLowerCase().includes(term.toLowerCase());       
      }else if(item.file.toLowerCase().includes(term.toLowerCase())){
        return item.file.toLowerCase().includes(term.toLowerCase());
      }        
    }); 
  }

}
