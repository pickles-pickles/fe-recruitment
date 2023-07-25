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
  constructor (private store: Store<{ app: stateInterface }>) {}

  counter!: number
  counter$!: Observable<{ counter: number }>

  ngOnInit (): void {
    this.store.select('app').subscribe(data => {
      this.counter = data.counter
    })

    this.counter$ = this.store.select('app')
    console.log('counter is', this.counter, 'counter$ is', this.counter$)
  }
}
