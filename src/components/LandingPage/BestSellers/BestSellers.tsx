import Service from './Service/Service'
import Product from './Product/Product'

const BestSellers = () => {
	return (
		<div
			className='w-full h-screen relative 
						flex flex-col justify-around lg:justify-between 2xl:justify-around
						lg:space-y-20 2xl:space-y-0'
		>
			<div
				className='lg:grid lg:grid-cols-3  lg:w-full
							space-y-8 lg:space-y-0
							mx-auto
							pt-16 2xl:pt-0 lg:pt-28 2xl:pt-60'
			>
				<Service icon='shipping' />
				<Service icon='payment' />
				<Service icon='customer-support' />
			</div>
			<div className='flex lg:flex-row flex-col lg:mx-auto 2xl:mx-80 lg:mb-60 mt-10'>
				<div className='flex flex-col justify-center text-center lg:text-start'>
					<div className='text-3xl lg:text-4xl 2xl:text-7xl text-gray-900'>Best Seller Product</div>
					<div
						className='2xl:text-2xl text-xl text-gray-700 flex lg:mt-20 mt-8
									flex justify-center lg:justify-start'
					>
						See all collection
						<span className='my-auto lg:ml-6'>
							<img src={require('../../../assets/common/arrow.png')} alt='arrow' />
						</span>
					</div>
				</div>
				<div className='flex lg:mt-0 mt-20'>
					<Product name='camille-plant' />
					<Product name='peace-lily' />
					<Product name='snake-plant' />
				</div>
			</div>
		</div>
	)
}

export default BestSellers
