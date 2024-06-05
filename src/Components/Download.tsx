'use client';

import React from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Star } from 'lucide-react';

export function Download() {
	return (
		<div className='w-full mt-28 md:px-12 px-4'>
			<div className='download relative mx-auto max-w-screen-lg rounded-lg md:px-8 md:pr-0 bg-black py-4  flex  md:justify-between md:items-center gap-x-2 overflow-hidden'>
				<div className='my-4 md:my-12 px-4 py-12 md:py-16 z-10 md:text-nowrap'>
					<h1 className='text-3xl font-bold capitalize text-white md:text-4xl lg:text-5xl'>
						ready to get started?
					</h1>
					<p className='mt-4 text-gray-200 capitalize'>
						Risus habitant leo egestas mauris diam eget morbi tempus
						<br /> vulputate.
					</p>
					<button
						type='button'
						className='flex items-center justify-center gap-x-2 mt-6 md:mt-3 rounded-md bg-white p-3 md:p-4 font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
						Download App{' '}
						<span>
							<img
								src='apple-icon.svg'
								className='size-6'
								alt=''
							/>
						</span>
					</button>
				</div>
				<div className='z-10 relative hidden md:block'>
					<img src='footer-mobile-stack.svg'></img>
					<div className='blob absolute size-[20rem] top-12 left-28 '></div>
				</div>
			</div>
		</div>
	);
}
