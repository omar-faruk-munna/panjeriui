import { Component, OnInit } from '@angular/core';
import { ICardType } from '../models/card-type.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  card: ICardType = { writterName: 'হুমায়ুন আহমেদ', id: 1, name: 'বেসিক আলী ভৌতিক অভিযান', category: '', price: 100, quantity: 2, amount: 200, image: '' }
  totalItem: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  itemAdd() {
    this.totalItem = this.totalItem + 1;
  }
  itemMinus() {
    this.totalItem = this.totalItem - 1;
  }



}
