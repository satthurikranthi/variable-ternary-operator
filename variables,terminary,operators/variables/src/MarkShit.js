import React from 'react'

function MarkShit(props) {



    let engmarks =Number(props.engmarks);
let telugumarks =Number(props.telugumarks);
let hindimarks =Number(props.hindimarks);
let sciencemarks =Number(props.sciencemarks);
let mathsmarks =Number(props.mathsmarks);
let socialmarks =Number(props.socialmarks);




let totalmarks =engmarks+telugumarks+hindimarks+sciencemarks+mathsmarks+socialmarks;


let per = (totalmarks/600)*100;










  return (
    <div>
        <table>

        <caption><b>{props.studentName} MarkShit</b></caption>
            <thead>
                
                <tr>
                    <th>subject</th>
                    <th>max.marks</th>
                    <th>marks.obtained</th>
                    <th>Results</th>
                    <th>Remark</th>
                   
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>english</td>
                <td>100</td>
                <td>{engmarks}</td>
                <td>pass</td>
                <td>excellent</td>
                </tr>




                <tr>
                <td>telugu</td>
                <td>100</td>
                <td>{telugumarks}</td>
                <td>pass</td>
                <td>excellent</td>
                </tr>





                <tr>
                <td>hindi</td>
                <td>100</td>
                <td>{hindimarks}</td>
                <td>pass</td>
                <td>excellent</td>
                </tr>





                <tr>
                <td>scenice</td>
                <td>100</td>
                <td>{sciencemarks}</td>
                <td>{sciencemarks >=35 ? "pass" :"fail"}</td>
                <td>{sciencemarks >=35 ? "excellent" :"poor"}</td>
                </tr>




                <tr>
                <td>maths</td>
                <td>100</td>
                <td>{mathsmarks}</td>
                <td>{mathsmarks >=35 ? "pass" :"fail"}</td>
                <td>{mathsmarks >=35 ? "excellent" :"poor"}</td>
                </tr>
                <tr>


                <td>social</td>
                <td>100</td>
                <td>{socialmarks}</td>
                <td>pass</td>
                <td>excellent</td>
                </tr>
                </tbody>
<tfoot>
<tr>


<td>total</td>
<td>600</td>
<td>{totalmarks}({per.toFixed(3)}%)</td>
<td>pass</td>
<td>excellent</td>
</tr>


</tfoot>

                
              
            
        </table>

      
    </div>
  )
}

export default MarkShit
