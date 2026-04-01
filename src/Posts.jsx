import {Suspense} from "react";
import {use} from "react";
import Post from "./Post.jsx"

export default function Posts({postMakers}){
    const posts = use(postMakers);
    // console.log(posts);
    return(
        <>
            <h2>All posts are here</h2>
            <Suspense>
                {posts.map(p => <Post key={p.id} postMaker={p}></Post>)}
            </Suspense>
        </>
    )
}