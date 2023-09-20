export const setOrderIntent = (state, action) => {
    const { payload } = action
    state.loading = false
    state.success = true
    state.item = payload
}