const paginationReducer = (state: number = 1, action: any) => {
  switch (action.type) {
    case "NEXT":
      return state += action.payload
    case "PREV":
      if (state <= 1) {
        state = 1
      } else {
        state -= action.payload
      }
      return state
    default:
      return state
  }
}

export default paginationReducer