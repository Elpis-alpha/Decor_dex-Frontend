import Link from "next/link"

import styled from "styled-components"

import { ProductComboType } from "../../@types/components"

import { sendMiniMessage } from "../../controllers/MessageCtrl"

import { siteThemeColor } from "../../__env"

import ElpisImage from "../general/ElpisImage"


const ProductCombo = ({ comboData, common }: ProductComboType) => {

	const discount = common.discounts.find(dis => dis._id === comboData.discountID)

	return (

		<ProductComboStyle>

			<div className="inner">

				<div className="top-part">

					<ElpisImage src={comboData.images[0].small} fullSize={comboData.images[0].normal} alt={comboData.name} />

					<div className="over-f-pd-pc">

						<button onClick={() => sendMiniMessage({ icon: { name: "times" }, content: { text: "Not yet implemented" } }, 1500)}>View More</button>

					</div>

				</div>

				<div className="bottom-part">

					<Link href={`/combo?_id=${comboData._id}`}>

						<a className="pr-name">{comboData.name}</a>

					</Link>

					<div className="pr-price">

						{!discount && <span>${comboData.price}</span>}

						{discount && <>

							<span className="changed" title={discount.name + ' discount for ' + discount.percent + '% on this combo'}>${comboData.price}</span>

							<span className="new" title={discount.name + ' discount for ' + discount.percent + '% on this combo'}>

								${comboData.price - (comboData.price * (discount.percent / 100))}

							</span>

						</>}

					</div>

					<div className="pr-cart">

						<button onClick={() => sendMiniMessage({ icon: { name: "times" }, content: { text: "Not yet implemented" } }, 1500)}>ADD TO CART</button>

					</div>

				</div>

			</div >

		</ProductComboStyle >

	)

}

const ProductComboStyle = styled.div`

	width: 100%;
	display: flex;
	justify-content: center;
	
	.inner {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		max-width: 300px;
		box-shadow:  5px 5px 9px #f0f0f0, -5px -5px 9px #ffffff
	}

	.top-part {
		width: 100%;
		padding-top: 100%;

		img {
			position: absolute;
			top: 0; bottom: 0;
			left: 0; right: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.over-f-pd-pc {
			position: absolute;
			top: 0; left: 0;
			bottom: 0; right: 0;
			z-index: 5;

			opacity: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			${p => p.theme.transitions({ opacity: ".5" })}

			&:hover {
				opacity: 1;
			}

			button {
				border: 0 none;
				display: inline-block;
				color: inherit;
				text-decoration: none;
				padding: 0.3pc 1.3pc;
				/* background-color: ${siteThemeColor}; */
				background-color: #000;
				color: #fff;
				opacity: 1;
				${p => p.theme.transitions({ backgroundColor: '.5', opacity: ".5" })}
				
				&:hover {
					opacity: .5;
					/* background-color: #aaa; */
				}
			}
		}
	}

	.bottom-part {
		text-align: center;
		flex: 1;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 .5pc;
		padding-bottom: 1.5pc;

		.pr-name {
			padding-top: .8pc;
			line-height: 1.5pc;
			font-size: 1pc;
			text-decoration: none;
			${p => p.theme.transitions({ color: '.2' })}

			&:hover {
				color: #aaa;
			}
		}

		.pr-price {
			padding-top: 0.2pc;

			span {
				font-weight: bold;
				padding: 0 .5pc;
				font-size: 1.5pc;

				&.changed {
					font-weight: normal;
					color: #aaa;
					text-decoration: line-through;
				}
			}
		}

		.pr-cart {

			button {
				border: 0 none;
				display: inline-block;
				color: inherit;
				text-decoration: none;
				padding: 0.3pc 1.3pc;
				/* background-color: ${siteThemeColor}; */
				background-color: #000;
				color: #fff;
				opacity: 1;
				${p => p.theme.transitions({ backgroundColor: '.5', opacity: ".5" })}
				
				&:hover {
					opacity: .9;
					background-color: #aaa;
				}
			}
		}
	}
`

export default ProductCombo
