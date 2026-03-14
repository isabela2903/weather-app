import "./HourlyForecast.css";

export const HourlyForecast = () => {
  return (
    <div className="hourly-forecast">
      <div className="forecast-header">
        <h2 className="section-title">Hourly Forecast</h2>

        <input type="checkbox" id="date-selector" className="date-selector" />
        <label htmlFor="date-selector" className="date-selector-icon">
          <span>Tuesday</span>
          <img src="./images/icon-dropdown.svg" alt="Dropdown" />
        </label>

        <div className="date-menu">
          <button className="date-option">Monday</button>
          <button className="date-option active">Tuesday</button>
          <button className="date-option">Wednesday</button>
          <button className="date-option">Thursday</button>
          <button className="date-option">Friday</button>
          <button className="date-option">Saturday</button>
          <button className="date-option">Sunday</button>
        </div>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon overcast" />
          <p className="hour-time">3 PM</p>
        </div>

        <p className="hour-temp">68°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon partly-cloudy" />
          <p className="hour-time">4 PM</p>
        </div>

        <p className="hour-temp">68°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon sunny" />
          <p className="hour-time">5 PM</p>
        </div>

        <p className="hour-temp">68°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon overcast" />
          <p className="hour-time">6 PM</p>
        </div>

        <p className="hour-temp">66°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon snow" />
          <p className="hour-time">7 PM</p>
        </div>

        <p className="hour-temp">66°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon fog" />
          <p className="hour-time">8 PM</p>
        </div>

        <p className="hour-temp">64°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon snow" />
          <p className="hour-time">9 PM</p>
        </div>

        <p className="hour-temp">63°</p>
      </div>

      <div className="hourly-item">
        <div className="hour-details">
          <span className="hour-icon overcast" />
          <p className="hour-time">10 PM</p>
        </div>

        <p className="hour-temp">63°</p>
      </div>
    </div>
  );
};
