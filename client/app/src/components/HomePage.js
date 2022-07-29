import { useState } from "react"
import { Link } from "react-router-dom"

// INDEX / view

const Doggo = ({doggo}) => {
  return (
    <div className="container" style={{ width:"15rem" }}>
        <img src={doggo.imageURL} alt="Doggo pic" />
        <p>Breed: {doggo.breed}</p>
    </div>
  )
}

const HomePage = ({ doggos }) => {
  const doggoList = doggos.map((doggo) => {
    return <Doggo doggo={doggo} />
  })
  return (
    <>
      <h1>Doggo List:</h1>
      {doggoList}
    </>
  )
}

export default HomePage
