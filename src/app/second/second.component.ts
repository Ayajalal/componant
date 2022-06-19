import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
@Input() data='';
  constructor() { }

  ngOnInit(): void {
  }
dataRecieved(data:string ){
  console.log('emit from 2');
  this.data=data;
}
}
