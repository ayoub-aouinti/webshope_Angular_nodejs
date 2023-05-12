import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cols = 3;

  constructor() { /* TODO document why this constructor is empty */ }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
      
  }

  onColumnsCountChange(colsNum: number): void{
    this.cols = colsNum;
  }

  onShowCategory() {

  }

}
