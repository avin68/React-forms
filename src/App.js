// function App(){
// function eventHandler(e){
//     console.log(e.target)
// }
// const eventHandler = function(e){
//     console.log(e.target)
// }

// let eventHandler = (e)=>{
//     console.log(e.target)
//     console.log(e.target.value)
//     console.log(e.type)
// }
// return(
//     <form>
//         <input type="text" onChange={eventHandler} />
//     </form>
// )
/////////////////////////////////////////////////////////////

// let eventHandler = (ev)=>{
//     console.log(ev.target)
//     console.log(ev.target.value)
//     console.log(ev.type)
// }
// return(
//     <form>
//         <input type="text" onChange={(ev)=> eventHandler(ev)} />
//     </form>
// )

/////////////////////////////////////////////////////////

// let eventHandler2 = (e)=>{
//     console.log(e.target)
//     console.log(e.target.value)
// }
// return(
//     <select onChange={eventHandler2}>
//         <option value="esfahan">esf</option>
//         <option value="tehran">teh</option>
//         <option value="urmia">urm</option>
//         <option value="shiraz">shz</option>
//     </select>
// )
//////////////////////////////////////////////////////////

// let eventHandler2 = (e)=>{

//     console.log(e.target.selectedOptions)
// }
// return(
//     <select multiple onChange={eventHandler2}>
//         <option value="esfahan">esf</option>
//         <option value="tehran">teh</option>
//         <option value="urmia">urm</option>
//         <option value="shiraz">shz</option>
//     </select>
// )

////////////////////////////////////////////////////////
// let eventHandler2 = (e)=>{

//     let selected = Array.from(e.target.selectedOptions)
//     selected = selected.map(item => item.value)
//     console.log(selected)
// }
// return(
//     <select multiple onChange={eventHandler2}>
//         <option value="esfahan">esf</option>
//         <option value="tehran">teh</option>
//         <option value="urmia">urm</option>
//         <option value="shiraz">shz</option>
//     </select>
// )
///////////////////////////////////////////////////////
// let eventHandler2 = (e)=>{

//     let selected = [...e.target.selectedOptions]
//     selected = selected.map(item => item.value)
//     console.log(selected)
// }
// return(
//     <select multiple onChange={eventHandler2}>
//         <option value="esfahan">esf</option>
//         <option value="tehran">teh</option>
//         <option value="urmia">urm</option>
//         <option value="shiraz">shz</option>
//     </select>
// )

/////////////////////////////////////////////////////////

//     const eventHandler3 = (e)=>{
//         console.log(e.target.value , e.target.checked)

//     }
//     return(
//         <form>
//             <input type="checkbox" value="check1" onChange={eventHandler3} />
//         </form>
//     )
////////////////////////////////////////////////////////////
//     function eventHandler4(e){
//         console.log(e.target.value)
//     }
// return(
//     <form action="">
//         <input type="radio" name="gender" value="female" onChange={eventHandler4} />خانم <br />
//         <input type="radio" name="gender" value="male" onChange={eventHandler4} /> آقا
//     </form>
// )
////////////////////////////////////////////////////////////
// const eventHandler4 = (e)=>{
//     console.log(e.target.value)
// }
// return(
// <form action="">
//     <input type="radio" name="gender" value="female" onChange={eventHandler4} />خانم <br />
//     <input type="radio" name="gender" value="male" onChange={eventHandler4} /> آقا
// </form>
// )
//
///////////////////////Chllengeeeeeeee//////////////////////////
function App() {
  let checking = [];
  const eventHandler5 = (e) => {
    if (e.target.checked == true) {
      checking = checking.concat(e.target.value);
      console.log(checking);
    } else {
      let indexx = checking.indexOf(e.target.value);
      console.log(checking.slice(checking.splice(indexx, 1)));
    }
  };

  return (
    <form>
      <input type="checkbox" value="check1" onChange={eventHandler5} />
      check1
      <br />
      <input type="checkbox" value="check2" onChange={eventHandler5} />
      check2 <br />
      <input type="checkbox" value="check3" onChange={eventHandler5} />
      check3
      <br />
      <input type="checkbox" value="check4" onChange={eventHandler5} />
      check4
    </form>
  );
}
export default App;
