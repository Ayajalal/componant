import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
data='';
@Output() dataOutput=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  recievedData(data:string){
    console.log('emitted from three');
this.dataOutput.emit(data);
  }

}
