import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  @ViewChild('dynamicHeading', { static: true }) dynamicHeading!: ElementRef;
  index = 0;
  words = ['Upgrade', 'Rise', 'Conquer', 'Develop'];
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  startInterval(): void {
    this.intervalId = setInterval(() => {
      this.changeWord();
    }, 3000);
  }

  changeWord(): void {
    this.dynamicHeading.nativeElement.textContent = this.words[this.index];
    this.index = (this.index + 1) % this.words.length;
  }

  clearInterval(): void {
    clearInterval(this.intervalId);
  }
}
