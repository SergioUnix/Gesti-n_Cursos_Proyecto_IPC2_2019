import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDesasignar'
})
export class FilterDesasignarPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {

const resultPosts =[];
for(const asig of value){
if(asig.auxiliar.indexOf(arg)> -1){
resultPosts.push(asig);
}else if(asig.curso.indexOf(arg)> -1){
  resultPosts.push(asig);
  };



};
return resultPosts;
  }

}
