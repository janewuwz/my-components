import React from 'react'
import {Observable} from 'rxjs'
import { componentFromStream } from 'recompose'

const Clock = componentFromStream(props$ => props$.switchMap(({message, time, className}) =>
Observable.of(null).delay(time).startWith(message).map(i => {
  return i && <div className={className}>{i}</div>
})
))
export default Clock
