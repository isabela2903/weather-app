import { DailyForecast } from "./components/DailyForecast"
import { Header } from "./components/Header"
import { WeatherPanel } from "./components/WeatherPanel"

function App() {

  return (
    <>
      <Header />
      <WeatherPanel />
      <DailyForecast />
    </>
  )
}

export default App
