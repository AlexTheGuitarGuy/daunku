import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import ShoppingButton from './ShoppingButton/ShoppingButton'
import Background from './Background/Background'
import SearchBar from './SearchBar/SearchBar'
import SelectCircle from './SelectCircle/SelectCircle'

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
				<SearchBar />
			</div>
		</div>
	)
}

export default StartScreen
