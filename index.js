
var readlineSync=require('readline-sync')
console.log("*** Country - Capital ***")
var name=readlineSync.question("whats your name??")
console.log("hey " + name + " lets start the Guess🧐")
queslist=[
  ques1= {
    ques:"What is the Capital of France?",
    ans:"paris"
  },
  ques2={
    ques:"What is the Capital of Italy?",
    ans:"rome"
  },
  ques3={
    ques:"What is the Capital of Japan?",
    ans:"tokyo"
  },
   ques4={
    ques:"What is the Capital of South Korea?",
    ans:"seoul"
  },
   ques5={
    ques:"What is the Capital of Bangladesh?",
    ans:"dhaka"
  },
   ques6={
    ques:"What is the Capital of China?",
    ans:"beijing"
  },

]


n1=queslist.length
score=0
//func quiz
function quiz(q,a)
{
  userans=readlineSync.question(q)
  if(userans==a)
  {
    score+=1
    console.log("Right answer😎")
  }
  else
  {
    //score=score-1
    console.log("wrong ans...")
    console.log("correct answer is "+a)
  }
  console.log("present score is: "+score)
}



//level1
for(i=0;i<n1;i++)
{
  quiz(queslist[i].ques,queslist[i].ans)
}

console.log("yourscore final score is: "+score)

