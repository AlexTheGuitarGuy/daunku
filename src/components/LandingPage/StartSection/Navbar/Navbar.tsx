import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import { getNavItems } from '../../../../redux/navbar-selector'
import { NavItem } from '../../../../types/types.d'

const Navbar = () => {
	const navItems = useSelector(getNavItems)

	const location = useLocation()

	const navElements = navItems.map((element: NavItem) => {
		let isActive = false
		if (location.pathname.match(element.to)) isActive = true
		return (
			<div
				key={element.id}
				className={cn(
					`
			            transition-colors
			            text-2xl 
			            bg-clip-text
			            fill-transparent
			            `,
					{
						'font-bold text-transparent bg-gradient-to-r from-teal-400 to-blue-500': isActive,
					},
					{
						'hover:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500':
							!isActive,
					},
				)}
			>
				<NavLink to={element.to} className='mx-3 px-3 py-2'>
					{element.text}
				</NavLink>
			</div>
		)
	})

	return (
		<nav
			className='flex flex-row
			           justify-center align-center
			           my-auto'
		>
			{navElements}
		</nav>
	)
}

export default Navbar
