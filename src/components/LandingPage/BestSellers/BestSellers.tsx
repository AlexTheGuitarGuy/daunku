import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { getIsMobile } from '../../../redux/app-selector'
import Product from './Product/Product'
import ProductCarousel from './ProductCarousel/ProductCarousel'
import Service from './Service/Service'

const BestSellers = () => {
	const isMobile = useSelector(getIsMobile)

	const products = isMobile ? (
		<ProductCarousel>
			<Product name='camille-plant' />
			<Product name='peace-lily' />
			<Product name='snake-plant' />
		</ProductCarousel>
	) : (
		<div className='flex space-x-8'>
			<Product name='camille-plant' />
			<Product name='peace-lily' />
			<Product name='snake-plant' />
		</div>
	)

	return (
		<section
			className='w-full h-fit relative 
						flex flex-col justify-around lg:justify-between 2xl:justify-around
						lg:space-y-60'
		>
			<section
				className='lg:grid lg:grid-cols-3  lg:w-full
							space-y-8 lg:space-y-0
							mx-auto
							mt-16 2xl:pt-0 lg:pt-28'
			>
				<Service icon='shipping' />
				<Service icon='payment' />
				<Service icon='customer-support' />
			</section>
			<section className='flex lg:flex-row flex-col justify-around mt-28 w-full'>
				<header className='flex flex-col justify-center text-center lg:text-start'>
					<h2 className='text-3xl lg:text-4xl 2xl:text-7xl text-gray-900 '>Best Seller Product</h2>

					<NavLink to='/'>
						<div
							className='2xl:text-2xl text-xl text-gray-700 flex lg:mt-20 mt-8
									flex justify-center lg:justify-start hover:underline cursor-pointer'
						>
							See all collection
							<span className='my-auto lg:ml-6'>
								<img src={require('../../../assets/common/arrow.png')} alt='arrow' />
							</span>
						</div>
					</NavLink>
				</header>
				{products}
			</section>
		</section>
	)
}

export default BestSellers
