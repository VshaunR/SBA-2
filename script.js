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
  }
];

function getLearnerData(ci, ag, submissions) {
  // here, we would process this data to achieve the desired result.
    let result=[];
    let myObj={};
    let assignment = getAssignment(ag);
    // console.log(assignment)
    
        for(let i = 0;i<submissions.length;i++){
          let id = submissions[i].learner_id;
          let assignmentId = submissions[i].assignment_id;
          let score = submissions[i].submission.score;
          let submitDate = submissions[i].submission.submitted_at;
          let points =0;
          let due ='';
          let innerId;
          let obj={}
            for(let j=0;j<assignment.length;j++){
              let idInAssignment = assignment[j].id;             
             

                if(id ==id && assignmentId ===idInAssignment){
                  innerId =idInAssignment
                  due = assignment[j].due_at;
                  points = assignment[j].points_possible;
                  // console.log(due,points)
                }
            };
            try{
              if(id ==id && assignmentId === innerId && submitDate ==due  || submitDate >due ){
                console.log(submitDate,due,id,score,points);
             
                let avg;
          
                if(submitDate >due){
                 // for late assignments
                  avg = Math.ceil((score/points)*100) - ( Math.ceil((score/points)*100)*.10)
                 
                }else if(points ===0){
                  // if dividend is 0 then avg is undefined
                  avg = undefined
                }else
                {
                  avg = Math.ceil((score/points)*100) 
                }
                obj={
                  id:id,
                  avg:avg,
                  firstAssignment:`${score}/${points}`  
                }
                result.push(obj)      
              }
            }catch(err){
              console.log(err)
            }
           
        };
        // console.log(result)

  // const result = [
  //   {
  //     id: 125,
  //     avg: 0.985, // (47 + 150) / (50 + 150)
  //     1: 0.94, // 47 / 50
  //     2: 1.0 // 150 / 150
  //   },
  //   {
  //     id: 132,
  //     avg: 0.82, // (39 + 125) / (50 + 150)
  //     1: 0.78, // 39 / 50
  //     2: 0.833 // late: (140 - 15) / 150
  //   }
  // ];

  return result;
}

const result = getLearnerData(ci, ag, submissions);
 console.log(result);


function getAssignment(ag){
  let arr = [];
for(let i in ag){
  arr=  ag.assignments.slice(0)
}
  // console.log(arr)
  return arr;
}