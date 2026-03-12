import "./WeatherPanel.css";

export const WeatherPanel = () => {
  return (
    <main>
      <div className="weather-panel">
        <div className="location-header">
          <h2 className="current-city">Berlin, Germany</h2>
          <p className="current-date">Tuesday, Aug 5, 2025</p>

          <div className="weather-info">
            <span className="weather-icon sunny"></span>
            <p className="current-temp">68°</p>
          </div>
        </div>
      </div>

      <div className="weather-metrics">
        <div className="metric-item">
          <p className="metric-label">Feels Like</p>
          <p className="metric-value">64°</p>
        </div>

        <div className="metric-item">
          <p className="metric-label">Humidity</p>
          <p className="metric-value">46%</p>
        </div>

        <div className="metric-item">
          <p className="metric-label">Wind</p>
          <p className="metric-value">9 mph</p>
        </div>

        <div className="metric-item">
          <p className="metric-label">Precipitation</p>
          <p className="metric-value">0 in</p>
        </div>
      </div>
    </main>
  );
};
