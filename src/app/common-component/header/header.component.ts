import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalcartItem : number = 0;
  searchtext:any;
  

  constructor(private _commonservice:CommonserviceService){

  }
  ngDoCheck(){
   this._commonservice.searchsubject.next(this.searchtext);
  }
  ngOnInit(){
    this._commonservice.getdata().subscribe(res=>{
      this.totalcartItem = res.length;
    })
  }

  

}
