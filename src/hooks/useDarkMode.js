import React, { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkEnabled, setDarkEnabled] = uselocalStorage('dark-mode');
}