import React from "react"

const JournalEntry = ({match}) => {
  return "Journal Title: "+match.params.name
}

export default JournalEntry
