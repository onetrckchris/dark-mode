import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

let darkModeBody = document.querySelector('body');

const useDarkMode = () => {
    const [darkEnabled, setDarkEnabled] = useLocalStorage('dark-mode');
    console.log("darkEnabled state within useDarkMode.js", darkEnabled)
    
    useEffect(() => {
        if(darkEnabled) {
            darkModeBody.classList.add('dark-mode');
        } else {
            darkModeBody.classList.remove('dark-mode');
        }
    }, [darkEnabled])

    return [darkEnabled, setDarkEnabled];
}

export default useDarkMode;