import React from 'react';
import { Button, Card, Icon, Label, Image  } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {useDispatch ,useSelector } from "react-redux";
import {loginUserfind, selectConnectuser, } from "../../redux/slices/userSlice";
import  LikeButton from './LikeButton' ;
import DeleteButton from './DeleteButton'
import MyPopup from '../../util/MyPopup';

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const [connectUser, error] = useSelector(selectConnectuser);

  function likePost(){
    console.log('like post !')
  }
  function commentOnPost(){
    console.log("comment on post")
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://image.freepik.com/vetores-gratis/servico-de-entrega-com-design-de-ilustracao-de-mascara_23-2148506988.jpg"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/homeuser/user/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={connectUser} post ={{id, likes,likeCount}}/>
       <MyPopup content="comment on post">
       <Button  labelPosition='right' as={Link} to={`/homeuser/user/posts/${id}`}>
                <Button color='blue' basic>
                  <Icon name='comments' />
                  
                </Button>
                <Label  basic color='blue' pointing='left'>
                {commentCount}
                </Label>
              </Button> 

         </MyPopup>

 
        {connectUser.username === username && 
         <DeleteButton postId={id}/>
   }
     </Card.Content>
    </Card>
  );
}

export default PostCard;