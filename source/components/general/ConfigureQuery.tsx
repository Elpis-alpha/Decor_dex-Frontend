import { useEffect } from "react"

import { useDispatch } from "react-redux"

import { getQueryObject } from "../../controllers/SpecialCtrl"

import { setQueryObject } from "../../store/slice/querySlice"

import { host } from "../../__env"


const ConfigureQuery = () => {

  const dispatch = useDispatch()

  const queryObject = getQueryObject(typeof window !== "undefined" ? window.location.href : host)

  useEffect(() => { dispatch(setQueryObject(queryObject)) }, [dispatch, queryObject])

  return <></>

}

export default ConfigureQuery
