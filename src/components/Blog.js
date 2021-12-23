import { Link } from "react-router-dom";
import queryString from "query-string";

const Blog = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);
    const id = match.params.id;

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