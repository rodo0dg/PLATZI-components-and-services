import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input()
  img: string = '';

  @Output()
  loaded = new EventEmitter<string>();

  imageDefault = './assets/images/default.png';
  counter = 0;
  counterFn: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    // this.counterFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000)
  }

  ngOnDestroy() {
    // delete -- once time
    console.log('ngOnDestroy');
    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    this.loaded.emit(this.img);
  }

}
