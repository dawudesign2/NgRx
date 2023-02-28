import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { changeNameAction, initAction } from './reducers/action';
import { State } from './common/interface';
import { Observable } from 'rxjs';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<State>) {}

  public users: Observable<User> = {} as Observable<User>;

  public changeName(): void {
    this.store.dispatch(changeNameAction({ name: "Dawudesign" }));
  }

  ngOnInit(): void {
    this.store.dispatch(initAction());
    //this.users = this.store.select((state: any) => state.root.users);
    this.users = this.store.pipe(select((state: State) => state.root.users));
  }
}
