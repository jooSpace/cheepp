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
        <table>
            <thead>
                <tr>
                    <th colSpan="2">The table header</th>
                </tr>
            </thead>
            <tbody>
            {
                boardPost.map((board,i) => {
                    return (               
                        <tr key={i}>
                            <td>{board.title}</td>
                            {/* <td>with two columns</td> */}
                        </tr>                           
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default AiBoardBox;
