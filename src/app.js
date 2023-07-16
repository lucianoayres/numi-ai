import { INSTRUCTIONS_TEXT } from './constants/index.js'

import { setInstructionsText } from './utils/index.js'

import { resultView, aboutView } from './views/index.js'

function init() {
	setInstructionsText(INSTRUCTIONS_TEXT)

	resultView()
	aboutView()
}

init()
