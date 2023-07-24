import { createReducer, on } from '@ngrx/store'
import { initialState, stateInterface } from './app.state'
import { increment, decrement } from './app.actions'

export const appReducer = createReducer(
  initialState,
  on(increment, (state: stateInterface) => {
    return { ...state, counter: state.counter + 1 }
  }),
  on(decrement, (state: stateInterface) => {
    return { ...state, counter: state.counter - 1 }
  })
)
