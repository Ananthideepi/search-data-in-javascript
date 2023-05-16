const table=[
    {
        name:"Ananthi",
        father_name:"Chithambaram",
        age: "20",
        roll_no:"101",
        role:"Developer",
    },
    {
        name:"Deepika",
        father_name:"Ravi",
        age: "21",
        roll_no:"102",
        role:"Fashion_Designer",
    },
    {
        name:"Alagu",
        father_name:"Charman",
        age: "22",
        roll_no:"103",
        role:" App_developer",
    },
    {
        name:"Karuna",
        father_name:"Moorthy",
        age: "19",
        roll_no:"104",
        role:"PHP_developer",
    },
    {
        name:"kowshik",
        father_name:"Siva",
        age: "22",
        roll_no:"105",
        role:"App_developer",
    },
    {
        name:"Anand",
        father_name:"Elumalai",
        age: "23",
        roll_no:"106",
        role:"Senior_App_developer",
    },
    {
        name:"Raji",
        father_name:"Mr.A",
        age: "20",
        roll_no:"107",
        role:"Senior_PHP_developer",
    }
]
 // const table_header=`<table> 
// <tr>
// <th>Name</th><th>Father_Name</th><th>Age</th><th>Roll_No</th><th>Role</th>
// </tr>
// </table>`
// ............................name sorted......................................
// const sorted = (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
// table.sort(sorted);
//  console.log("table_sorted ", table);
// ..................................................
const table_header=Object.keys(table[0]);
console.log(table_header);
// ['name', 'father_name', 'age', 'roll_no', 'role']

// html file..................................................
const input_search=document.getElementById("input");
const output=document.getElementById("result");


window.addEventListener("DOMContentLoaded",Data_storage);
input_search.addEventListener("input",search)

// ......................................................................
function Data_storage(){
//  console.log("ready to load")
    let row_head =`<table> 
    <tr>
    <th onclick="sort()">Name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
    <th onclick="fathername_sort()">Father_Name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
    <th>Age</th>
    <th>Roll_No</th>
    <th onclick="role_sort()">Role<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>`

    // table_header.forEach(header=> row_head+=`<th onclick="sort()">${header.toUpperCase()}</th>`);
    
    row_head+=`</tr>`;
    // output.innerHTML= row_head;
    // console.log(row_head)

    // <table> <tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
   
    table.forEach(row=> {
       row_head +=`<tr>
         <td>${row.name}</td>
         <td>${row.father_name}</td>
         <td>${row.age}</td>
         <td>${row.roll_no}</td>
         <td>${row.role}</td>
         </tr>`
        })

    row_head +=`</table>`
    output.innerHTML= row_head;
    //  console.log(row_head)
}
// ..............................................................................................
function search(event){
//    console.log(event.target.value) 
   let display;
   row_head="";

display = table.filter( item => item.name.toLowerCase().includes(event.target.value.toLowerCase())||
                                item.father_name.toLowerCase().includes(event.target.value.toLowerCase())||
                                item.age.toLowerCase().includes(event.target.value.toLowerCase())||
                                item.roll_no.toLowerCase().includes(event.target.value.toLowerCase())||
                                item.role.toLowerCase().includes(event.target.value.toLowerCase()))
console.log(display)
// {/* <tr><td>Ananthi</td><td>Chithambaram</td><td>20</td><td>101</td><td>developer</td></tr> */}
// {/* <tr><td>Deepika</td><td>Ravi</td><td>21</td><td>102</td><td>Fashion_Designer</td> </tr>  */}
// {/* <tr><td>Alagu</td><td>Charman</td><td>22</td><td>103</td><td> PHP_developer</td></tr>  */}
// {/* <tr><td>Karuna</td><td>Moorthy</td><td>19</td><td>104</td><td>PHP_developer</td></tr>...........etc  */}
// .......................................................................................................................
// final output
console.log("display.length",display.length)
if(display.length > 0){
    // console.log("output results")
    let row_head =`<table> <tr>
   <th onclick="reverse()">name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th>`
        // table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
        row_head+=`</tr>`;
    // output.innerHTML= row_head;
    // console.log(row_head)
    // <table> <tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
  display.forEach(row=> {
       row_head +=`<tr>
         <td>${row.name}</td>
         <td>${row.father_name}</td>
         <td>${row.age}</td>
         <td>${row.roll_no}</td>
         <td>${row.role}</td>
         </tr>`
        })
    row_head +=`</table>`
    output.innerHTML= row_head;
    // console.log(row_head)
}
else{
    output.innerHTML= `<div class="no_data"> no result is found...<div>`
}
}

function sort(){
    console.log("sort worked")
    let sorted;
    let  row_head="";
    // console.log("row_head",row_head)

    sorted = (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    table.sort(sorted);
 console.log(table.sort(sorted))


   row_head =`<table> <tr>
       <th onclick="reverse()">name<i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down"></i></th>
       <th onclick="fathername_sort()">father_name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
       <th>age</th>
       <th>roll_no</th>
       <th onclick="role_sort()">role<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
     </tr>`
        // table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
        row_head+=`</tr>`;
    // output.innerHTML= row_head;
    // console.log(row_head)
    // <table><tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
table.forEach(row=> {
       row_head +=`<tr>
         <td>${row.name}</td>
         <td>${row.father_name}</td>
         <td>${row.age}</td>
         <td>${row.roll_no}</td>
         <td>${row.role}</td>
         </tr>`
        })
    row_head +=`</table>`
    output.innerHTML= row_head;
    // console.log(row_head)

 }
 
function fathername_sort(){
    console.log("sort worked")
    let sorted;
    let  row_head="";
    // console.log("row_head",row_head)

    sorted = (a, b) => a.father_name.toLowerCase() > b.father_name.toLowerCase() ? 1 : -1
    table.sort(sorted);
 console.log(table.sort(sorted))

 
 row_head =`<table> <tr>
 <th onclick="sort()">name<i class="bi bi-caret-up"></i><i class="bi bi-caret-down"></i></th>
 <th onclick="fathername_reverse()">father_name<i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down"></i></th>
 <th>age</th>
 <th>roll_no</th>
 <th onclick="role_sort()">role<i class="bi bi-caret-up"></i><i class="bi bi-caret-down"></i></th>
</tr>`
// table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
row_head+=`</tr>`;
    // output.innerHTML= row_head;
    // console.log(row_head)
    // <table><tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
table.forEach(row=> {
       row_head +=`<tr>
         <td>${row.name}</td>
         <td>${row.father_name}</td>
         <td>${row.age}</td>
         <td>${row.roll_no}</td>
         <td>${row.role}</td>
         </tr>`
        })
    row_head +=`</table>`
    output.innerHTML= row_head;
    // console.log(row_head)

 }

 function role_sort(){
    console.log("sort worked")
    let sorted;
    let  row_head="";
    // console.log("row_head",row_head)

    sorted = (a, b) => a.role.toLowerCase() > b.role.toLowerCase() ? 1 : -1;
    table.sort(sorted);
 console.log(table.sort(sorted))

   row_head =`<table> <tr>
       <th onclick="sort()">name<i class="bi bi-caret-up"></i><i class="bi bi-caret-down"></i></th>
       <th onclick="fathername_sort()">father_name<i class="bi bi-caret-up"></i><i class="bi bi-caret-down"></i></th>
       <th>age</th>
       <th>roll_no</th>
       <th onclick="role_reverse()">role<i class="bi bi-caret-up-fill"></i><i class="bi bi-caret-down"></i></th>
     </tr>`
        // table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
        row_head+=`</tr>`;
    // output.innerHTML= row_head;
    // console.log(row_head)
    // <table><tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
table.forEach(row=> {
       row_head +=`<tr>
         <td>${row.name}</td>
         <td>${row.father_name}</td>
         <td>${row.age}</td>
         <td>${row.roll_no}</td>
         <td>${row.role}</td>
         </tr>`
        })
    row_head +=`</table>`
    output.innerHTML= row_head;
    // console.log(row_head)

 }

function reverse(){
    console.log("reversed")
    let row_head="";

    let  reverse = (a, b) => a.name.toLowerCase() <  b.name.toLowerCase() ? 1 : -1;
    table.sort(reverse);
    console.log(table.sort(reverse))
  
   row_head =`<table><tr>
<tr><th onclick="sort()">Name<i class="bi bi-caret-down-fill"></i><i class="bi bi-caret-up"></i></th>
<th onclick="fathername_sort()">father_name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
<th>age</th>
<th>roll_no</th>
<th onclick="role_sort()">role<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
</tr>`
   // table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
   row_head+=`</tr>`;
// output.innerHTML= row_head;
// console.log(row_head)
// <table><tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
table.forEach(row=> {
  row_head +=`<tr>
    <td>${row.name}</td>
    <td>${row.father_name}</td>
    <td>${row.age}</td>
    <td>${row.roll_no}</td>
    <td>${row.role}</td>
    </tr>`
   })
row_head +=`</table>`
output.innerHTML= row_head;
// console.log(row_head)

}

function fathername_reverse(){
    console.log("reversed")
    let row_head="";

    let  reverse = (a, b) => a.father_name.toLowerCase() <  b.father_name.toLowerCase() ? 1 : -1;
    table.sort(reverse);
    console.log(table.sort(reverse))
  
   row_head =`<table><tr>
<th onclick="sort()">name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
<th onclick="fathername_sort()">Father_Name<i class="bi bi-caret-down-fill"></i><i class="bi bi-caret-up"></i></th>
<th>age</th>
<th>roll_no</th>
<th onclick="role_sort()">role<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th></tr>`
   // table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
   row_head+=`</tr>`;
// output.innerHTML= row_head;
// console.log(row_head)
// <table><tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
table.forEach(row=> {
  row_head +=`<tr>
    <td>${row.name}</td>
    <td>${row.father_name}</td>
    <td>${row.age}</td>
    <td>${row.roll_no}</td>
    <td>${row.role}</td>
    </tr>`
   })
row_head +=`</table>`
output.innerHTML= row_head;
// console.log(row_head)

}
function role_reverse(){
    console.log("reversed")
    let row_head="";

    let  reverse = (a, b) => a.role.toLowerCase() <  b.role.toLowerCase() ? 1 : -1;
    table.sort(reverse);
    console.log(table.sort(reverse))
  
   row_head =`<table><tr>
<th onclick="sort()">name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
<th onclick="fathername_sort()">Father_Name<i class="bi bi-caret-down"></i><i class="bi bi-caret-up"></i></th>
<th>age</th>
<th>roll_no</th>
<th onclick="role_sort()">role<i class="bi bi-caret-down-fill"></i><i class="bi bi-caret-up"></th></tr>`
   // table_header.forEach(header=> row_head+=`<th">${header.toUpperCase()}</th>`);
   row_head+=`</tr>`;
// output.innerHTML= row_head;
// console.log(row_head)
// <table><tr><th>name</th><th>father_name</th><th>age</th><th>roll_no</th><th>role</th></tr></table>
// console.log("output results")
table.forEach(row=> {
  row_head +=`<tr>
    <td>${row.name}</td>
    <td>${row.father_name}</td>
    <td>${row.age}</td>
    <td>${row.roll_no}</td>
    <td>${row.role}</td>
    </tr>`
   })
row_head +=`</table>`
output.innerHTML= row_head;
// console.log(row_head)

}