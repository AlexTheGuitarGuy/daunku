import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import ShoppingButton from './ShoppingButton/ShoppingButton'
import Background from './Background/Background'
import SelectCircle from './SelectCircle/SelectCircle'
import CustomInput from '../../common/CustomInput/CustomInput'

const StartScreen = () => {
	return (
		<div className='w-full h-screen relative text-white'>
			<Background />
			<div className='absolute bottom-[450px] right-[175px] z-40'>
				<SelectCircle price={'$65.00'} name='Dracena Fragnas' />
			</div>
			<div className='absolute bottom-[800px] left-40 z-40'>
				<SelectCircle />
			</div>
			<div className='absolute bottom-[550px] left-64 z-40'>
				<SelectCircle />
			</div>
			<div className='relative z-30 w-full'>
				<header className='pt-10 grid grid-cols-3'>
					<Logo />
					<Navbar />
					<ShoppingButton />
				</header>
				<div
					className='mx-auto text-center 
						font-bold text-8xl
						mt-16 w-2/3'
				>
					Bring Serenity to Your Place With Interior Plants
				</div>
				<div
					className='mx-auto text-center
						text-2xl leading-8
						mt-10 w-1/4'
				>
					find your dream plant for you home decoration with us, and we will make it happen.
				</div>

				<CustomInput placeholder='Search plant' className='mx-auto w-1/5 mt-10 '>
					<div className='w-14 h-14 flex justify-center items-center'>
						<img
							src={require('../../../assets/common/search-icon.png')}
							alt='search'
							className='w-7 h-7'
						/>
					</div>
				</CustomInput>
			</div>
		</div>
	)
}

export default StartScreen
