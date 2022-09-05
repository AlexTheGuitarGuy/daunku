import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getIsMobile } from '../../../../redux/app-selector'

const Logo = () => {
	const isMobile = useSelector(getIsMobile)

	return (
		<span
			className='flex justify-center lg:justify-start 
						cursor-pointer lg:ml-10 -mt-3 lg:mt-0'
		>
			<img
				src={require('../../../../assets/start-page/logo.png')}
				alt='logo'
				className='lg:w-12 lg:h-12 w-16 h-16'
			/>

			{!isMobile && (
				<span
					className='font-bold 
									xl:text-4xl lg:text-2xl
									my-auto ml-2
									transition-colors
						            bg-clip-text
						            fill-transparent
						            font-inter
			
									hover:text-transparent 
									hover:bg-gradient-to-tr 
									hover:from-teal-400 hover:to-blue-500'
				>
					<NavLink to='/'>
						<h1>Daunku</h1>
					</NavLink>
				</span>
			)}
		</span>
	)
}

export default Logo
