import "./Header.css";

export const Header = () => {
  return (
    <header className="header-weather-app">
      <div className="header-top">
        <img className="logo-container" src="./images/logo.svg" alt="Logo" />
        <button className="units-toggle">
          <img src="./images/icon-units.svg" alt="Units" />
          <span>Units</span>
          <img src="./images/icon-dropdown.svg" alt="Dropdown" />
        </button>
      </div>

      <h1 className="header-title">How's the sky looking today?</h1>

      <div className="search-wrapper">
        <input className="search-input" type="text" placeholder="Search for a place..." />
        <span className="search-icon"><img src="./images/icon-search.svg" alt="Search" /></span> 
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};
