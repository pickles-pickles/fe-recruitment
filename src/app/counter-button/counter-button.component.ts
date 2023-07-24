import { Component, OnInit } from '@angular/core'

import { Store } from '@ngrx/store'
import { stateInterface } from '../app.state'
import { decrement, increment } from '../app.actions'

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {
  constructor (private store: Store<{ app: stateInterface }>) {}

  ngOnInit (): void {}

  onIncrement () {
    this.store.dispatch(increment())
  }

  onDecrement () {
    this.store.dispatch(decrement())
  }
}
