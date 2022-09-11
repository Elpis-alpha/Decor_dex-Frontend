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

							<Hamburger toggled={navStatus === "opened"} toggle={st => setNavStatus("closed")} size={25} distance="sm" rounded />

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

						<Hamburger toggled={navStatus === "opened"} toggle={st => setNavStatus("opened")} size={25} distance="sm" rounded />

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

					<div className="icon-mast num-cap" onClick={() => setIconStatus(iconStatus === "opened" ? "closed" : "opened")}>

						<AiOutlinePlus size="1.2pc" />

					</div>

					<Link href="/store#decor-search"><a className="icon-hol">

						<AiOutlineSearch size="1.2pc" />

					</a></Link>

					<Link href="/me"><a className="icon-hol">

						<AiOutlineUser size="1.2pc" />

					</a></Link>

					<Link href="/cart"><a className="icon-hol num-cap">

						<AiOutlineShoppingCart size="1.2pc" />

						<div className="num">0</div>

					</a></Link>

				</div>

				<div className="num ott">0</div>

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
	
	@media screen and (max-width: 1000px) {
		height: 4pc;
	}
	
	@media screen and (max-width: 800px) {
		height: 3pc;
	}

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

		.num {
			position: absolute;
			background-color: red;
			color: #fff;

			display: flex;
			align-items: center;
			justify-content: center;
			font-size: .6pc;
			line-height: 1pc;

			width: .8pc;
			height: .8pc;
			border-radius: 50%;

			top: -.5pc; right: -.5pc;

			&.ott {
				display: none;
			}
		}

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
				color: inherit;
				transition: color .5s;
				
				&:hover {
					color: #ccc;
				}
			}
		}

		@media screen and (max-width: 360px) {
			height: 100%;
			overflow: visible;

			.num {
				top: 0; right: 0;
				
				&.ott {
					display: flex;
				}
			}
			
			.rt-hol {
				flex-direction: column;
				justify-content: flex-start;
				background-color: #fff;
				border-radius: 25px;
				height: 35.18px;
				overflow: hidden;
				margin-top: 3.2px;
				/* margin: auto 0; */
				box-shadow:  1px 1px 3px #bbb;
				transition: height .5s;

				&.show {
					height: ${35.18 * 4}px;
					
					.icon-mast {
						transform: rotate(${45 + 90}deg);
						color: red;
					}
				}
				
				.icon-mast {
					padding: .5pc;
					margin: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					transition: transform .5s, color .5s;
					
					.num {
						position: absolute;
						top: .2pc; right: .2pc;
					}
				}

				.icon-hol {
					padding: .5pc;
					margin: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					transition: background-color .5s;
					border-radius: 50%;
				}
			}
		}
	}
`

export default NavBar
