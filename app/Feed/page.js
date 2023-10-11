'use client'
import { Navbar } from "@/components"
import {Post} from "@/components"
import { useSelector } from "react-redux"
import { SelectAllPosts } from "@/redux/posts/postSlice"
export default function FeedPage() {


    const posts = useSelector(SelectAllPosts);
    console.log(posts);
    return (
        <>
            <Navbar />
            <div style={{ paddingTop: 30 }}>

                {posts?.length > 0 ? (
                    <div>
                        {posts.map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                    </div>
                ) :
                    <div>
                        There are no posts
                    </div>
                }



            </div>
        </>
    )
}


