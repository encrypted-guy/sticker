// eslint-disable-next-line
export default  (state, action) =>  {
    switch(action.type) {
        case 'INIT_CANVAS':
            return {
                ...state,
                canvas: action.payload
            }
        case 'HANDLE_CLIP':
            return {
                ...state,
                currentClip: action.payload
            }
        default:
            return state
    }
}