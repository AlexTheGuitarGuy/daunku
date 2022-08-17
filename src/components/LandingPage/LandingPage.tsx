import StartScreen from './StartScreen/StartScreen'
import BestSellers from './BestSellers/BestSellers'

const LandingPage = () => {
	return (
		<div className='relative w-full'>
			<StartScreen />
			<BestSellers />
		</div>
	)
}

export default LandingPage
