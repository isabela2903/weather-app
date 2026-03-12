import "./DailyForecast.css";

export const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <h2 className="section-title">Daily Forecast</h2>

      <div className="daily-forecast-grid">
        <div className="forecast-day">
          <p className="day-name">Tue</p>
          <img className="day-icon" src="./images/icon-rain.webp" alt="Rain" />

          <div className="temp-range">
            <p className="temp-high">68°</p>
            <p className="temp-low">57°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Wed</p>
          <img
            className="day-icon"
            src="./images/icon-drizzle.webp"
            alt="Drizzle"
          />

          <div className="temp-range">
            <p className="temp-high">70°</p>
            <p className="temp-low">59°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Thu</p>
          <img
            className="day-icon"
            src="./images/icon-sunny.webp"
            alt="Sunny"
          />

          <div className="temp-range">
            <p className="temp-high">75°</p>
            <p className="temp-low">57°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Fri</p>
          <img
            className="day-icon"
            src="./images/icon-partly-cloudy.webp"
            alt="Partly Cloudy"
          />

          <div className="temp-range">
            <p className="temp-high">77°</p>
            <p className="temp-low">55°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Sat</p>
          <img
            className="day-icon"
            src="./images/icon-storm.webp"
            alt="Storm"
          />

          <div className="temp-range">
            <p className="temp-high">70°</p>
            <p className="temp-low">59°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Sun</p>
          <img className="day-icon" src="./images/icon-snow.webp" alt="Snow" />

          <div className="temp-range">
            <p className="temp-high">77°</p>
            <p className="temp-low">61°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Mon</p>
          <img className="day-icon" src="./images/icon-fog.webp" alt="Fog" />

          <div className="temp-range">
            <p className="temp-high">75°</p>
            <p className="temp-low">59°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
