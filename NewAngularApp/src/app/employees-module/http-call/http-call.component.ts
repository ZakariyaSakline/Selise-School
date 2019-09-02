import { Component, OnInit } from '@angular/core';
import {ShareDataService} from '../../share-data.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {

  constructor(
    private _shareDataService:ShareDataService
    ) { }

    // showConfig(){
    //   this._shareDataService.getConfig().subscribe(
    //     (data:Config)=>this.config={
    //       heroesUrl: data['heroesUrl'],
    //       textfile:  data['textfile']
    //     }
    //   )
    // }
  ngOnInit() {
  }

}
