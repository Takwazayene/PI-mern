import {useQuery} from '@apollo/react-hooks'
import {Grid,Transition} from 'semantic-ui-react'
import PostCard from './PostCard'
import "../../styles/user/post.css";
import PostForm from '../../components/chat/PostForm'
import {FETCH_POSTS_QUERY} from '../../util/graphql'
import {loginUserfind, selectConnectuser, } from "../../redux/slices/userSlice";
import {useDispatch ,useSelector } from "react-redux";
import gql from 'graphql-tag';

function MyPosts() {
    const [connectUser, error] = useSelector(selectConnectuser);
    const user  = connectUser.id ;
    //console.log(user);
    //const { loading, data } = useQuery(FETCH_POSTS_QUERY);

    //const { getPosts: posts } = data ? data : [];


    const { loading,
        data: {  getPostByUser: posts} ={},}
       = useQuery(FETCH_My_POST_QUERY, {
        variables: {
            user
        }
      });


    return(
        <Grid columns={3} >
           <Grid.Row className="page-title">
               <h1>Recent Posts</h1>
               </Grid.Row>  
    <Grid.Row>
    <Grid.Column>
        <PostForm />
      </Grid.Column> 
    {loading ? (
        <h1>loading posts...</h1>
    ): (
     
            posts && posts.map((post)=> (
              <Grid.Column key={post.id} style = {{marginBottom:20}}>
              <PostCard post = {post} />
  
              </Grid.Column>
          ))
      
    )}
    </Grid.Row>
    </Grid>
    );
}












const FETCH_My_POST_QUERY = gql`
  query($user: String!) {
    getPostByUser(user: $user) {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default MyPosts ;