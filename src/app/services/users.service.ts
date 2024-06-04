import { computed, inject, Injectable, signal } from '@angular/core';
import { State } from '../interfaces/state.interface';
import { HttpClient } from '@angular/common/http';
import { User, UserResponse, UsersResponse } from '../interfaces/request-response';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  private baseUrl = 'https://reqres.in';

  #state = signal<State>({
    loading: true,
    users: []
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.getUsers();
  }



  public getUserById(id: string): Observable<User> {
    return this.http.get<UserResponse>(this.baseUrl + '/api/users/' + id).pipe(
      delay(1500),
      map(response => response.data)
    );
  }

  public getUsers() {
    this.http.get<UsersResponse>(this.baseUrl + '/api/users').pipe(delay(1500)).subscribe(response => {
      this.#state.set({
        loading: false,
        users: response.data
      })
    });
  }
}
