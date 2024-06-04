import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '../../../interfaces/request-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';


@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="this.titleLabel()" />

    @if (user()) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
        <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>
        <h3>{{ user()!.email }}</h3>
      </section>

    } @else {
      <p class="h-[600] w-full bg-gradient-to-r from-green-200 to-green-400 animate-pulse">Cargando...</p>
    }

    `,
  styles: ``
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public user = toSignal(
    this.route.params.pipe(
    switchMap(({id}) => this.usersService.getUserById(id))
  ));

  public titleLabel = computed(() => {
    if (this.user()) {
      return 'Usuario: ' + this.user()!.first_name + ' ' + this.user()!.last_name;
    } else {
      return 'Usuario';
    }
  });
}
