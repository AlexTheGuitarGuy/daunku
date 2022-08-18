import { getIsMobile } from '../../../../redux/app-selector'
import { useSelector } from 'react-redux'

const Background = () => {
	const isMobile = useSelector(getIsMobile)

	return (
		<>
			<img
				src={require(`../../../../assets/start-page/home-page-bg${
					(isMobile && '-mobile') || ''
				}.png`)}
				alt='background'
				className='
					absolute
					top-0
					w-full h-screen
					z-10'
			/>
			<div
				className='
					absolute 
					h-48
					w-full 
					-bottom-1
					bg-gradient-to-b from-transparent to-white
					z-20'
			></div>
		</>
	)
}

export default Background
