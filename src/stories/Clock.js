import React from 'react'
import {Observable} from 'rxjs'
import { componentFromStream } from 'recompose'
import {format} from '../utils/formatTime'

const now = new Date().getTime()

const Clock = componentFromStream(props$ => {
  return Observable.interval(1000).map(i => {
    const time = format(new Date(now + i * 1000))
    const {hour, minute, second} = time
    return (<div>
      {hour + ':' + minute + ':' + second}
    </div>)
  })
})

export default Clock
