import useLocalStorage from "./UseLocalStorage";
import "./theme.css";


export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage("dark");

    function handleToggleTheme() {
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme)

    return (
        <div className={theme === "light" ? "light-mode" : "dark-mode"}>

            <div className="container">
                <p>Hello world</p>
                <button onClick={handleToggleTheme} >Change Theme </button>
            </div>

        </div>
    );

}