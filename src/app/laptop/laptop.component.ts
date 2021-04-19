import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  laptops: any;

  constructor() { }

  ngOnInit(): void {
    this.getLaptops();
  }

  getLaptops(){
    this.laptops = [{
      lName: "Acer",
      lImage: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Laptops\\acer.jpg",
      lPrice: 55000,
      lDescription: "Acer",
    }, {
      lName: "HP",
      lImage: "F:\\Reloaded\\Jigsaw\\ForkApp_Resources\\Books\\hp.jpg",
      lPrice: 66700,
      lDescription: "HP",
    }];
  }

}
