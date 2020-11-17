import { Component, OnInit } from '@angular/core';
import { Food } from '../Food'

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  foods: Food[];
  totalPrice: number = 0;
  constructor() { }
  removeItem(foodcheck: Food) {

    let indexNo = this.foods.findIndex(function (food) {
      if (food.foodNo == foodcheck.foodNo && food.category == foodcheck.category)

        return true;

    })

    this.foods.splice(indexNo, 1);
    sessionStorage.setItem('totalFood',JSON.stringify(this.foods));
   let totalorderno=parseInt(sessionStorage.getItem('totalorderno'))-1;
    sessionStorage.setItem('totalorderno',totalorderno.toString());
    this.totalPrice=0;
    for (let food of this.foods) {
      this.totalPrice = this.totalPrice + food.price;
                                  }

  }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('totalFood'));
    console.log(typeof sessionStorage.getItem('totalFood'));
    this.foods = JSON.parse(sessionStorage.getItem('totalFood'));
    console.log(typeof this.foods);
    for (let food of this.foods) {
      this.totalPrice = this.totalPrice + food.price;
    }

  }

}
