import { DailyForecast } from "./components/DailyForecast"
import { Header } from "./components/Header"
import { HourlyForecast } from "./components/HourlyForecast"
import { WeatherPanel } from "./components/WeatherPanel"

function App() {

  return (
    <>
      <Header />
      <WeatherPanel />
      <DailyForecast />
      <HourlyForecast />
    </>
  )
}

export default App
