import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Grade } from '../../../interfaces/grade.type';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal<boolean>(false);
  public grade = signal<Grade>('A');
  public frameworks = signal<string[]>(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal<string[]>([]);

  public toggleContent(): void {
    this.showContent.update(value => !value);
  }

}
