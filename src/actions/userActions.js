export const LOAD_USERS = "LOAD_USERS"
export const getUsers =  () => {
  return(dispatch) => {
    return fetch('http://localhost:3000/api/v1/users').then(res => res.json()).then(users => {
      dispatch({
        type: LOAD_USERS,
        payload: users
      })
    }).catch(console.error)
  }
}

