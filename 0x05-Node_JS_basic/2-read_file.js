#!/usr/bin/env node

const fs = require('fs');

/**
 * Count the number of students in a CSV file and log the details.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = {};
    let totalStudents = 0;

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    Object.keys(students).forEach((field) => {
      const list = students[field].join(', ');
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${list}`);
    });
  } catch (error) {
    console.error(new Error('Cannot load the database'));
  }
}

module.exports = countStudents;
