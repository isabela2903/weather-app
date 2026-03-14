import "./Header.css";

export const Header = () => {
  return (
    <header className="header-weather-app">
      <div className="header-top">
        <img className="logo-container" src="./images/logo.svg" alt="Logo" />
        
        <input type="checkbox" id="units-toggle" className="units-toggle" />
        <label htmlFor="units-toggle" className="units-toggle-icon">
          <img src="./images/icon-units.svg" alt="Units" />
          <span>Units</span>
          <img src="./images/icon-dropdown.svg" alt="Dropdown" />
        </label>

        <div className="units-menu">
        <button className="units-switch">Switch to Imperial</button>

        <div className="unit-group">
          <p className="unit-label">Temperature</p>
          <button className="unit-option unit-option--celsius active">
            Celsius (°C)
          </button>
          <button className="unit-option unit-option--fahrenheit">
            Fahrenheit (°F)
          </button>
        </div>

        <div className="unit-group middle">
          <p className="unit-label">Wind Speed</p>
          <button className="unit-option unit-option--kmh active">km/h</button>
          <button className="unit-option unit-option--mph">mph</button>
        </div>

        <div className="unit-group">
          <p className="unit-label">Precipitation</p>
          <button className="unit-option unit-option--mm active">
            Millimeters (mm)
          </button>
          <button className="unit-option unit-option--in">Inches (in)</button>
        </div>
      </div>
      </div>

      <h1 className="header-title">How's the sky looking today?</h1>

      <div className="search-wrapper">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a place..."
        />
        <span className="search-icon">
          <img src="./images/icon-search.svg" alt="Search" />
        </span>
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};
