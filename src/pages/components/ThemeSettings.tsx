import { ThemePreferenceContext, themesMap } from "../_app";
import React, { useContext } from "react";
const ThemeSettings = () => {
  const {
    currentTheme,
    setCurrentTheme,
    // setCurrentThemeAndSavePref,
    // customTheme,
    // setCustomTheme,
    // setCustomThemeAndSavePref,
  } = useContext(ThemePreferenceContext);
  return (
    <>
      <label>
        <p>Theme: {currentTheme}</p>
        <button></button>
        <select
          value={currentTheme}
          onChange={(e) => {
            setCurrentTheme(e.target.value);
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </>
  );
};

export default ThemeSettings;
