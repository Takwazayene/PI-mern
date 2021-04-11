import react from 'react';
import {Form,Button} from 'semantic-ui-react';
import {useForm} from '../../util/hooks'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks';
import {FETCH_POSTS_QUERY} from '../../util/graphql'


function PostForm() {

    const {values,onChange,onSubmit} = useForm(createPostCallback,{
        body:''
    }) ;

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        
        update(proxy, result) {
            //eli ffel cache yet7at lkol fel vriable data heka najmou nchoufou les données jdod sans refraicher la page
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY,
                variables: values
              });
              data.getPosts = [result.data.createPost, ...data.getPosts];
              proxy.writeQuery({ query: FETCH_POSTS_QUERY,  variables: values,data });
              values.body = '';
            
        }
      });
      function createPostCallback() {
        createPost();
      }

    return (
        <Form onSubmit={onSubmit}>
          <h2>Create a post :</h2>
          <Form.Field>
              <Form.Input
                placeholder="Hi world!"
                name="body"
                onChange={onChange}
                value={values.body}
                 />
              <Button type="submit" color="teal">
                  Submit
              </Button>

             


          </Form.Field>


        </Form>
    )


}
const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username 
      likes {
        id
        username
        createdAt
      }
      
      comments {
        id
        body
        username
        createdAt
      }  
    
    }
  }
`;
export default PostForm