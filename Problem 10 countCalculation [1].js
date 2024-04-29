const countCalculation = ({ departments }) => {
   
    const { math, history } = departments;
    
    return {
      mathTeachersCount: math.teachers,
      historyTeachersCount: history.teachers,
      mathStudentsCount: math.students,
      historyStudentsCount: history.students,
    };
  };
  
  console.log(countCalculation(school));
  