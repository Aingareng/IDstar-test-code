export const nextPage = (count: number) => {
  return {
    type: "NEXT",
    payload: count
  }
}

export const prevPage = (count: number) => {
  return {
    type: "PREV",
    payload: count
  }
}

