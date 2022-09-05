import { useSelector } from 'react-redux'

import { getIsMobile } from '../../../../redux/app-selector'
import SelectCircle from './SelectCircle/SelectCircle'

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
					w-full h-full
					z-0'
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
			{!isMobile && (
				<>
					<div
						className='absolute z-30
						lg:bottom-[250px]  lg:left-40
						xl:bottom-[400px]
						2xl:bottom-[550px] 2xl:left-64'
					>
						<SelectCircle />
					</div>
					<div
						className='absolute z-30 
					lg:bottom-[350px]  lg:left-20
					xl:bottom-[480px]
					2xl:bottom-[800px] 2xl:left-40'
					>
						<SelectCircle />
					</div>

					<div
						className='absolute z-30 
			2xl:bottom-[450px] 2xl:right-[175px]
			lg:bottom-[275px] lg:right-[80px]'
					>
						<SelectCircle price={'$65.00'} name='Dracena Fragnas' />
					</div>
				</>
			)}
		</>
	)
}

export default Background
