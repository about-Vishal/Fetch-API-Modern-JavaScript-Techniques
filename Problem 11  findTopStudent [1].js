const findTopStudent = (school, courseName) => {

    return school.students.reduce((topStudent, currentStudent) => {

      const { name, className, scores } = currentStudent;

      if (scores[courseName] > (topStudent ? topStudent.scores[courseName] : -1)) {
        return { name, className, scores };
      }

      return topStudent;
      
    }, null);
  };
  
  console.log(findTopStudent(school, "math"));