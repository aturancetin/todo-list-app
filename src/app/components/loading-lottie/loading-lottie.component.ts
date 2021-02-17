import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-loading-lottie',
  template: `
  <ng-lottie [styles]="styles" width="100%" [options]="options" (animationCreated)="animationCreated($event)"></ng-lottie>
`,
  styleUrls: ['./loading-lottie.component.scss']
})
export class LoadingLottieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: '/assets/lotties/loading.json',
  }
  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '30em',
    minWidth: '10em',
    margin: '0 auto',
  };

  animationCreated(animationItem: AnimationItem): void {
    
  }


}
