import { FC } from 'react'

type Icon = 'shipping' | 'payment' | 'customer-support'

type ServiceProps = {
	icon: Icon
	text: string
	description: string
}

const Service: FC<ServiceProps> = ({ icon, text, description }) => {
	return (
		<div className='flex mx-auto'>
			<img src={require(`../../../../assets/service-icons/${icon}.png`)} alt={text} />
			<div className='my-auto ml-8 w-full'>
				<div className='text-gray-900 text-3xl'>{text}</div>
				<div className='text-gray-600 text-xl mt-2'>{description}</div>
			</div>
		</div>
	)
}

export default Service
