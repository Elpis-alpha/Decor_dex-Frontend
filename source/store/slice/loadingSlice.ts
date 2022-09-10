import { createSlice } from '@reduxjs/toolkit'


const loadingSlice = createSlice({

  name: "messages",

  initialState: {

    fullLoader: {

      text: "",

      style: {},

      transparent: false,
      
      show: false,

    },

  },

  reducers: {

    setFullLoader: (state, { payload }) => {

      state.fullLoader.text = payload.text

      state.fullLoader.style = payload.style ? payload.style : {}

      state.fullLoader.transparent = payload.transparent

      state.fullLoader.show = true

    },

    hideFullLoader: (state) => {

      state.fullLoader.show = false

    },

    resetFullLoader: (state) => {

      state.fullLoader.text = ""

      state.fullLoader.style = {}

      state.fullLoader.transparent = false

      state.fullLoader.show = false

    },

  }

})

export default loadingSlice.reducer;

export const { setFullLoader, hideFullLoader, resetFullLoader } = loadingSlice.actions
