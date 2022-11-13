const dialogBoxReducer = (state: any = { blur: 'xl:blur-none', hidden: 'hidden' }, action: any) => {
  switch (action.type) {
    case "SHOW":
      return state = {
        blur: 'xl:blur-sm',
        hidden: ''
      }
    case "HIDDEN":
      return state


    default:
      return state
  }
}

export default dialogBoxReducer