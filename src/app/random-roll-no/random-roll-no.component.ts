import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-roll-no',
  templateUrl: './random-roll-no.component.html',
  styleUrls: ['./random-roll-no.component.css']
})
export class RandomRollNoComponent implements OnInit {

  randomRollNo: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  generateRandomRollNo = () => {
    this.randomRollNo = Math.ceil(Math.random() * 69);
  }

}
