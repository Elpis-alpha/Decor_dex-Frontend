import styled from "styled-components"

import { homeDataType } from "../../@types/components"

import { commonType } from "../../@types/others"

import ProductCard from "../products_combos/ProductCard"


const TopProducts = ({ common, homeData }: { common: commonType, homeData: homeDataType }) => {

	return (

		<TopProductsStyle>

			<div className="inner">

				<div className="intro">

					<h2>{homeData.topProducts.heading}</h2>

					<p>{homeData.topProducts.text}</p>

				</div>

				<div className="p-body">

					{homeData.featuredProductsData.slice(0, 3).map(data => <div key={data.name} className="pr-item">

						<ProductCard common={common} productData={data} />

					</div>)}

				</div>

			</div>

		</TopProductsStyle>

	)

}

const TopProductsStyle = styled.div`
	width: 100%;
	z-index: 10;
	padding: 5pc 1pc;

	.inner {

		.intro {
			text-align: center;
			padding: 1pc;

			h2 {
				font-weight: normal;
			}

			p {
				line-height: 1.8pc;
			}
		}

		.p-body {
			display: flex;
			align-items: stretch;
			justify-content: space-between;

			.pr-item {
				padding: 1pc;
				width: 33.3%;
				display: flex;
				align-items: stretch;
			}
			
			@media screen and (max-width: 900px) {
				flex-direction: column;
				.pr-item {
					width: 100%;
				}
			}
		}
	}
`

export default TopProducts
