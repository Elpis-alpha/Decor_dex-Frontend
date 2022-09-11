/* eslint-disable @next/next/no-img-element */
import styled from "styled-components"

import { commonType, homeDataType } from "../../@types/components"


const Testimonials = ({ common, homeData }: { common: commonType, homeData: homeDataType }) => {

	if (homeData.testimonials.length < 1) return <div style={{ padding: "2pc" }}></div>

	return (

		<TestimonialsStyle>

			<div className="inner">

				<h1>Testimonials</h1>

				<div className="testi">

					{homeData.testimonials.map(data => <div key={data._id} className="testimonial">

						<div className="top">

							<img src={data.headShot} alt={data.name} />

							<p className="tit">{data.title}</p>

						</div>

						<div className="bottom">

							<p>{data.text}</p>

						</div>

					</div>)}

				</div>

			</div>

		</TestimonialsStyle>

	)

}

const TestimonialsStyle = styled.div`
	width: 100%;
	z-index: 10;
	text-align: center;
	padding: 5pc 2pc;

	h1 {
		font-weight: normal;
		font-size: 3pc;
		line-height: 4pc;
		padding-bottom: 2pc;
	}

	.testi {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.testimonial {
			width: 80%;
			padding-bottom: 2pc;

			img {
				width: 5pc;
				height: 5pc;
				border-radius: 50%;
			}

			p {
				font-style: italic;

				&.tit {
					font-style: normal;
					color: #777;
					font-weight: bold;
					line-height: 1.5pc;
				}
			}
		}
	}
`

export default Testimonials
