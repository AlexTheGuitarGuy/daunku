import { FC, ReactNode } from 'react'

type InfoSectionProps = {
	title: string
	children: ReactNode[]
}

const InfoSection: FC<InfoSectionProps> = ({ title, children }) => {
	return (
		<div className='lg:space-y-8 space-y-4'>
			<div className='font-bold text-2xl'>{title}</div>
			<div className='lg:space-y-4 space-y-2'>{children}</div>
		</div>
	)
}

export default InfoSection
