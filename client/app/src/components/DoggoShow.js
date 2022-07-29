import { useParams, Link } from "react-router-dom"

// SHOW /:id view
const DoggoShow = ({doggos}) => {
  const params = useParams()
  const doggo = doggos.find((d) => d._id === params.id)
  return (
    <div className="container">
      <h3>{doggo.breed}</h3>
      <img src={doggo.imageURL} alt="Pic of doggo" />
      <p>{doggo.shortDesc}</p>
      <p>{doggo.longDesc}</p>
      <Link to="/"><p>Back to index</p></Link>
    </div>
  )
}

export default DoggoShow
