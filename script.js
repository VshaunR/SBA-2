/*

{
  "id": number,
  "name": string,
}

An AssignmentGroup object, which looks like this:
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],
}

Each AssignmentInfo object within the assignments array looks like this:
{
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,
}

An array of LearnerSubmission objects, which each look like this:
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}

Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:
{
    // the ID of the learner for which this data has been collected
    "id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
    "avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
}

*/
let date = new Date();
console.log(date.toLocaleDateString())
let courseInfo = {
  // should match course id in assignmentGroup
  id:1,
  name:'Java'
};

let assignmentGroup = {
  //just the id of the group
   id:1000,
  name:'Team 1',
  //course id should match courseInfo ID
  course_id:1,
  group_weight:10,
  assignments:[

        {
          id:1,
          name:'Make arrays',
          due_at: date ='9/17/2024',
          points_possible:100,
        },
        {
          id:2,
          name:'List primative types in JS',
          due_at: date = '9/7/2024',
          points_possible:100,
        },
        {
          id:3,
          name:'Make a function',
          due_at:date = '9/27/2024',
          points_possible:100,
        }


  ]
};



let learnerSubmission = [
  
 {
   // learner id is the individual id of a person
   learner_id:1,
   //assignment id is the id of the assignments array in the assignmentGroup object
   assignment_id:1,
   submission:{
   submitted_at: '9/16/2024',
   score:100,
  }
    
 },
 {
  // learner id is the individual id of a person
  learner_id:1,
  //assignment id is the id of the assignments array in the assignmentGroup object
  assignment_id:2,
  submission:{
  submitted_at:'9/27/2024',
  score:70,
 }
 
},
{
  // learner id is the individual id of a person
  learner_id:1,
  //assignment id is the id of the assignments array in the assignmentGroup object
  assignment_id:3,
  submission:{
  submitted_at: '9/1/2024',
  score:30,
 },
 
  
},
{
  // learner id is the individual id of a person
  learner_id:2,
  //assignment id is the id of the assignments array in the assignmentGroup object
  assignment_id:1,
  submission:{
  submitted_at: '9/11/2024',
  score:30,
 },
 

},
{
  // learner id is the individual id of a person
  learner_id:2,
  //assignment id is the id of the assignments array in the assignmentGroup object
  assignment_id:2,
  submission:{
  submitted_at: '9/19/2024',
  score:30,
 },
 
  
},{
  // learner id is the individual id of a person
  learner_id:3,
  //assignment id is the id of the assignments array in the assignmentGroup object
  assignment_id:2,
  submission:{
  submitted_at: '9/19/2024',
  score:30,
 },
 
  
}


];

// console.log(learnerSubmission)

function getLearnerData(courseInfo,assignmentGroup,learnerSubmission){
  let arrOfObj = [];
  let obj={};
  //getting an array of unique ids
 let arr= getUniqueId(learnerSubmission);
//  console.log(arr);
      learnerSubmission.forEach((item,i)=>{



      });
}
getLearnerData(courseInfo,assignmentGroup,learnerSubmission)







//function to get array of unique ids
function getUniqueId(arr){
  let temp=0;
  let idArr=[]
  learnerSubmission.forEach((sub,i)=>{
    // temp=sub.learner_id;
      
    if(sub.learner_id !== temp){
        idArr.push(sub.learner_id)
        temp =sub.learner_id
    }
  });
  // console.log(idArr)
  return idArr;
}


