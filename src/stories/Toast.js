import React from 'react'
import {Observable} from 'rxjs'
import { componentFromStream } from 'recompose'

const Clock = ({show}) => <div>{show}</div>

export default Clock
