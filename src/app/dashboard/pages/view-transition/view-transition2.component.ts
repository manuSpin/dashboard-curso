import { TitleComponent } from './../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2" />

    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300" alt="Picsum perrete" width="200" height="300" style="view-transition-name: hero1" />

      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: hero2"></div>
    </section>
    `,
  styles: ``
})
export default class ViewTransitionComponent {

}
