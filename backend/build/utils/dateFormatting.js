"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = (dateString) => {
    // Create a Date object from the input string
    const date = new Date(dateString);
    // Extract year, month, and day
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns 0-11
    const day = String(date.getDate()).padStart(2, '0');
    // Return formatted date as YYYY-MM-DD
    return `${year}-${month}-${day}`;
};
exports.formatDate = formatDate;
