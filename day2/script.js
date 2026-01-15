
function getMarks(){
  const s1 = Number(document.getElementById("sub1").value);
  const s2 = Number(document.getElementById("sub2").value);
  const s3 = Number(document.getElementById("sub3").value);

  return [s1,s2,s3];
}

function calculateMarks(marks){

    let total=0;
    for(let mark of marks){
        total+=mark;
    }
    return total;
}
 function calculatePercentage(totalmarks,maxmarks){
  let percentage=(totalmarks/maxmarks)*100;
  return percentage;
 }

 function grade(percentage){

       if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
   return "F";
 }
 function displayResult(totalmark, percentage, grade){
    const result = document.getElementById("result");
    result.innerHTML=`<Strong> Total marks: </Strong>${totalmark}<br>
    <strong>Percentage:</strong>${percentage.toFixed(2)}% <br>
    <strong>Grade</strong>${grade}`;
 }

 function calculateResult(){
  const marks = getMarks();
  const calculateMark=calculateMarks(marks);
  const CalculatePercentage=calculatePercentage(calculateMark,300);
  const grades=grade(CalculatePercentage);
  
  displayResult(calculateMark,CalculatePercentage,grades);
 }

 document.getElementById("calculate").addEventListener('click',calculateResult);
