const usersAction = (count: []) => {
  return {
    type: "ADD_USER",
    payload: count
  }
}

export default usersAction