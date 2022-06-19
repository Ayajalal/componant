import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
@Input() data='';
  constructor() { }

  ngOnInit(): void {
  }
recieveddata(data:string){
  this.data=data;
}
}
