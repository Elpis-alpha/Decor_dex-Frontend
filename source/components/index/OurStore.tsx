import Link from "next/link"

import styled from "styled-components"

import { homeDataType } from "../../@types/components"

import { commonType } from "../../@types/others"

import { siteThemeColor } from "../../__env"

import ElpisImage from "../general/ElpisImage"


const OurStore = ({ common, homeData }: { common: commonType, homeData: homeDataType }) => {

	return (

		<OurStoreStyle>

			<div className="shaded-cover o2"></div>

			<div className="att-hol">

				<h1>{homeData.ourStore.heading}</h1>

				<p>{homeData.ourStore.text}</p>

				<div className="link-cont">

					<Link href="/store?section=birthday"><a>Birthday</a></Link>

					<Link href="/store?section=anniversary"><a>Anniversary</a></Link>

					<Link href="/store?section=combo"><a>Combo</a></Link>

				</div>

			</div>

			<ElpisImage src={homeData.ourStore.images.small} fullSize={homeData.ourStore.images.normal} alt={homeData.ourStore.heading} />

		</OurStoreStyle>

	)

}

const OurStoreStyle = styled.div`
	width: 100%;
	z-index: 10;
	text-align: center;
	color: #fff;

	img {
		position: absolute;
		top: 0; bottom: 0;
		left: 0; right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.att-hol {
		z-index: 15;
		padding: 7pc 3pc;

		h1 {
			margin-right: auto;
			font-weight: normal;
			font-size: 2.5pc;
			line-height: 3.5pc;
		}

		p {
		}

		.link-cont {
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;

			a {
				margin: .5pc;
				border: 0 none;
				display: inline-block;
				color: #000;
				text-decoration: none;
				padding: 0.3pc 1.3pc;
				background-color: ${siteThemeColor};
				opacity: 1;
				${p => p.theme.transitions({ backgroundColor: '.5', opacity: ".5" })}
				
				&:hover {
					opacity: .5;
					background-color: #fff;
				}
			}
		}
		
		@media screen and (max-width: 900px) {
			padding: 9pc 3pc;
		}
		
		@media screen and (max-width: 700px) {
			padding: 5pc 3pc;
		}
		
		@media screen and (max-width: 500px) {
			padding: 4pc 2pc;
		}
		
		@media screen and (max-width: 400px) {
			padding: 3pc 2pc;
		}
	}
	margin-bottom: 2pc;
`

export default OurStore
