import { TitleComponent } from './../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 1" />

    <section class="flex justify-start">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum perrete" width="200" height="300" style="view-transition-name: hero1" />

      <div class="bg-blue-500 w-56 h-56" style="view-transition-name: hero2"></div>
    </section>
    `,
  styles: ``
})
export default class ViewTransitionComponent {

}
