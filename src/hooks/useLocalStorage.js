import React, { useState } from 'react';

// This is the custom hook. Key and initialValue are the parameters.
const useLocalStorage = (key, initialValue) => {
    // storedValue is the state we'll be working with. It'll be initialized
    // with whatever the calback function returns.
    const [storedValue, setStoredValue] = useState(() => {
        // This callback function is checking to see if there's anything
        // inside of localStorage with the key that the user is providing.
        // If there IS then it'll return that item. If there ISN'T then it'll
        // return... the initial value? Come back to this.
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    // const [storedValue, setStoredValue] = useState('dark-mode');

    // This function is setting a provided value to localStorage with
    // the key already provided in the useLocalStorage hook.
    const setValue = value => {
        // This is setting it to state.
        setStoredValue(value);
        // This is setting it to localStorage.
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    console.log("storedValue state within useLocalStorage.js", storedValue);
    return [storedValue, setValue];
}

export default useLocalStorage;