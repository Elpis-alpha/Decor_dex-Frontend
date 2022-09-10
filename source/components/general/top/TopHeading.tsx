import { toast } from "react-toastify"
import styled from "styled-components"

import { commonType } from "../../../@types/others"

import { siteThemeColor } from "../../../__env"


const TopHeading = ({ common }: { common: commonType }) => {

	if (common.topHeading.length === 0) return <></>

	return (

		<TopHeadingStyle title={common.topHeading} onClick={() => toast(common.topHeading)}>

			{common.topHeading}

		</TopHeadingStyle>

	)

}

const TopHeadingStyle = styled.div`
	width: 100%;
	text-align: center;
	background-color: ${siteThemeColor};
	padding: .436pc 1pc;
	line-height: 2pc;
	white-space: pre;
	text-overflow: ellipsis;
	overflow: hidden;
	cursor: pointer;
`

export default TopHeading
