import { Component, EventEmitter, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-eightth',
  templateUrl: './eightth.component.html',
  styleUrls: ['./eightth.component.css']
})
export class EightthComponent implements OnInit {
@Output() dataOutput=new EventEmitter();
data="aya";
  constructor() { }

  ngOnInit(): void {
  }
onDataOutput(){
  this.dataOutput.emit(this.data);
  console.log("emitted from eight "+this.data);
}

}
