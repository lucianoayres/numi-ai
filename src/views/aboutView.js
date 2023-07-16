import {
	MENU_BUTTON_CLASS,
	ABOUT_CONTAINER_CLASS,
	ABOUT_CLOSE_BUTTON_CLASS,
	GITHUB_BUTTON_CLASS,
	GITHUB_LINK,
} from '../constants/index.js'

const menuButton = document.querySelector(MENU_BUTTON_CLASS)
const aboutContainer = document.querySelector(ABOUT_CONTAINER_CLASS)
const aboutCloseButton = document.querySelector(ABOUT_CLOSE_BUTTON_CLASS)
const gitHubButton = document.querySelector(GITHUB_BUTTON_CLASS)

function handleGitHubButton() {
	window.open(GITHUB_LINK)
}

function handleMenuButtonClick() {
	aboutContainer.style.display = 'block'
}

function handleAboutCloseButtonClick(e) {
	aboutContainer.style.display = 'none'
}

export function aboutView() {
	menuButton.addEventListener('click', handleMenuButtonClick)
	aboutCloseButton.addEventListener('click', handleAboutCloseButtonClick)
	gitHubButton.addEventListener('click', handleGitHubButton)
}
