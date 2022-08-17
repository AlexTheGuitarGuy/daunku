import { FC } from 'react'

type Species = 'camille-plant' | 'peace-lily' | 'snake-plant'

type ProductProps = {
	name: Species
}

const Product: FC<ProductProps> = ({ name }) => {
	const speciesMap = {
		'camille-plant': 'Cammile',
		'peace-lily': 'Peace Lily',
		'snake-plant': 'Snake Plant',
	}

	return (
		<div className='bg-blue-200 rounded-t-[50px] h-full w-[330px] ml-16'>
			<img
				src={require(`../../../../assets/products/${name}.png`)}
				alt={name}
				className='-mt-36 mb-10'
			/>
			<div
				className='bg-white flex flex-col justify-between
			  p-10 rounded-t-[50px] h-3/4'
			>
				<div className='text-3xl text-gray-900 font-semibold'>
					{speciesMap[name]}
					<div className='flex mt-2'>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
						<span className='mr-1.5'>
							<img src={require('../../../../assets/common/rating-star.png')} alt='star' />
						</span>
					</div>
				</div>
				<div className='flex justify-between items-end'>
					<div className='text-3xl text-gray-900 my-auto'>$65.00</div>
					<img src={require('../../../../assets/common/add-to-cart-icon.png')} alt='add to cart' />
				</div>
			</div>
		</div>
	)
}

export default Product
