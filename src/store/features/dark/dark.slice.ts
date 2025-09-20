import { createSlice } from '@reduxjs/toolkit'

export type DarkSliceState = {
  isDark: boolean
}

const initialState: DarkSliceState = {
  isDark: false,
}

export const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: create => ({
    toggleDark: create.reducer(state => {
      document.body.classList.toggle('dark')
      state.isDark = !state.isDark
    }),
  }),
  selectors: {
    selectIsDark: state => state.isDark,
  },
})

export const { toggleDark } = darkSlice.actions

export const { selectIsDark } = darkSlice.selectors
