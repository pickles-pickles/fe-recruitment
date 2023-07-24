import { AppState } from './sdk/character.model'

export interface stateInterface {
  counter: number
  toDos: any[]
}

export const initialState: stateInterface = {
  counter: 0,
  toDos: []
}
