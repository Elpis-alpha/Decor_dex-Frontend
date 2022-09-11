import Link from "next/link"

import styled from "styled-components"

import { homeDataType } from "../../@types/components"

import { commonType } from "../../@types/others"

import { siteThemeColor } from "../../__env"


const WhoWeAre = ({ common, homeData }: { common: commonType, homeData: homeDataType }) => {

	return (

		<WhoWeAreStyle>

			<div className="inner">

				<h2>{homeData.whoWeAre.heading}</h2>

				<p>{homeData.whoWeAre.text}</p>

			</div>

		</WhoWeAreStyle>

	)

}

const WhoWeAreStyle = styled.div`
	width: 100%;
	z-index: 10;
	padding: 5pc 1pc;
	padding-bottom: 0;

	.inner {

		text-align: center;
		padding: 1pc;

		h2 {
			font-size: 2.5pc;
			line-height: 4pc;
			font-weight: normal;
		}

		p {
			/* line-height: 1.8pc; */
		}
	}
`

export default WhoWeAre
