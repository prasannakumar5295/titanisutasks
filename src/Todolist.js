import React,{useState} from 'react'

const Todolist = () =>{
  const [data,setData] = useState({
    username:'',
    pnonenumber:'',
})
const [list,setList] = useState([]);
const { username,phonenumber } = data;
const changeHandler = u =>{
    setData({...data,[u.target.name]:u.target.value})
}

const submitHandler = e =>{
    e.preventDefault();
    if(username === ''|| phonenumber ===''){
        alert("the form in unfilled please check once");
        return;
    }
    setList([...list,data])
    setData({
        username:'',
        phonenumber:'',
    })
}

const editable = v => {
setData({
username:v.username,
phonenumber :v.phonenumber,
})
return
}
    const deletable = (r) =>{
        const remove = list.filter((element, index) => r !== index)
        setList(remove)
    }

  return (
    <div>
        <center>
            <form onSubmit ={submitHandler}>
                <h2>ToDo-List</h2>
               <input style={{"borderRadius":"10px","height":"30px"}} type="text" name="username" value={username} placeholder="username" onChange={changeHandler}/>
               <input style={{"marginLeft":"10px","borderRadius":"10px","height":"30px"}} type="number" name="phonenumber" value={phonenumber} placeholder="mobilenumber" onChange={changeHandler}/>
               <input style={{"marginLeft":"10px","borderRadius":"10px","height":"30px","backgroundColor":"green"}} type="submit" name="Add"/><br/>
            </form>
            <ul>
                {list.map((item,id)=>(
                    <div key={id}>
                        <li>
                            <h2>{item.username}</h2>
                            <h2>{item.phonenumber}</h2>
                        </li>
                        <button type="edit" name="editable" onClick={() =>editable(item)}>edit</button>
                        <button style={{"marginLeft":"10px"}} type="delete" name="deletable" onClick={() =>deletable(id)}>delete</button>
                    </div>
                ))}
            </ul>
        </center>
    </div>
  )
}

  

export default Todolist;
