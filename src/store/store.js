import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getBoardPost = createAsyncThunk('GET/getboardpost', 
    async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const boardPost = await response;
            console.log("boardPost", boardPost);
            return boardPost.data;
        }
        catch (error) {
            console.log(error);
        }
    }
)

export const boardPostSlice = createSlice({
    name : 'boardPostSlice',
    initialState : {
        boardPost : [],
        isLoading : false,
        error : null
    },
    extraReducers: (builder) => {
        builder.addCase(getBoardPost.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getBoardPost.fulfilled, (state, action) => {
            state.isLoading = false;
            state.boardPost = action.payload;
        })
        builder.addCase(getBoardPost.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        })
    }
})


export default configureStore({
    reducer : {
        boardPost : boardPostSlice.reducer
    }
})