'use client'
import Link from 'next/link';
import style from './nav.module.scss'
import { usePathname } from 'next/navigation';

const navList = [
	{ name: 'Home', link: '/' },
	{ name: 'Pokédex', link: '/pokedex' },
	{ name: 'Legendaries', link: '/legendaries' },
	{ name: 'Documentation', link: '/documentation' }
]

const Nav = () => {

	const pathname = usePathname()

	return (
		<nav className={style.nav}>
			<ul>
				{navList.map(({ name, link }, i) => {
					return (<li key={i}><Link href={link}>{name}</Link>
                        {pathname == link ? <span className={style.line}></span> : null}
						
					</li>)
				})}
			</ul>
		</nav>
	);
}

export default Nav;