import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cn from 'classnames'

import { addToCart, removeFromCart } from '../../../../redux/shopping-cart-reducer'
import { getCartItems } from '../../../../redux/shopping-cart-selector'

type Species = 'camille-plant' | 'peace-lily' | 'snake-plant'

type ProductProps = {
	name: Species
}

const Product: FC<ProductProps> = ({ name }) => {
	const cartItems = useSelector(getCartItems)
	const dispatch = useDispatch()

	const isItemAdded = cartItems.includes(name)

	const speciesMap = {
		'camille-plant': 'Cammile',
		'peace-lily': 'Peace Lily',
		'snake-plant': 'Snake Plant',
	}

	const handleCartAction = () => {
		if (isItemAdded) dispatch(removeFromCart(name))
		else dispatch(addToCart(name))
	}

	return (
		<div
			className='bg-blue-200 rounded-t-[50px] 
											md:h-auto 
											md:w-60 lg:w-auto 
											mx-auto lg:mx-0'
		>
			<img
				src={require(`../../../../assets/products/${name}.png`)}
				alt={name}
				className='lg:-mt-36 lg:mb-10 -mt-20 mb-6 lg:w-80 lg:h-80 '
			/>
			<div
				className='bg-white flex flex-col justify-between
			  p-10 rounded-t-[50px] lg:h-80 h-72'
			>
				<div className='xl:text-4xl lg:text-2xl text-xl text-gray-900 font-semibold lg:items-end items-center'>
					<div className='lg:h-12'>{speciesMap[name]}</div>
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
				<div className='flex flex-col lg:flex-row lg:justify-between lg:items-end items-center'>
					<div className='xl:text-3xl text-xl text-gray-900 my-auto font-semibold'>$65.00</div>
					<div
						className={cn(
							`rounded-full bg-gray-300 cursor-pointer 
							 active:opacity-40 
							transition-opacity transition-colors`,
							{
								'bg-gradient-to-r from-teal-400 to-blue-500 hover:opacity-70': !isItemAdded,
							},
							{
								'hover:bg-red-500': isItemAdded,
							},
						)}
						onClick={handleCartAction}
					>
						<img
							src={require('../../../../assets/common/plus.png')}
							alt='add to cart'
							className={cn(
								`w-14 h-14 
									lg:w-10 lg:h-10
									xl:w-14 xl:h-14
								transition-transform`,
								{
									'rotate-45': isItemAdded,
								},
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Product
