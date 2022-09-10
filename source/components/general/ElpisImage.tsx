/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react"

import { reformImage } from "../../controllers/SpecialCtrl"


const ElpisImage = ({ src, alt = "", title = "", removeNext = false, remove = true }: ElpisImageType) => {

  const imageRef = useRef(null)

  useEffect(() => { reformImage(imageRef.current, removeNext, remove) }, [removeNext, remove])

  return <img src={src} alt={alt} title={title} ref={imageRef} />

}

export default ElpisImage
