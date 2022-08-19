import BestSellers from './BestSellers/BestSellers'
import Footer from './Footer/Footer'
import StartSection from './StartSection/StartSection'
import Reference from './Reference/Reference'

const LandingPage = () => {
	return (
		<div className='relative w-full'>
			<StartSection />
			<BestSellers />
			<Reference />
			<Footer />
		</div>
	)
}

export default LandingPage
