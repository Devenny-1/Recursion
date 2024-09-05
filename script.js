function calculateTotalSalaries(university) {
    let total = 0;
  
    // Loop through each faculty in the university
    for (let faculty of Object.values(university)) {
      // Loop through each department in the faculty
      for (let department of Object.values(faculty)) {
        // Sum up the salaries in each department
        total += department.reduce((prev, current) => prev + current.salary, 0);
      }
    }
  
    return total;
  }
  
  // Example usage
  let university = {
    science: {
      physics: [{name: 'Dr. Smith', salary: 5000}, {name: 'Dr. Johnson', salary: 4500}],
      chemistry: [{name: 'Dr. Lee', salary: 4800}]
    },
    arts: {
      history: [{name: 'Dr. Adams', salary: 4700}],
      literature: [{name: 'Dr. Clark', salary: 5200}, {name: 'Dr. White', salary: 5100}]
    }
  };
  
  console.log(calculateTotalSalaries(university)); // Output: 29300
  