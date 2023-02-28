import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { changeNameAction, initAction } from './reducers/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  public changeName(): void {
    this.store.dispatch(changeNameAction({ name: "Dawudesign" }));
  }

  ngOnInit(): void {
    this.store.dispatch(initAction());
  }
}
