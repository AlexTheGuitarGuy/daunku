import { FC } from 'react'

type Icon = 'shipping' | 'payment' | 'customer-support'

type ServiceMapItem = {
	text: string
	description: string
}

type ServiceProps = {
	icon: Icon
}

const Service: FC<ServiceProps> = ({ icon }) => {
	const serviceMap = {
		shipping: {
			text: 'Free Shipping',
			description: 'No charge for each delivery',
		} as ServiceMapItem,
		payment: {
			text: 'Quick Payment',
			description: '100% secure payment',
		} as ServiceMapItem,
		'customer-support': {
			text: '24/7 Support',
			description: 'Quick support',
		} as ServiceMapItem,
	}

	const { text, description } = serviceMap[icon]

	return (
		<div className='flex mx-auto'>
			<img
				src={require(`../../../../assets/service-icons/${icon}.png`)}
				alt={text}
				className='xl:w-max xl:h-max w-14 h-14 lg:my-auto'
			/>
			<div className='my-auto ml-8 w-full'>
				<h3 className='text-gray-900 xl:text-3xl text-xl'>{text}</h3>
				<h4 className='text-gray-600 xl:text-xl text-l mt-2'>{description}</h4>
			</div>
		</div>
	)
}

export default Service
