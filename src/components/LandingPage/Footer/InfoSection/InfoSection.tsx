import { FC } from 'react'
import { NavLink } from 'react-router-dom'

type InfoSectionProps = {
	title: string
	links: string[]
}

const InfoSection: FC<InfoSectionProps> = ({ title, links }) => {
	const linkNodes = links.map((link: string) => {
		return (
			<li className='hover:underline' key={link}>
				<NavLink to='/'>{link}</NavLink>
			</li>
		)
	})

	return (
		<ul className='lg:space-y-8 space-y-4'>
			<li>
				<h4 className='font-bold xl:text-2xl lg:text-l'>{title}</h4>
			</li>
			<li>
				<ul className='lg:space-y-4 space-y-2 xl:text-m lg:text-sm'>{linkNodes}</ul>
			</li>
		</ul>
	)
}

export default InfoSection
