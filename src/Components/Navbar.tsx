'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { menuItems } from '@/app/constants';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTab, setActiveTab] = useState('Home');

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='relative w-full'>
			<div className=' w-full min-w-[320px] max-w-screen-lg mx-auto'>
				<div className='px-4 py-2 md:px-12 flex justify-between items-center max-w-screen-xl mx-auto'>
					<a
						href='/'
						className='w-max'>
						<img
							src='/logo.svg'
							className='object-cover size-4/5 md:w-[120px]'
						/>
					</a>
					<div className='hidden grow items-start lg:flex'>
						<ul className='ml-12 inline-flex space-x-8'>
							{menuItems.map(item => (
								<li key={item.name}>
									<a
										href={item.href}
										onClick={() => setActiveTab(item.name)}
										className={` text-sm font-semibold ${
											activeTab === item.name
												? 'text-orange-600'
												: ' text-gray-800'
										} hover:text-orange-600 `}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className='hidden lg:block'>
						<button
							type='button'
							className='rounded-md bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
							Download
						</button>
					</div>
					<div className='lg:hidden'>
						<Menu
							onClick={toggleMenu}
							className='size-7 cursor-pointer stroke-black'
						/>
					</div>
					{isMenuOpen && (
						<div className='absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden'>
							<div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
								<div className='px-5 pb-6 pt-5'>
									<div className='flex items-center justify-between'>
										<a href='/'>
											<img
												src='/logo.svg'
												className='object-cover size-4/5'
											/>
										</a>
										<div className='-mr-2'>
											<button
												type='button'
												onClick={toggleMenu}
												className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
												<span className='sr-only'>Close menu</span>
												<X
													className='size-7 stroke-black'
													aria-hidden='true'
												/>
											</button>
										</div>
									</div>
									<div className='mt-6'>
										<nav className='grid gap-y-4'>
											{menuItems.map(item => (
												<a
													key={item.name}
													href={item.href}
													onClick={() => setActiveTab(item.name)}
													className='-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50'>
													<span
														className={`ml-3 text-base font-medium ${
															activeTab === item.name
																? 'text-orange-600'
																: ' text-gray-800'
														} hover:text-orange-600 `}>
														{item.name}
													</span>
												</a>
											))}
										</nav>
									</div>
									<button
										type='button'
										className='mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'>
										Download
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
