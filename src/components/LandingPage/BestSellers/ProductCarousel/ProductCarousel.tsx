import { FC, ReactNode, useState } from 'react'

type ProductCarouselProps = {
	children: ReactNode[]
}

const ProductCarousel: FC<ProductCarouselProps> = ({ children }) => {
	const [page, setPage] = useState(0)

	const handlePrev = () => {
		if (page - 1 >= 0) setPage(page - 1)
		else setPage(children.length - 1)
	}

	const handleNext = () => {
		if (page + 1 <= children.length - 1) setPage(page + 1)
		else setPage(0)
	}

	return (
		<div className='flex flex-col mx-auto lg:mt-0 mt-28'>
			<div className='flex space-x-8 mx-8'>
				<button onClick={handlePrev}>
					<img
						src={require('../../../../assets/common/arrow.png')}
						alt='prev'
						className='rotate-180'
					/>
				</button>
				<div className='mx-auto'>{children[page]}</div>
				<button onClick={handleNext}>
					<img src={require('../../../../assets/common/arrow.png')} alt='next' />
				</button>
			</div>
			<div className='font-semibold mx-auto'>
				{page + 1}/{children.length}
			</div>
		</div>
	)
}

export default ProductCarousel
