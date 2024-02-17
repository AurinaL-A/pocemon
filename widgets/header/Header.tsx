'use client'
import Image from "next/image";
import Nav from "../nav/Nav";
import style from './header.module.scss'
import Link from 'next/link';

import logo from '@/image/logo.svg'

const Header = () =>{
    return (
        <header className={style.header}>
            <div className="container">
                <div className={style.header__row}>
                    <Link href='/'><Image src={logo} alt="pokemon"/></Link>
                    <Nav/>
                </div>
            </div>
        </header>
    )
}
export default Header;