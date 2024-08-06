import Link from "next/link";
import logoImg from "@/public/images/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground></MainHeaderBackground>
            <header className={classes.header}>
                <Link href={'/'} className={classes.logo}>
                    {/* <img src={logoImg.src} alt="A plate with food on it"></img> */}
                    <Image src={logoImg} alt="A plate with food on it" priority></Image>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals"> Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={'/community'} > Browse Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}