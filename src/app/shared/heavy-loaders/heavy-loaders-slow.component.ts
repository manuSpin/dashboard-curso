import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]">Heavy Loader Slow</section>`,
  styles: ``
})
export class HeavyLoadersSlowComponent {

  @Input({required: true }) public cssClass!: string;

  constructor() {
    const start = Date.now();

    while(Date.now() - start < 6000) {}
    console.log('Loaded');
  }

}
