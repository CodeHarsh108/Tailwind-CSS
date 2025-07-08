import DarkModeToggle from './DarkModeToggle';

function DarkMode(){
    return(
        <div className="p-4 bg-white min-h-screen dark:bg-gray-800 text-gray-900 dark:text-gray-100 ">
            <DarkModeToggle />
            <h1 className="text-2xl">Welcome to Dark Mode App</h1>
            <p>This is an example of implementation of Dark mode in our application using TailWindCSS</p>
        </div>
    )
}
export default DarkMode;