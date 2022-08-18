import { FC, ReactNode } from 'react'

type InfoSectionProps = {
	title: string
	children: ReactNode[]
}

const InfoSection: FC<InfoSectionProps> = ({ title, children }) => {
	return (
		<div className='lg:space-y-8 space-y-4'>
			<div className='font-bold xl:text-2xl lg:text-l'>{title}</div>
			<div className='lg:space-y-4 space-y-2 xl:text-m lg:text-sm'>{children}</div>
		</div>
	)
}

export default InfoSection
