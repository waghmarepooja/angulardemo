import{Pipe,PipeTransform} from "@angular/core";
@Pipe({
    name:"testpipe"
})
export class MyPipe implements PipeTransform{
    transform(pname:string,pr:number){
        if(pr>2500){
             return pname+"-----"+"luxury";
        }
        else{
            return pname+"------"+"moderate";
        }
    }

}