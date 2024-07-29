import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './HomeApp.Mastercomponent.html',
  styleUrl: './HomeApp.Mastercomponent.css'
})

export class Mastercomponent implements OnInit {
  title = 'PrimePurchase';
  changeColor: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      // Change the color after 5 seconds
      this.changeColor = true;
    }, 2000); 
  }
}
































