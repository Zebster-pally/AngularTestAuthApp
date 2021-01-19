import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {

  time = new Date();
  timer: any;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
