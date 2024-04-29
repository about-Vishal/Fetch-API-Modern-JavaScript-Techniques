const highestStudentCountDepartment = (school) => {
    let highestCount = -1;
    let highestCountDept;
  
    for (const [dept, { students }] of Object.entries(school.departments)) {
      if (students > highestCount) {
        highestCount = students;
        highestCountDept = dept;
      }
    }
  
    return highestCountDept;
  };
  
  console.log(highestStudentCountDepartment(school)); // math