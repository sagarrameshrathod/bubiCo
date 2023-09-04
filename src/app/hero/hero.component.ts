import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.less']
})
export class HeroComponent {
      cols:Array<number>=[1,2,3,4,5,6]
      rows:Array<number>=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
}
