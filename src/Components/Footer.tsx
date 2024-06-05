import React from 'react';
import { Mail, Phone, Flame } from 'lucide-react';

const Footer = () => {
	return (
		<footer className='mx-auto w-full max-w-screen-lg my-28 mb-4 px-4 md:px-12'>
			<div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 md:gap-x-6 grid-flow-row mb-16 '>
				<div className='col-span-full md:col-span-1'>
					<ul className='flex flex-col gap-y-2 justify-start items-start text-nowrap'>
						<li className='cursor-pointer'>
							<a href='/'>
								<img
									src='/logo.svg'
									className='w-16 md:w-20 my-0'
									alt=''
								/>
							</a>
						</li>
						<li className='flex gap-x-1 items-center justify-start cursor-pointer'>
							<Mail className='size-4 md:size-6' />
							<h3 className=' text-black text-xs md:text-sm font-medium'>
								Help@Frybix.com
							</h3>
						</li>
						<li className='flex gap-x-1 items-center justify-start cursor-pointer'>
							<Phone className='size-4 md:size-6' />
							<h3 className='text-black tabular-nums text-xs md:text-sm font-medium'>
								+12 34567 89000
							</h3>
						</li>
					</ul>
				</div>
				<div className='lg:ml-4'>
					<h2 className='text-lg md:text-3xl font-medium'>Links</h2>
					<ul className='flex flex-col gap-y-4 items-start justify-start mt-2'>
						{['Home', 'About Us', 'Bookings', 'Blog'].map(link => (
							<li
								key={link}
								className='text-xs md:text-sm font-medium capitalize'>
								{link}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='text-lg md:text-3xl font-medium'>Legal</h2>
					<ul className='flex flex-col gap-y-4 items-start justify-start mt-2'>
						{['terms of use', 'privacy policy', 'cookie policy'].map(link => (
							<li
								key={link}
								className='text-xs md:text-sm font-medium capitalize'>
								{link}
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className='text-lg md:text-3xl font-medium'>Product</h2>
					<ul className='flex flex-col gap-y-4 items-start justify-start mt-2'>
						{['take tour', 'live chat', 'reviews'].map(link => (
							<li
								key={link}
								className='text-xs md:text-sm font-medium capitalize'>
								{link}
							</li>
						))}
					</ul>
				</div>
				<div className='text-nowrap col-span-full lg:col-span-2'>
					<h2 className='text-lg md:text-3xl font-medium'>Newsletter</h2>
					<p className='mt-4 text-xs md:text-sm font-medium capitalize'>
						Stay up to date
					</p>
					<input
						className='p-2 md:px-3 md:py-4 rounded-l-md mt-4 text-xs md:text-sm'
						type='email'
						placeholder='Your email'
					/>
					<button
						type='submit'
						className='p-2 md:px-8 md:py-4 text-xs md:text-sm bg-black text-white rounded-md hover:bg-black/80 tracking-wide'>
						Subscribe
					</button>
				</div>
			</div>
			<p className='mt-4 pt-4 text-xs md:text-base text-center border-t  border-slate-300'>
				Copyright 2022 uifry.com all rights reserved
			</p>
		</footer>
	);
};

export default Footer;
