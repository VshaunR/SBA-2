// The provided course information.
const ci = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const ag = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const submissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  },
  {
    // checking if it would work with another learner id
    learner_id: 135,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 10
    }
  }
];

function getLearnerData(ci, ag, submissions) {
  // here, we would process this data to achieve the desired result.
    let result=[];
   let course;
    for(i in ag){
  
      course= ag.course_id;
    }

    //if course id does not match then error is logged
    try{
    
      if(ci.id ===course){
        result = handleSubmissions(submissions)
        
      }else {
        console.err('Course id does not match');
        
      }


    }catch(err){
      if(err){
        console.log(err)
      }
    }  
      


  return result;
}

const result = getLearnerData(ci, ag, submissions);
 console.log(result);

//getting the array in groupAssignments object for easier extraction of data
function getAssignment(ag){
  let arr = [];
for(let i in ag){
  arr=  ag.assignments.slice(0)
}

  return arr;
};

//handling the submission array , declaring all the variables I need
function handleSubmissions(submissions){
let result =[];
//getting my assignment array
  let assignment = getAssignment(ag);
  for(let i = 0;i<submissions.length;i++){
    let id = submissions[i].learner_id;
    let assignmentId = submissions[i].assignment_id;
    //in case its a string
    let score = Number(submissions[i].submission.score);
    let submitDate = submissions[i].submission.submitted_at;
    let points =0;
    let due ='';
    let innerId;
    let obj={};
    let isLate;
      for(let j=0;j<assignment.length;j++){
        let idInAssignment = assignment[j].id;             
       //using a nested for loop to extract and asign the values I need

          if(id ==id && assignmentId ===idInAssignment){
            innerId =idInAssignment
            due = assignment[j].due_at;
            //in case its a string then string will be converted to number
            points = Number(assignment[j].points_possible);
            // console.log(due,points)
          }
      };
      try{
        if(id ==id && assignmentId === innerId && submitDate ==due  || submitDate >due ){
          // console.log(submitDate,due,id,score,points);
       
          let avg;
    
          if(submitDate >due){
           // for late assignments
           //returns a boolean and deducts 10% of total grade
            avg = Math.ceil((score/points)*100) - ( Math.ceil((score/points)*100)*.10)
            isLate=true  + ` -10%`
         
          }else if(points ===0){
            // if dividend is 0 then avg is undefined
            avg = undefined
          }else if(submitDate==due) {
            avg = Math.ceil((score/points)*100) 
            isLate= false;
          }
          obj={
            id:id,
            avg:avg,
            total:`${score}/${points}`,
            assignment_id:assignmentId ,
            late:isLate
          }
          result.push(obj) 
        }
      
      }catch(err){
        console.log(err)
      }
     
  };
  return result;
};

handleSubmissions(submissions)