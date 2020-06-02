import { createGlobalStyle } from 'styled-components'
import { GlobalFonts } from './fonts.js'

export const GlobalStyle = createGlobalStyle`
	${GlobalFonts}

	body {	
		font-family: 'PT Sans';
		padding: 20px 0;
	}

`