import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isCommentsLoading, commentsError] = useFetching(
        async (id) => {
            const response = await PostService.getCommentsByPostId(id);
            setComments(response.data);
        }
    );

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div className="comments">
            <h1>Вы открыли страницу поста с ID №{params.id}</h1>
            {isLoading ? (
                <MyLoader />
            ) : (
                <div>
                    {post.id}. {post.title}
                </div>
            )}
            <h1>Комментарии:</h1>
            {isCommentsLoading ? (
                <MyLoader />
            ) : (
                <div>
                    {comments.map((comment) => (
                        <div style={{ marginTop: 10 }} key={comment.id}>
                            <h3>{comment.email}</h3>
                            <div>{comment.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
