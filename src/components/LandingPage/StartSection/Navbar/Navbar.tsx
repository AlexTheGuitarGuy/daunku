import { useState, RefObject } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { NavLink } from 'react-router-dom'

import cn from 'classnames'

import useTagBlur from '../../../../hooks/useTagBlur'
import { getIsMobile } from '../../../../redux/app-selector'
import { getNavItems } from '../../../../redux/navbar-selector'
import { NavItem } from '../../../../types/types.d'

const Navbar = () => {
	const [shouldShowMenu, setShouldShowMenu] = useState(false)

	const navItems = useSelector(getNavItems)
	const isMobile = useSelector(getIsMobile)

	const menuRef = useTagBlur(shouldShowMenu, setShouldShowMenu)

	const location = useLocation()

	const navElements = navItems.map((element: NavItem) => {
		let isActive = false
		if (location.pathname.match(element.to)) isActive = true
		return (
			<NavLink key={element.id} to={element.to}>
				<li
					className={cn(
						`
			            transition-colors
			            xl:text-2xl
			            sm:text-2xl
			            lg:text-l 
			            lg:bg-clip-text
			            lg:fill-transparent
			            text-center
			            mt-2
			            `,
						{
							'font-bold lg:text-transparent bg-gradient-to-r from-teal-400 to-blue-500': isActive,
						},
						{
							'hover:lg:text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500':
								!isActive,
						},
					)}
				>
					<h2>{element.text}</h2>
				</li>
			</NavLink>
		)
	})

	if (isMobile)
		return (
			<div>
				<button
					onClick={() => setShouldShowMenu(!shouldShowMenu)}
					className={cn(
						`rounded-tr-xl p-2 -mt-[14px] bg-white 
						bg-opacity-20 backdrop-blur-sm transition-opacity`,
						{ 'bg-opacity-0': !shouldShowMenu },
						{ 'bg-opacity-20': shouldShowMenu },
					)}
				>
					<img
						src={require('../../../../assets/start-page/menu-icon.png')}
						alt='menu'
						className='w-10 h-10'
					/>
				</button>

				<nav>
					<ul
						className={cn(
							`fixed left-0 top-20
		                	flex flex-col justify-center
			                w-full
			                p-8
			                border-b
			                bg-white bg-opacity-20 backdrop-blur-sm  border-white
			                rounded-b-xl
			                font-semibold
			                transition-opacity`,
							{ 'opacity-0 pointer-events-none': !shouldShowMenu },
							{ 'opacity-100': shouldShowMenu },
						)}
						ref={menuRef as RefObject<HTMLUListElement>}
					>
						{navElements}
					</ul>
				</nav>
			</div>
		)

	return (
		<nav>
			<ul
				className='flex flex-row
			           justify-center align-center
			           my-auto lg:space-x-8'
			>
				{navElements}
			</ul>
		</nav>
	)
}

export default Navbar
