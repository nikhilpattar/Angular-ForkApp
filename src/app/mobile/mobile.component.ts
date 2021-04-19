import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobiles: any;

  constructor() { }

  ngOnInit(): void {
    this.getMobiles();
  }

  getMobiles() {
    this.mobiles = [{
      bName: "One Plus 6T",
      bImage: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Mobiles\\oneplus6t.jpg",
      bPrice: 34600,
      bDescription: "Samsung S20",
    }, {
      bName: "Samsung S20",
      bImage: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Mobiles\\samsungs20.jpg",
      bPrice: 86700,
      bDescription: "Samsung S20",
    }]
  }

}
