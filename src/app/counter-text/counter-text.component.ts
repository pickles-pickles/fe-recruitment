import { Component, OnInit } from '@angular/core'
import { AppState } from '../sdk/character.model'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { stateInterface } from '../app.state'

@Component({
  selector: 'app-counter-text',
  templateUrl: './counter-text.component.html',
  styleUrls: ['./counter-text.component.scss']
})
export class CounterTextComponent implements OnInit {
  constructor (private store: Store<stateInterface>) {}

  counterValue$!: Observable<number>

  ngOnInit (): void {
    this.counterValue$ = this.store.pipe(select(state => state.counter))
    console.log('counter is', this.counterValue$)
  }
}
