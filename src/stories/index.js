import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import Clock from './Clock'
import Countdown from './Countdown'
import Toast from './Toast'

// rxjs
import {setObservableConfig} from 'recompose'
import config from 'recompose/rxjsObservableConfig'

// styles
import '../css/styles.css'

setObservableConfig(config)
//

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)

storiesOf('Clock', module).add('clock', () => <Clock />)

storiesOf('Countdown', module).add('countdown', () => <Countdown speed={500} time={10} isTime={false} until={0} />)

storiesOf('Disappear', module).add('disappear', () => <Toast time={2000} message='I will disappear' />)

storiesOf('Toast', module).add('toast', () => <Toast time={2000} message='toast' className='toast' />)
