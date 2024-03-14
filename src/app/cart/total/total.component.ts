import { Component, OnInit  } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  total: number = 0.00;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getTotal().subscribe(total => {
      this.total = total;
      console.log(total)
    });
  }
}
