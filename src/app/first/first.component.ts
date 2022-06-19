import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
data='';
  constructor() { }

  ngOnInit(): void {
  }
  recieveddata(data:string){
console.log("emit from 1");
this.data=data;

  }

}
