import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import DoggoShow from "./components/DoggoShow"

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

  return (
    <div className="App">
      <h1>Doggos</h1>

    <Routes>
      <Route path="/" element={doggos && <HomePage doggos={doggos} />} />
      <Route path="/:id" element={doggos && <DoggoShow doggos={doggos} />} />
    </Routes>
    </div>
  );
}

export default App;
