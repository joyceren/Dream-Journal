import React from "react"

const UserHome = ({match}) => {
  return "User: "+match.params.name
}

export default UserHome
