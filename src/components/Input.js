import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams
} from "react-router-dom";
import ArenaChannel from "./ArenaChannel"

function Input() {

  const [url,setUrl]=useState("/hello");
  const [slug,setSlug]=useState("hello");
  const [submit,setSubmit]=useState(0);

  const handleChange = (e) =>{
    setUrl("/"+e.target.value);
    setSlug(e.target.value);
    setSubmit(submit+1);
  }

  return (
    <Router>
    <form>
      <label>Paste in your Are.na Channel Slug</label>
      <input type="text" name="slug" onChange={handleChange} />

      <a href={url} >Button1 (a tag)</a>
      <Link to= {url} >Button2 (link to)</Link>
      <Switch>
      <Route path="/:id" children={<Child />} />
      </Switch>
    </form>
    </Router>
  )
}
export default Input;

function Child(props) {
  let { id } = useParams();
  return (
    <div>
    <h1>{id}</h1>
    <ArenaChannel slug={id} />
    </div>
  );
}
