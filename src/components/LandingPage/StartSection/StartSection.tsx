import { useSelector } from 'react-redux'

import { getIsMobile } from '../../../redux/app-selector'
import CustomInput from '../../common/CustomInput/CustomInput'
import Background from './Background/Background'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import SelectCircle from './SelectCircle/SelectCircle'
import ShoppingButton from './ShoppingButton/ShoppingButton'

const StartScreen = () => {
	const isMobile = useSelector(getIsMobile)

	return (
		<div className='w-full h-screen relative text-white'>
			<Background />
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

			<div className='relative z-40 w-full xl:space-y-24 sm:space-y-24 lg:space-y-10'>
				<header className='pt-10 grid grid-cols-3'>
					<span className='order-2 lg:order-1'>
						<Logo />
					</span>
					<span className='order-1 lg:order-2'>
						<Navbar />
					</span>
					<span className='order-3 lg:order-3'>
						<ShoppingButton />
					</span>
				</header>
				<div
					className='mx-auto text-center 
						font-bold 
						xl:text-8xl
						lg:text-5xl
						text-3xl
						lg:w-2/3
						mx-10 lg:mx-auto
						leading-10'
				>
					Bring Serenity to Your Place With Interior Plants
				</div>
				<div
					className='lg:mx-auto text-center 
						text-xl xl:text-3xl
						mx-10
						lg:w-1/4
						leading-6'
				>
					find your dream plant for you home decoration with us, and we will make it happen.
				</div>

				<div>
					<CustomInput
						placeholder='Search plant'
						className='mx-auto 
								xl:w-1/5 lg:w-1/3
								w-2/3'
					>
						<div
							className='lg:w-14 lg:h-14
									w-12 h-12 
									flex justify-center items-center'
						>
							<img
								src={require('../../../assets/common/search-icon.png')}
								alt='search'
								className='lg:w-7 lg:h-7 w-6 h-6'
							/>
						</div>
					</CustomInput>
				</div>
			</div>
		</div>
	)
}

export default StartScreen
