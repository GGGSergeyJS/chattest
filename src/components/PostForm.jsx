import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: "", body: "" });

    // const addNewPost = (e) => {
    //     e.preventDefault();
    //     // console.log(title);
    //     // console.log(bodyInputRef.current.value);
    //     // console.log(bodyInputRef.current);
    //     // const newPost = {
    //     //     id: Date.now(),
    //     //     title,
    //     //     body,
    //     // };
    //     // console.log(newPost);
    //     // setPosts([...posts, newPost]);
    //     setPosts([...posts, { ...post, id: Date.now() }]);
    //     // setTitle("");
    //     // setBody("");
    //     setPost({ title: "", body: "" });
    // };

    const addNewPost = (e) => {
        e.preventDefault();
        // setPosts([...posts, { ...post, id: Date.now() }]);
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ title: "", body: "" });
    };

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;
