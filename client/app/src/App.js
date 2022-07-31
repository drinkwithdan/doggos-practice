import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import DoggoShow from "./components/DoggoShow"
import NewDoggo from "./components/NewDoggo"

function App() {
  const [doggos, setDoggos] = useState("")

  const getDoggos = async () => {
    const url = "http://localhost:4000/doggos"
    const res = await fetch(url)
    const data = await res.json()
    setDoggos(data)
  }

  useEffect(() => {
    getDoggos()
  }, [])

  const handleNewSubmit = async (createdDoggo) => {
    if (createdDoggo.breed.length <= 0) return
    console.log("new doggo: ", createdDoggo)
    const res = await fetch("http://localhost:4000/doggos", {
      method: "POST",
      headers: {
        "Conent-Type": "application/json"
      },
      body: JSON.stringify( { createdDoggo } )
    })
    console.log(res.ok)
    // if (res.ok) {
    //   const newDoggo = await res.json()
    //   console.log(newDoggo)
    //   setDoggos([
    //     ...doggos,
    //     newDoggo
    //   ])
    // } else {
    //   console.log("theres a problem with this doggo");
    // }
  }

  return (
    <div className="App">
      <h1>Doggos</h1>

    <Routes>
      <Route path="/" element={doggos && <HomePage doggos={doggos} />} />
      <Route path="/:id" element={doggos && <DoggoShow doggos={doggos} />} />
      <Route path="/new" element={<NewDoggo handleNewSubmit={handleNewSubmit} /> } />
    </Routes>
    </div>
  );
}

export default App;
