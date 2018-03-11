import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import Clock from './Clock'
import Countdown from './Countdown'
// rxjs
import {setObservableConfig} from 'recompose'
import config from 'recompose/rxjsObservableConfig'

setObservableConfig(config)
//

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Clock', module).add('clock', () => <Clock />)

storiesOf('Countdown', module).add('countdown', () => <Countdown speed={1000} time={10 * 60} isTime={false} />)
