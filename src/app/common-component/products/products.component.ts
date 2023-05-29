import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  data:any;
  public productList : any ;
  public filterCategory : any;
  searchtext:any;

  constructor(private _commonservice:CommonserviceService){}
  ngOnInit(){
    this._commonservice.searchsubject.subscribe(res=>{
      this.searchtext = res;
    });

    this._commonservice.getproducts()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
       
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
      
      });
      
    });

    
  }

  addtocart(item: any){
    this._commonservice.addtoCart(item);
  }

  filteritem(category:string){
  
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
        
      }
    })
  }

}
