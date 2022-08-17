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
		<div className='bg-black rounded-[52px] flex justify-center items-center cursor-pointer'>
			<div
				className='font-semibold text-6xl text-white 
											absolute z-10 pointer-events-none'
			>
				{imageMap[image]}
			</div>

			<img
				src={require(`../../../../assets/reference/${image}.png`)}
				alt='living-room'
				className='hover:opacity-70 transition-opacity z-20 hover:z-0'
			/>
		</div>
	)
}

export default ExampleImage
