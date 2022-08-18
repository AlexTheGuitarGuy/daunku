import StartSection from './StartSection/StartSection'
import BestSellers from './BestSellers/BestSellers'
import Reference from './Reference/Reference'
import Footer from './Footer/Footer'

const LandingPage = () => {
	return (
		<div className='relative w-full'>
			<StartSection />
			<BestSellers />
			{/*			<Reference />
			<Footer />*/}
		</div>
	)
}

export default LandingPage
