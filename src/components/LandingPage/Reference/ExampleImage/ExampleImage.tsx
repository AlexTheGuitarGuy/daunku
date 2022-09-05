import { FC } from 'react'

type Image = 'living-room' | 'working-area' | 'bedroom'

type ExampleImageProps = {
	image: Image
}

const ExampleImage: FC<ExampleImageProps> = ({ image }) => {
	const imageMap = {
		'living-room': 'living room',
		'working-area': 'working area',
		bedroom: 'bedroom',
	}

	return (
		<div
			className='bg-black lg:rounded-[52px] rounded-[30px] md:rounded-[47px] 
					flex justify-center items-center cursor-pointer object-cover w-fit mx-auto'
		>
			<h1
				className='font-semibold lg:text-6xl text-3xl text-white 
											absolute z-10 pointer-events-none'
			>
				{imageMap[image]}
			</h1>

			<img
				src={require(`../../../../assets/reference/${image}.png`)}
				alt='living-room'
				className='hover:opacity-70 transition-opacity z-20 hover:z-0 lg:h-max lg:w-[730px]'
			/>
		</div>
	)
}

export default ExampleImage
