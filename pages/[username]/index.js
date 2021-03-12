import PostFeed from "../../components/PostFeed";
import UserProfile from "../../components/UserProfile";
import { getUserWithUsername } from "../../lib/firebase";
import postToJSON from "../../lib/firebase";

const UserProfilePage = ({ user, posts }) => {
  return (
    <main>
      <UserProfile user={user} />
      <PostFeed posts={posts} />
    </main>
  );
};
export default UserProfilePage;

export const getServerSideProps = async ({ query }) => {
  console.log(query);
  const { username } = query;
  console.log(query, username);
  const userDoc = await getUserWithUsername(username);

  let user = null;
  let posts = null;

  if (userDoc) {
    console.log(userDoc);
    user = userDoc.data();
    const postsQuery = userDoc.ref
      .collection("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .limit(5);
    posts = (await postsQuery.get()).docs.map((doc) => postToJSON(doc));
  }

  return { props: { user, posts } };
};
