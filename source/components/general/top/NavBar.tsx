import Link from "next/link"

import { AiOutlinePlus, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"

import styled from "styled-components"

import { useState } from "react"

import ElpisImage from "../ElpisImage"

import Hamburger from "hamburger-react"


const NavBar = () => {

	const [navStatus, setNavStatus] = useState("closed")

	const [iconStatus, setIconStatus] = useState("closed")

	return (

		<NavBarStyle>

			<div className="left-part">

				<div className="ln-hol">

					<ul className={navStatus === "opened" ? 'show' : ''}>

						<div className="nav-ham-in">

							<Hamburger toggled={navStatus === "opened"} toggle={st => setNavStatus("closed")} size={35} distance="sm" rounded />

						</div>

						<Link href="/" title="A link to the Home page of Decor dex">

							<a title="A link to the Home page of Decor dex" className="img-lo-s">

								<ElpisImage src="/images/assets/blur/logo.png" alt="Decor dex" title="Decor dex" />

							</a>

						</Link>

						<li><Link href="/home" title="A link to the Home page">

							<a title="A link to the Home page">

								Home

							</a>

						</Link></li>

						<li><Link href="/blog" title="A link to the Blog page">

							<a title="A link to the Blog page">

								Blog

							</a>

						</Link></li>

						<li><Link href="/store" title="A link to the Store page">

							<a title="A link to the Store page">

								Store

							</a>

						</Link></li>

						<li><Link href="/about" title="A link to the About page">

							<a title="A link to the About page">

								About

							</a></Link></li>

						<li><Link href="/contact" title="A link to the Contact page">

							<a title="A link to the Contact page">

								Contact

							</a>

						</Link></li>

					</ul>

					<div className="nav-ham-in">

						<Hamburger toggled={navStatus === "opened"} toggle={st => setNavStatus("opened")} size={35} distance="sm" rounded />

					</div>

				</div>

			</div>

			<div className="mid-part">

				<div className="md-hol">

					<Link href="/" title="A link to the Home page of Decor dex">

						<a title="A link to the Home page of Decor dex">

							<ElpisImage src="/images/assets/blur/logo.png" alt="Decor dex" title="Decor dex" />

						</a>

					</Link>

				</div>

			</div>

			<div className="right-part">

				<div className={"rt-hol " + (iconStatus === "opened" ? "show" : "")}>

					<div className="icon-mast" onClick={() => setIconStatus(iconStatus === "opened" ? "closed" : "opened")}>

						<AiOutlinePlus size="1.5pc" />

					</div>

					<Link href="/store#decor-search"><a className="icon-hol">

						<AiOutlineSearch size="1.5pc" />

					</a></Link>

					<Link href="/me"><a className="icon-hol">

						<AiOutlineUser size="1.5pc" />

					</a></Link>

					<Link href="/cart"><a className="icon-hol">

						<AiOutlineShoppingCart size="1.5pc" />

					</a></Link>

				</div>

			</div>

		</NavBarStyle >

	)

}

const NavBarStyle = styled.nav`
	width: 100%;
	text-align: center;
	background-color: #fff;
	padding: .2pc 1pc;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5pc;
	box-shadow: 0 0 1px 0 rgba(0,0,0,.4);

	.left-part {
		flex: 1;

		.ln-hol {
			width: 100%;

			ul {
				width: 100%;
				list-style-type: none;
				display: flex;
				align-items: center;
				justify-content: flex-start;

				li {

					a {
						display: block;
						padding: 0 .8pc;
						text-decoration: none;
						color: inherit;
						transition: color .2s;

						&:hover {
							color: #afafaf;
						}
					}
				}
	
				.nav-ham-in {
					display: none;
				}

				.img-lo-s {
					display: none;
				}
			}

			.nav-ham-in {
				display: none;
			}

			@media screen and (max-width: 1050px) {
				
				ul {
					position: fixed;
					top: 0; bottom: 0;
					left: -305px;
					width: 300px;
					height: 100%;
					background-color: #fff;
					transition: left .5s;
					box-shadow: 0 5px 15px 3px rgb(0 0 0 / 7%);
					z-index: 50;
					flex-direction: column;

					padding: 1.5pc;

					&.show {
						left: 0;
					}

					.nav-ham-in {
						display: block;
						position: absolute;
						top: 1pc; right: 1pc;
						z-index: 15;
					}

					.img-lo-s {
						display: flex;
						width: 100%;
						justify-content: flex-start;
						padding-bottom: 1pc;
						z-index: 10;

						img {
							width: 50%;
						}
					}

					li {
						width: 100%;

						a {
							text-align: left;
							padding: 0.3pc 0.8pc;
							width: 100%;
						}
					}
				}

				.nav-ham-in {
					display: block;
				}
			}
		}
	}

	.mid-part {
		/* flex: 1; */
		height: 100%;

		.md-hol {
			height: 100%;

			a {
				height: 100%;
				display: flex;
				align-items: center;
				
				img {
					height: 80%;
				}
			}
		}
	}

	.right-part {
		flex: 1;
		display: flex;
		justify-content: flex-end;

		.rt-hol {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			.icon-mast {
				display: none;
			}

			.icon-hol {
				/* padding: 0 .5pc; */
				margin-left: 1.2pc;
				margin-right: .3pc;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		@media screen and (max-width: 700px) {
			height: 100%;
			overflow: visible;
			
			.rt-hol {
				flex-direction: column;
				justify-content: flex-start;
				background-color: #fff;
				border-radius: 25px;
				height: 50px;
				overflow: hidden;
				/* margin: auto 0; */
				margin-top: 16.8px;
				box-shadow:  1px 1px 3px #bbb;
				transition: height .5s;

				&.show {
					height: ${50 * 4}px;
					
					.icon-mast {
						transform: rotate(${45 + 90}deg);
						color: red;
					}
				}
				
				.icon-mast {
					padding: .81pc;
					margin: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					transition: transform .5s, color .5s;
				}

				.icon-hol {
					padding: .81pc;
					margin: 0;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
`

export default NavBar
