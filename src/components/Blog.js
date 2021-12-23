import { Link } from "react-router-dom";

const Blog = (props) => {
    const id = props.match.params.id;
    return ( 
        <div>
            <h2> blog detail - {id} </h2>
            <Link to={`/blogs/${parseInt(id) + 1}`}>
                <p> Go to next blog page ! </p>
            </Link>
        </div>
     );
}
 
export default Blog;