import StartSection from './StartSection/StartSection'
import BestSellers from './BestSellers/BestSellers'
import Reference from './Reference/Reference'

const LandingPage = () => {
	return (
		<div className='relative w-full'>
			<StartSection />
			<BestSellers />
			<Reference />
		</div>
	)
}

export default LandingPage
