const createPostAction = (state: any) => {
  return {
    type: "CREATE",
    payload: state
  }
}

export default createPostAction