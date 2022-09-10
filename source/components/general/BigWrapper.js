import styled from "styled-components"

const BigWrapper = ({ ...props }) => {

  return (

    <BigWrapperStyle>

      {props.children}

    </BigWrapperStyle>

  )

}

const BigWrapperStyle = styled.div`

  flex: 1;
  z-index: 10;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

export default BigWrapper


