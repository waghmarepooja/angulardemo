import {Component, Output,Input,EventEmitter,SimpleChanges} from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
@Component({
    selector:'pform',
    templateUrl:'./pform.component.html',
    styleUrls:['./pform.component.css']
})
export class PformComponent{
    pid:number;
    pname:string;
    price:number;
    parr:Product[];
    @Output() myevent=new EventEmitter();
    @Output() myevent1=new EventEmitter();
    @Input("upob") prod:Product;
    constructor(private pservice:ProductService){}
    ngOnChanges(change:SimpleChanges){
        if(change["prod"].currentValue!=change["prod"].previousValue){
            this.pid=this.prod.pid;
            this.pname=this.prod.pname;
            this.price=this.prod.price;
        }
    }

    addproduct(){
        let p=new Product(this.pid,this.pname,this.price);
        this.pservice.addProduct(p)
        .subscribe(result=>{this.parr=result;
                 this.myevent.emit(this.parr);
                 this.myevent1.emit(false)
        });
        console.log(this.parr);
        this.pid=0;
        this.pname="";
        this.price=0;

    }
    updateProduct(){
        let p=new Product(this.pid,this.pname,this.price);
        this.pservice.updateProduct(p)
        .subscribe(result=>{
                 this.parr=result;
                 this.myevent.emit(this.parr);
                 this.myevent1.emit(false);
        });
        this.pid=0;
        this.pname="";
        this.price=0;
    }
}