import React, { useState, useEffect } from 'react';


function DarkModeToggle(){


    const[isDarkMode, setDarkMode] = useState(
        () => {
            return localStorage.getItem('theme') === 'dark';
        }
    );


    useEffect(() => {
        if(isDarkMode){
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[isDarkMode]);

    return(
        <div>
            <button className="p-2 dark:bg-gray-900 dark:text-shadow-indigo-50 bg-gray-200 text-gray-100 rounded"
            onClick={() => setDarkMode(!isDarkMode)}>
                Dark Mode
            </button>
        </div>
    )
}
export default DarkModeToggle;