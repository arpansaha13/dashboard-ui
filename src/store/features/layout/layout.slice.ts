import { createSlice } from '@reduxjs/toolkit'

export type LayoutSliceState = {
  leftPanelOpen: boolean
  rightPanelOpen: boolean
}

const initialState: LayoutSliceState = {
  leftPanelOpen: window ? window.innerWidth > 1024 : false,
  rightPanelOpen: window ? window.innerWidth > 1024 : false,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: create => ({
    toggleLeftPanel: create.reducer(state => {
      state.leftPanelOpen = !state.leftPanelOpen
    }),
    toggleRightPanel: create.reducer(state => {
      state.rightPanelOpen = !state.rightPanelOpen
    }),
  }),
  selectors: {
    selectLeftPanelOpen: state => state.leftPanelOpen,
    selectRightPanelOpen: state => state.rightPanelOpen,
  },
})

export const { toggleLeftPanel, toggleRightPanel } = layoutSlice.actions

export const { selectLeftPanelOpen, selectRightPanelOpen } =
  layoutSlice.selectors
