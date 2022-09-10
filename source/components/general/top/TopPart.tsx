import styled from "styled-components"

import { commonType } from "../../../@types/others"

import NavBar from "./NavBar"

import TopHeading from "./TopHeading"


const TopPart = ({ common }: { common: commonType }) => {

  return (

    <TopPartStyle className={common.topHeading.length === 0 ? 'tt' : ''}>

      <TopHeading common={common} />

      <NavBar />

    </TopPartStyle>

  )

}

const TopPartStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 15;
  
	position: sticky;
	top: -46px;

  &.tt {
    top: 0;
  }
`

export default TopPart
