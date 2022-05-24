let btn1e = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')
let inp = document.querySelector('input')
let tbl = document.querySelector('table')



btn1e.addEventListener('click', DataGetir)
function DataGetir() {
    fetch('https://jsonplaceholder.typicode.com/comments').then((response) => {
        response.json().then((value) => {
            console.log(value);
            filtret()
            inp.addEventListener('keyup', filtret)
            function filtret() {
                let filter1 = value.filter(
                    (item) => {
                        return item.email.toString().toLowerCase().includes(inp.value.toLowerCase())
                    }
                )
                let table1 = `<thead>
           
<td>postId</td>
<td>id</td>
<td>name</td>
<td>email</td>
<td>body</td>

</thead>`
                filter1.forEach((element) => {
                    table1 += `
                    <tbody>
     <tr>
        <td> ${element.postId}</td>
        <td> ${element.id}</td>
        <td> ${element.name}</td>
        <td> ${element.email}</td>
        <td> ${element.body}</td>
    </tr>
    </tbody>
                   
                    `
                });
                tbl.innerHTML = table1 
            }
           
        }).catch((err) => {
            console.log(err);
        });
    }).catch((err) => {
        console.log(err);
    })

}


// let harray=['salam','n1','f2','necesen','hardasan'];

// inp.addEventListener('keyup',axtar)
// function axtar(){
//     inp.value.toString()
// //   if(g.includes(`${inp.value}`)==true){
// //       console.log("Isle");
     
// //   }
// //   else {
// // console.log("isleme");
// // }
// // console.log(harray[0].slice(0,inp.value.length)==inp.value);
// // fetch('https://jsonplaceholder.typicode.com/comments').then((response) => {
// //     response.json().then((value) => {value.forEach(element => {
// //         // console.log(element.body);
// //         if(element.body.slice(0,inp.value.length)==inp.value){
 
// //    console.log(element.body.slice(0,inp.value.length));
// //         } 
// //     });})})

// let obj={
//     body:'non dolor consequatur laboriosam ut deserunt autem odit libero dolore non nesciunt qui aut est consequatur quo dolorem'
// }
// console.log(obj.body.filter((elements)=>{
// return elements=inp.value
// }));
// }

