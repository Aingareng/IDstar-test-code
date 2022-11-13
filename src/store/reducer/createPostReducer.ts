const initialState = {
  value: 0
}

const createPostReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "CREATE":
      return state += action.payload

    default:
      return state
  }
}

export default createPostReducer