import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getAllCarts, getUser } from "../../api";

import { getApiJson } from "../../controllers/APICtrl";

import { removeCartData, setCartData, setRefetchCart } from "../../store/slice/cartSlice";

import { removeUserData, setUserData } from "../../store/slice/userSlice";


const FetchBaseData = () => {

  const dispatch = useDispatch()

  const { available } = useSelector((store: any) => store.user)

  const { refetchCart } = useSelector((store: any) => store.cart)

  useEffect(() => {

    // Fetch User Data
    const fetchUser = async () => {

      dispatch(setRefetchCart(false))

      const userData = await getApiJson(getUser())

      if (userData.error) dispatch(removeUserData())

      else dispatch(setUserData(userData))

      return userData

    }

    // Fetch Cart Data
    // fetchUser().then(async userData => {

    //   if (userData.error) return dispatch(removeCartData())

    //   const cartData = await getApiJson(getAllCarts())

    //   if (cartData.error) { dispatch(removeCartData()); dispatch(removeUserData()) }

    //   else dispatch(setCartData(cartData))

    // })

  }, [dispatch])

  useEffect(() => {

    // Fetch Cart Data
    // const fetchCartData = async () => {

    //   dispatch(setRefetchCart(false))

    //   const cartData = await getApiJson(getAllCarts())

    //   if (cartData.error) { dispatch(removeCartData()); dispatch(removeUserData()) }

    //   else dispatch(setCartData(cartData))

    // }

    // if (available && refetchCart) fetchCartData()

  }, [dispatch, available, refetchCart])

  return <></>

}

export default FetchBaseData