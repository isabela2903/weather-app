import "./DailyForecast.css";

export const DailyForecast = () => {
  return (
    <div className="daily-forecast">
      <h2 className="section-title">Daily Forecast</h2>

      <div className="daily-forecast-grid">
        <div className="forecast-day">
          <p className="day-name">Tue</p>
          <span className="day-icon rain" />

          <div className="temp-range">
            <p className="temp-high">68°</p>
            <p className="temp-low">57°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Wed</p>
          <span className="day-icon drizzle" />

          <div className="temp-range">
            <p className="temp-high">70°</p>
            <p className="temp-low">59°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Thu</p>
          <span className="day-icon sunny" />

          <div className="temp-range">
            <p className="temp-high">75°</p>
            <p className="temp-low">57°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Fri</p>
          <span className="day-icon partly-cloudy" />

          <div className="temp-range">
            <p className="temp-high">77°</p>
            <p className="temp-low">55°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Sat</p>
          <span className="day-icon storm" />

          <div className="temp-range">
            <p className="temp-high">70°</p>
            <p className="temp-low">59°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Sun</p>
          <span className="day-icon snow" />

          <div className="temp-range">
            <p className="temp-high">77°</p>
            <p className="temp-low">61°</p>
          </div>
        </div>

        <div className="forecast-day">
          <p className="day-name">Mon</p>
          <span className="day-icon fog" />

          <div className="temp-range">
            <p className="temp-high">75°</p>
            <p className="temp-low">59°</p>
          </div>
        </div>
      </div>
    </div>
  );
};
