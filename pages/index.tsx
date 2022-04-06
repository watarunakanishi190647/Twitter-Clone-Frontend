import Head from "next/head";
import styles from "../styles/Home.module.css";
// import ClientOnly from "../components/ClientOnly";
import { useQuery, useMutation } from "@apollo/client";
import { CREATE_POST, DELETE_POST } from "../graphql/queries";
import BlogPosts from "../components/BlogPosts";
import Container from '@material-ui/core/Container'
import SubmitTweetPostForm from '../components/SubmitTweetPostForm'

export default function ClientSide() {

  const [createPost] = useMutation(CREATE_POST, {
    onCompleted: (data) => {
      window.location.reload();
    }
  });

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.body.value)
    createPost({ variables: { body: e.target.body.value}})
  }

  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: (data) => {
      window.location.reload();
    },
  });

  const onDelete = (id) => deletePost({ variables: { id } });

  return (
    <Container maxWidth="xs" >
      <Head>
        <title>Twitter</title>
      </Head>

      <main>
        <h1>Twitter</h1>
        {/* <ClientOnly> */}
          <SubmitTweetPostForm onSubmit={onSubmit} />
          <BlogPosts onDelete={onDelete} />
        {/* </ClientOnly> */}
      </main>
    </Container>
  );
}