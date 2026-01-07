import React, { useState } from "react";

/**
 * Create an App component that toggles between "light" and "dark" theme and passes theme as a prop to a child component.
 * Requirements
 *      - State: theme
 *      - Button toggles theme
 *      - Child component <ProfileCard theme={theme} />
 *      - ProfileCard changes className based on theme
 */

export const ToggleTheme = () => {

  const [theme, setTheme] = useState("light");

  function changeTheme() {
    let isLight = theme === "light";

    isLight ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className={`p-4 rounded ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <p className={`${theme === "light" ? "text-black" : "text-white"}`}>{theme}</p>
      <button onClick={changeTheme}>Toggle Theme</button>
    </div>
  );
};
