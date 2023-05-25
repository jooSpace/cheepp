import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardPost } from '../store/store'

const AiBoardBox = () => {

    const dispatch = useDispatch();
    const { boardPost, isLoading, error } = useSelector((state) => state.boardPost)
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);


    useEffect(() => {
        dispatch(getBoardPost());
    }, [dispatch])

    return (
        <div>
            {
                boardPost.map((board,i) => {
                    return (
                        <div key={i}>
                            {board.title}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default AiBoardBox;
