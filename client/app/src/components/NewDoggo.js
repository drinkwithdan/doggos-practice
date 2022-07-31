import {  useState } from "react"

const initialState = {
  breed: "",
  shortDesc: "",
  longDesc: "",
  imageURL: ""

}

const NewDoggo = (props) => {
  const [fields, setFields] = useState(initialState)

  const handleChange = (event) => {
    // console.log(event.target.value);
    const { name, value } = event.target
    const updatedFields = {
      ...fields,
      [name]: value
    }
    setFields(updatedFields)
  }
  
  const handleSubmit = (event) => {
    // console.log(event);
    event.preventDefault()
    props.handleNewSubmit(fields)
    setFields(initialState)
  }
  
  return (
    <>
      <h2>A New Doggo, huzzah!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed</label>
        <input 
          type="text" 
          name="breed"
          placeholder="breed"
          id="title"
          required
          onChange={handleChange}
        />

<label htmlFor="shortDesc">Short Description</label>
        <input 
          type="text" 
          name="shortDesc"
          placeholder="shortDesc"
          id="shortDesc"
          onChange={handleChange}
        />

<label htmlFor="longDesc">Long Description</label>
        <textarea 
          type="textarea" 
          name="longDesc"
          placeholder="longDesc"
          id="longDesc"
          rows="4"
          onChange={handleChange}
        />

<label htmlFor="imageURL">Image</label>
        <input 
          type="text" 
          name="imageURL"
          placeholder="imageURL"
          id="imageURL"
          onChange={handleChange}
        />

      <input 
        type="submit"
        value="Add Doggo"
        />
      </form>
    </>
  )
}

export default NewDoggo