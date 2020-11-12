import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core'

import theme from 'lib/theme'

import './index.css'
import reportWebVitals from './reportWebVitals'
import AppRouter from './routes'

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<AppRouter />
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
