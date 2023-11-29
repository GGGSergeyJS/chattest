import React, { useEffect, useMemo, useRef, useState } from "react";
// import Counter from "./components/Counter";
// import Timer from "./components/Timer";
// import Input from "./components/Input";
// import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/select/MySelect";
// import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
// import axios from "axios";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/loader/MyLoader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import MyPagination from "./components/UI/pagination/MyPagination";

function App() {
    // const [posts, setPosts] = useState([
    //     { id: 1, title: "aaaa", body: "ZZZZ" },
    //     { id: 2, title: "gggg", body: "zzzz" },
    //     { id: 3, title: "AAAA", body: "HHHH" },
    //     { id: 4, title: "GGGG", body: "hhhh" },
    // ]);

    // const [posts, setPosts] = useState([]);

    // const [title, setTitle] = useState("");
    // const bodyInputRef = useRef();
    // const [body, setBody] = useState("");
    // const [post, setPost] = useState({ title: "", body: "" });
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

    // const [selectedSort, setSelectedSort] = useState("");

    // const [searchQuery, setSearchQuery] = useState("");

    // const [filter, setFilter] = useState({ sort: "", query: "" });

    // const [modal, setModal] = useState(false);

    // const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    // function getSortedPosts() {
    //     console.log("отработала функция сортировка постов");
    //     if (selectedSort) {
    //         return [...posts].sort((a, b) =>
    //             a[selectedSort].localeCompare(b[selectedSort])
    //         );
    //     }
    //     return posts;
    // }

    // const sortedPosts = getSortedPosts(); // Перерендер на каждое изменение, нужен useMemo
    // const sortedPosts = useMemo(() => {
    //     console.log("отработала функция сортировка постов");

    //     if (selectedSort) {
    //         return [...posts].sort((a, b) =>
    //             a[selectedSort].localeCompare(b[selectedSort])
    //         );
    //     }
    //     return posts;
    // }, [selectedSort, posts]);

    // const sortedPosts = useMemo(() => {
    //     console.log("отработала функция сортировка постов");

    //     if (filter.sort) {
    //         return [...posts].sort((a, b) =>
    //             a[filter.sort].localeCompare(b[filter.sort])
    //         );
    //     }
    //     return posts;
    // }, [filter.sort, posts]);

    // const sortedAndSearchedPosts = useMemo(() => {
    //     return sortedPosts.filter((post) =>
    //         post.title.toLowerCase().includes(searchQuery.toLowerCase())
    //     );
    // }, [searchQuery, sortedPosts]);

    // const sortedAndSearchedPosts = useMemo(() => {
    //     return sortedPosts.filter((post) =>
    //         post.title.toLowerCase().includes(filter.query.toLowerCase())
    //     );
    // }, [filter.query, sortedPosts]);

    // const createPost = (newPost) => {
    //     setPosts([...posts, newPost]);
    //     setModal(false);
    // };

    // Получаем post из дочернего компонента
    // const removePost = (post) => {
    //     setPosts(posts.filter((p) => p.id !== post.id));
    // };

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    //     // console.log(sort);
    //     // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    // };

    // return (
    //     <div className="App">
    //         {/* <ClassCounter /> */}
    //         {/* <Input /> */}
    //         {/* <Counter /> */}
    //         {/* <Timer /> */}
    //         {/* <PostItem /> */}
    //         <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
    //             Создать пользователя
    //         </MyButton>
    //         <MyModal visible={modal} setVisible={setModal}>
    //             <PostForm create={createPost} />
    //         </MyModal>
    //         {/* <PostForm create={createPost} /> */}
    //         {/* <PostList remove={removePost} posts={posts} title="Посты про JS" /> */}
    //         <hr style={{ margin: "15px 0" }} />
    //         <div>
    //             {/* <MyInput
    //                 value={searchQuery}
    //                 onChange={(e) => setSearchQuery(e.target.value)}
    //                 placeholder="Поиск..."
    //             /> */}
    //             {/* <select>
    //                 <option value="value1">По названию</option>
    //                 <option value="value1">По описанию</option>
    //             </select> */}
    //             {/* <MySelect
    //                 value={selectedSort}
    //                 onChange={sortPosts}
    //                 defaultValue="Сортировка"
    //                 options={[
    //                     { value: "title", name: "По названию" },
    //                     { value: "body", name: "По описанию" },
    //                 ]}
    //             /> */}
    //         </div>
    //         <PostFilter filter={filter} setFilter={setFilter} />
    //         {/* {sortedAndSearchedPosts.length ? (
    //             <PostList
    //                 remove={removePost}
    //                 posts={sortedAndSearchedPosts}
    //                 title="Посты про JS"
    //             />
    //         ) : (
    //             <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
    //         )} */}
    //         <PostList
    //             remove={removePost}
    //             posts={sortedAndSearchedPosts}
    //             title="Посты про JS"
    //         />
    //     </div>
    // );

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    // const [isPostsLoading, setIsPostsLoading] = useState(false);

    // const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    //     const posts = await PostService.getAll();
    //     setPosts(posts);
    // });

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);

    // let pagesArray = [];
    // for (let i = 0; i < totalPages; i++) {
    //     pagesArray.push(i + 1);
    // }
    // console.log(pagesArray);

    // let pagesArray = getPagesArray(totalPages);

    // console.log(pagesArray);

    // const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    //     const response = await PostService.getAll(limit, page);
    //     setPosts(response.data);
    //     // console.log(response.headers["x-total-count"]);
    //     const totalCount = response.headers["x-total-count"];
    //     // setTotalPages(response.headers["x-total-count"]);
    //     setTotalPages(getPageCount(totalCount, limit));
    // });

    const [fetchPosts, isPostsLoading, postError] = useFetching(
        async (limit, page) => {
            const response = await PostService.getAll(limit, page);
            setPosts(response.data);
            // console.log(response.headers["x-total-count"]);
            const totalCount = response.headers["x-total-count"];
            // setTotalPages(response.headers["x-total-count"]);
            setTotalPages(getPageCount(totalCount, limit));
        }
    );

    // console.log(totalPages);

    useEffect(() => {
        fetchPosts(limit, page);
        console.log("use effect working");
    }, []);

    // useEffect(() => {
    //     fetchPosts();
    //     console.log("use effect working");
    // }, []);

    // useEffect(() => {
    //     fetchPosts();
    //     console.log("use effect working");
    // }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    // async function fetchPosts() {
    //     const response = await axios.get(
    //         "https://jsonplaceholder.typicode.com/posts"
    //     );
    //     console.log(response.data);
    //     console.log(response);
    //     setPosts(response.data);
    // }

    // async function fetchPosts() {
    //     setIsPostsLoading(true);
    //     setTimeout(async () => {
    //         const posts = await PostService.getAll();
    //         setPosts(posts);
    //         setIsPostsLoading(false);
    //     }, 1000);
    // }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
    };

    return (
        <div className="App">
            {/* <MyButton onClick={fetchPosts}>Get posts</MyButton> */}
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: "15px 0" }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading ? (
                // <h1>Идет загрузка...</h1>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 50,
                    }}
                >
                    <MyLoader />
                </div>
            ) : (
                <PostList
                    remove={removePost}
                    posts={sortedAndSearchedPosts}
                    title="Посты про JS"
                />
            )}
            {/* <div style={{ marginTop: 30, marginBottom: 30 }}>
                {pagesArray.map((p) => (
                    <MyButton style={{ marginRight: 5 }}>{p}</MyButton>
                ))}
            </div> */}
            {/* <div className="page__wrapper">
                {pagesArray.map((p) => (
                    <span
                        // onClick={() => setPage(p)}
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? "page page__current" : "page"}
                    >
                        {p}
                    </span>
                ))}
            </div> */}

            {/* <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Посты про JS"
            /> */}
            <MyPagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default App;
