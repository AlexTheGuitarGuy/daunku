import { FC, ReactNode } from 'react'

type InfoSectionProps = {
	title: string
	children: ReactNode[]
}

const InfoSection: FC<InfoSectionProps> = ({ title, children }) => {
	return (
		<div className='space-y-8'>
			<div className='font-bold text-2xl'>{title}</div>
			<div className='space-y-4'>{children}</div>
		</div>
	)
}

export default InfoSection
