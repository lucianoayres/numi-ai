// Model path for classifier
export const MODEL_PATH = './data/model.json'

// Project GitHub link
export const GITHUB_BUTTON_CLASS = '.about-container__github-button'
export const GITHUB_LINK = 'https://github.com/lucianoayres'

// Set up drawing style constants
export const STROKE_STYLE = '#FFFFFF'
export const LINE_CAP_STYLE = 'round'
export const LINE_WIDTH = 44 //64

// Probability text grade threshold
export const PROBABILITY_THRESHOLD_HIGH = 0.7
export const PROBABILITY_THRESHOLD_MEDIUM = 0.5

export const PROBABILITY_THRESHOLD = {
	HIGH: {
		label: 'high',
		value: 0.6,
	},
	MEDIUM: {
		label: 'medium',
		value: 0.4,
	},
	LOW: {
		label: 'low',
		value: 0.3,
	},
}

// Set up exported image offset

export const EXPORTED_IMAGE_PADDING = 100

// Set up instruction text constants
export const INSTRUCTIONS_TEXT =
	'Draw a number from 0 to 9 and ask NUMI to predict it...'
export const INSTRUCTIONS_TEXT_CLASS = '.content__instruction-text'
export const INSTRUCTIONS_HIDDEN_TEXT_CLASS =
	'.content__instruction-text--hidden'

// Set up font style for drawing canvas
export const CANVAS_FONT_STYLE = '20px Arial'
export const CANVAS_FONT_COLOR = 'white'
export const CANVAS_X_POSITION = 40
export const CANVAS_Y_POSITION = 80

// HTML Elements Classes
export const DRAWING_AREA_CLASS = '.content__drawing-area'
export const CLEAR_CANVAS_BUTTON_CLASS = '.bottom-bar__clear-button'
export const PREDICTION_RESULT_TEXT_CLASS = '.result-drawer__prediction-text'
export const PREDICTION_PROBABILITY_TEXT_CLASS =
	'.result-drawer__probability-text'
export const PREDICTION_PROBABILITY_HIDDEN_TEXT_CLASS =
	'.result-drawer__probability-text--hidden'
export const PREDICTION_PROBABILITY_PERCENTAGE_TEXT_CLASS =
	'.result-drawer__probability-percentage'

export const PREDICT_BUTTON_CLASS = '.bottom-bar__predict-button'
export const RESULT_CONTAINER_CLASS = '.result-drawer'
export const PREDICTION_ICON_CLASS = '.prediction-icon'
export const PREDICTION_ICON_ANIMATION_CLASS = '.prediction-icon__animation'

export const MENU_BUTTON_CLASS = '.top-bar__menu-button'
export const ABOUT_CONTAINER_CLASS = '.about-container'
export const ABOUT_CLOSE_BUTTON_CLASS = '.about-container__close-button'

// Default Messages
export const DEFAULT_INSTRUCTIONS_TEXT = 'Ipsum lorem et al.'
export const DEFAULT_MESSAGE_PREDICTION_TEXT =
	'The canvas is empty! Draw something and try again.'
export const DEFAULT_LOADING_PREDICTION_TEXT = 'Processing...'

export const RESULT_PHRASES = [
	'Hooray! The number is [LABEL]!',
	"Wowza! We've got [LABEL]!",
	'Drumroll, please! The chosen number is [LABEL]!',
	"Hold your breath... it's [LABEL]!",
	"Incredible! We've got ourselves a [LABEL]!",
	'Behold! The magic number is [LABEL]!',
	"Guess what? It's none other than [LABEL]!",
	'Ta-da! Feast your eyes on [LABEL]!',
	"Eureka! We've uncovered [LABEL]!",
	'Unbelievable! The number [LABEL] has been revealed!',
	"Bingo! It's [LABEL]!",
	'Abracadabra! Watch out for [LABEL]!',
	"No way! We've got [LABEL]!",
	"Hold onto your hats, it's [LABEL]!",
	"By George, it's [LABEL]!",
	'Look what we found... [LABEL]!',
	"You won't believe it, but it's [LABEL]!",
	"Prepare to be amazed... it's [LABEL]!",
	'Voilà! Behold [LABEL]!',
	"Can you believe your luck? It's [LABEL]!",
	'Drumroll, please... [LABEL]!',
	"It's like magic, [LABEL] has appeared!",
	'Get ready for a surprise... [LABEL]!',
	"Hold onto your socks, it's [LABEL]!",
	'Well, well, well... [LABEL] it is!',
	"You guessed it right, it's [LABEL]!",
	'Brace yourself... [LABEL]!',
	"Check this out, it's [LABEL]!",
	"Who would've thought? It's [LABEL]!",
	"Stop the presses, it's [LABEL]!",
	"We've hit the jackpot with [LABEL]!",
	"Guess what? It's a smashing [LABEL]!",
	"We're in luck, it's [LABEL]!",
	"Hold your horses, it's [LABEL]!",
	"Incredible! We've got [LABEL] in our hands!",
	"Goodness gracious, it's [LABEL]!",
	"Hip hip hooray, it's [LABEL]!",
	'Ladies and gentlemen, presenting [LABEL]!',
	'A round of applause for [LABEL]!',
	"It's official, it's [LABEL]!",
	"Fantastic news, it's [LABEL]!",
	"Oh yeah, it's [LABEL]!",
	'Check it out: [LABEL]!',
	'Whoa! We hit [LABEL]!',
	"No kidding, it's [LABEL]!",
	'Boom! [LABEL] is here!',
	"Look here, it's [LABEL]!",
	"We struck gold, it's [LABEL]!",
	"Oh my, it's [LABEL]!",
	"Jump for joy, it's [LABEL]!",
	"Lucky us, it's [LABEL]!",
	"We've got the prize: [LABEL]!",
	"Oh snap, it's [LABEL]!",
	"Step aside, it's [LABEL]!",
	'Oh baby, [LABEL] is here!',
	"Incredible news, it's [LABEL]!",
	'Yahoo! [LABEL] is the one!',
	"Hey hey! We've got [LABEL]!",
	"Woo-hoo! It's [LABEL]!",
	"Giddy up, it's [LABEL]!",
	"Hold the phone, it's [LABEL]!",
	"Oh yeah, baby! It's [LABEL]!",
]
