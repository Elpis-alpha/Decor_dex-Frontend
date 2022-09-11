/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react"

import { ElpisImageType } from "../../@types/components"

import { reformImage } from "../../controllers/SpecialCtrl"


const ElpisImage = ({ src, alt = "", title = "", removeNext = false, remove = true, fullSize }: ElpisImageType) => {

  const imageRef = useRef(null)

  useEffect(() => { reformImage(imageRef.current, removeNext, remove, fullSize) }, [removeNext, remove, fullSize])

  return <img src={src} alt={alt} title={title} ref={imageRef} />

}

export default ElpisImage
