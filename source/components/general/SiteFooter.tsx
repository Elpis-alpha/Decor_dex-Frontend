import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"
import styled from "styled-components"

import { commonType, homeDataType } from "../../@types/components"
import { creator, creatorLink, siteName, siteThemeColor } from "../../__env"
import ElpisImage from "./ElpisImage"


const SiteFooter = ({ common }: { common: commonType }) => {

	return (

		<SiteFooterStyle>

			<div className="inner">

				<div className="top-part">

					<div className="column">

						<ElpisImage src="/images/assets/blur/foot-logo.png" alt="Decor dex" title="Decor dex" />

						{/* <p>{common.footer.motto}</p> */}

					</div>

					<div className="column ha">

						<div className="heading">Quick Links</div>

						<ul>

							<li><Link href=""><a>Home</a></Link></li>

							<li><Link href=""><a>Blog</a></Link></li>

							<li><Link href=""><a>Store</a></Link></li>

						</ul>

					</div>

					<div className="column ha">

						<div className="heading">About</div>

						<ul>

							<li><Link href=""><a>Shipping</a></Link></li>

							<li><Link href=""><a>Terms</a></Link></li>

							<li><Link href=""><a>Policy</a></Link></li>

						</ul>

					</div>

				</div>

				<div className="bottom-part">

					<div className="icons-part">

						<Link href={common.social.twitter}><a className="icon-hol">

							<FaTwitter size="1.2pc" />

						</a></Link>

						<Link href={common.social.facebook}><a className="icon-hol">

							<FaFacebook size="1.2pc" />

						</a></Link>

						<Link href={common.social.whatsapp}><a className="icon-hol">

							<FaWhatsapp size="1.2pc" />

						</a></Link>

						<Link href={common.social.instagram}><a className="icon-hol">

							<FaInstagram size="1.2pc" />

						</a></Link>

					</div>

					<div className="credits">

						© 2022 {siteName}. Created by <Link href={creatorLink}>{creator}</Link>

					</div>

				</div>

			</div>

		</SiteFooterStyle>

	)

}

const SiteFooterStyle = styled.footer`
	margin-top: 1pc;
	width: 100%;
	z-index: 10;
	background-color: #f1f1f1;
	padding: 1pc;
	box-shadow:  5px -5px 14px #e6e6e6,-5px 5px 14px #ffffff;

	.inner {

		.top-part {
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: 1pc 0;
			max-width: 700px;
			margin: 0 auto;

			.column {

				max-width: 40%;

				.heading {
					font-size: 1.2pc;
				}

				a {
					color: inherit;
					text-decoration: none;
					transition: color .2s;

					&:hover {
						color: #aaa;
					}
				}

				li {
					list-style-type: none;
				}

				img {
					max-width: 150px;
					margin: auto;
					display: block;
				}

				p {
					text-align: left;
				}
			}

			@media screen and (max-width: 500px) {
				flex-wrap: wrap;

				.column {
					max-width: 100%;
					width: 100%;

					&.ha {
						width: 50%;
						text-align: center;
					}
				}
			}
		}

		.bottom-part {
			border-top: 1px solid #ccc;
			padding-top: 1pc;
			text-align: center;

			.icons-part {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: .8pc;

				a {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0 .7pc;
					transition: color .5s;

					&:hover {
						color: #aaa;
					}
				}
			}
		}
	}
`

export default SiteFooter
