
const PostPage = (props) => {
const id = props.match.params.id || 1 ;
    return ( 
        <div>
            <h2> Post detail - {id} </h2>
            <div>
                <p>
                {JSON.stringify(props.match.params)}
                </p>
            </div>
        </div>
     );
}
 
export default PostPage;