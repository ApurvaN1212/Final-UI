import { Component } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  cartproduct:any;
  public products : any = [];
  constructor(private _commonservice:CommonserviceService){
    
  }
  ngOnInit(){
    this._commonservice.getdata()
    .subscribe(res=>{
      this.products = res;
      
    })

  }

  removeItem(item: any){
    this._commonservice.removeCartItem(item);
  }
  emptycart(){
    this._commonservice.removeAllCart();
  }



}
