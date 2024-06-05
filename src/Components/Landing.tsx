'use client';

import React from 'react';

export function Landing() {
	return (
		<div className='relative w-full min-w-[320px] z-20 md:before:size-4 max-w-screen-lg mx-auto'>
			<div className='absolute -top-8 left-20 size-[20rem] blob'></div>
			<div className='relative mx-auto flex justify-between items-center w-full min-h-dvh '>
				<div className='px-4 py-4 md:mt-8 w-full max-w-prose md:w-fit flex flex-col gap-2 justify-between items-start z-20'>
					<h1 className=' text-3xl font-bold tracking-wide text-black md:text-4xl lg:text-[3.5rem] lg:leading-none flex-1'>
						Make The Best
						<br /> Financial Decisions
					</h1>
					<p className='mt-2 text-sm text-slate-700 max-w-[45ch] '>
						Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
						faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
					</p>
					<div className='mt-8 flex items-center justify-start space-x-5 z-20'>
						<button
							type='button'
							className='rounded-md bg-black p-3 text-sm font-semibold text-white shadow-sm  hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-nowrap'>
							Get Started &nbsp; &rarr;
						</button>
						<button className=' flex max-w-max items-center space-x-2 rounded-full p-1'>
							<div className='rounded-full bg-gray-100 p-1 px-2'>
								<p className='text-sm font-medium'>&rarr;</p>
							</div>
							<p className='text-sm font-medium'>Watch Video </p>
						</button>
					</div>
					<div className='hidden md:block lg:mt-6 size-2/3 '>
						<img src='hero-footer.svg'></img>
					</div>
					<div className='blob absolute top-10 -right-40 rotate-90 opacity-0 md:max-lg:opacity-100 transition-opacity duration-200 size-[30rem]'></div>
				</div>

				<div className='illustration before:top-4 before:left-[20%] before:mt-[-45%] relative hidden lg:block bg-red-500 h-full flex-1 justify-items-center z-20 -mt-32 mr-16'>
					<img
						className='z-30 absolute w-[500px] left-8 -top-[15rem] '
						src='mobile1.svg'
					/>
					<img
						className='z-20 absolute w-[500px] left-[8rem] -top-[12rem] '
						src='mobile2.svg'
					/>
					<img
						className='z-10 absolute w-[500px] left-[13rem] -top-[9rem]'
						src='mobile1.svg'
					/>
					<div className='blob absolute top-[4rem] right-[12rem] size-[25rem] '></div>
				</div>
			</div>
		</div>
	);
}
