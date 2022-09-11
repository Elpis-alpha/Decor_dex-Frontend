import Link from "next/link"

import styled from "styled-components"

import { homeDataType } from "../../@types/components"

import { commonType } from "../../@types/others"

import { siteThemeColor } from "../../__env"

import ElpisImage from "../general/ElpisImage"


const AttractiveTop = ({ common, homeData }: { common: commonType, homeData: homeDataType }) => {

	return (

		<AttractiveTopStyle>

			<div className="shaded-cover o2"></div>

			<div className="att-hol">

				<h1>{homeData.headline.text}</h1>

				<Link href="/store"><a>Shop Now</a></Link>

			</div>

			<ElpisImage src={homeData.headline.images.small} fullSize={homeData.headline.images.normal} alt={homeData.headline.text} />

		</AttractiveTopStyle>

	)

}

const AttractiveTopStyle = styled.div`
	width: 100%;
	z-index: 10;

	img {
		position: absolute;
		top: 0; bottom: 0;
		left: 0; right: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: right;
	}

	.att-hol {
		z-index: 15;
		padding: 12pc 3pc;

		h1 {
			margin-bottom: 1pc;
			color: #fff;
			width: 60%;
			margin-right: auto;
			font-weight: normal;
			font-size: 3pc;
			line-height: 4pc;
		}
		
		a {
			border: 0 none;
			display: inline-block;
			color: inherit;
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
		
		@media screen and (max-width: 900px) {
			padding: 9pc 3pc;
			h1 {
				width: 80%;
				font-size: 2.5pc;
				line-height: 3.5pc;
			}
		}
		
		@media screen and (max-width: 700px) {
			padding: 5pc 3pc;
			h1 {
				width: 80%;
				font-size: 2pc;
				line-height: 3pc;
			}
		}
		
		@media screen and (max-width: 500px) {
			padding: 4pc 2pc;
			h1 {
				width: 80%;
				font-size: 1.5pc;
				line-height: 3pc;
			}			
		}
		
		@media screen and (max-width: 400px) {
			padding: 3pc 2pc;
			h1 { width: 100%; }
		}
	}
`

export default AttractiveTop
