import axios from "axios";
import UseFetch from "./UseFetch"
import {useParams} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const BlogDetails =() =>{

    const {id} = useParams()
    const{data:blogs}= UseFetch('http://localhost:4000/blogs/' + id)
    const history = useHistory();

    const handleDelete =(e) =>{
        e.preventDefault()

        axios.delete('http://localhost:4000/blogs/' + id)
        .then(res=>{
            alert("blog deleted")
            history.push('/')
        })
    }

return(

<div className="details">


    {blogs && (
<article>
  <h3>{blogs.title}</h3>
  <p> Done by: {blogs.author}</p>
  <div>{blogs.body}</div>
  <Button onClick={handleDelete} variant="primary">Delete</Button>

</article>

    )}

</div>


);

}

export default BlogDetails;