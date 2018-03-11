import React from 'react'
import {Observable} from 'rxjs'
import { componentFromStream } from 'recompose'
import {padTime} from '../utils/formatTime'

const Countdown = componentFromStream(props$ =>
  props$.switchMap(({speed, time, isTime}) =>
    Observable.interval(speed).map(i => {
      const left = time - i
      if (isTime) {
        const minute = padTime(Math.floor(left / 60))
        const second = padTime(time % 60)
        return <div>{minute + ':' + second}</div>
      }
      return <div>{left}</div>
    })
  ))

export default Countdown
