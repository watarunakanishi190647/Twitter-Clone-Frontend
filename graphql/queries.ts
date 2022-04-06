import { gql } from "@apollo/client";

export const GET_BLOGPOSTS = gql`
  query GetBlogPosts {
    posts {
      id
      body
    }
   }
`;


export const CREATE_POST = gql`
 mutation CreatePost($body: String!) {
  createPost(input: {body: $body}) {
    post {
      id
      body
    }
  }
}
`;

export const DELETE_POST = gql`
 mutation DeletePost($id: ID!) {
   deletePost(input: {id: $id}) {
   post {
      id
      body
    }
   }
  }
`;