import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import MovieAndShows from "./pages/MovieAndShows"
import OpenMovie from "./pages/OpenMovie"
import OpenShow from "./pages/OpenShow"
import Support from "./pages/Support"
import UpgradeSubscription from "./pages/UpgradeSubscription"
import NavigationBar from "./components/NavigationBar"

function App() {
  return (
    <div>
     <NavigationBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie&shows" element={<MovieAndShows/>} />
      <Route path="/openmovie" element={<OpenMovie/>} />
      <Route path="/openshow" element={<OpenShow/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/upgradesubscription" element={<UpgradeSubscription/>} />
    </Routes>
    </div>
  )
}

export default App
