import CustomInput from '../../common/CustomInput/CustomInput'
import InfoSection from './InfoSection/InfoSection'

const Footer = () => {
	return (
		<section
			className='bg-gradient-to-r from-slate-500 to-slate-800 text-white 
						md:px-24 py-32'
		>
			<section
				className='flex flex-col lg:flex-row lg:items-end lg:justify-between 
							border-b border-white pb-20'
			>
				<div className='flex flex-col 2xl:w-1/5 lg:w-2/5 lg:mr-48 mb-6 lg:mb-0 mx-8 '>
					<h2 className='xl:text-5xl text-3xl text-center lg:text-start'>Newsletter</h2>
					<CustomInput placeholder='Enter your email' className='w-full  mt-10'>
						<button className='break-words lg:text-xl text-m xl:w-36 lg:w-28 md:w-24 w-20 lg:h-14 h-12 flex justify-center items-center'>
							Subscribe
						</button>
					</CustomInput>
				</div>

				<section className='lg:w-4/5'>
					<ul
						className='flex lg:flex-row flex-col lg:justify-between
									text-center lg:text-start
									space-y-8 lg:space-y-0'
					>
						<li>
							<InfoSection title='Support' links={['About Us', 'Careers', 'Blog']} />
						</li>
						<li>
							<InfoSection
								title='Useful Links'
								links={['Payment & Tax', 'Terms of service', 'Privacy Policy']}
							/>
						</li>
						<li>
							<InfoSection title='Our Menu' links={['Best Product', 'Category']} />
						</li>
						<li>
							<InfoSection
								title='Address'
								links={[
									'JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia',
									'hallo@daunku.com',
								]}
							/>
						</li>
					</ul>
				</section>
			</section>
			<section className='xl:text-2xl lg:text-l text-center lg:mt-28 mt-16'>
				© 2022 Daunku - All rights reserved.
			</section>
		</section>
	)
}

export default Footer
