declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
		__store__: any
	}
}

export type NavItem = {
	id: number
	to: string
	text: string
}
