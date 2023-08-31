import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://task-pro-covc.onrender.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Board'],
  endpoints: builder => ({
    getBoards: builder.query({
      query: () => `board`,
      providesTags: ['Board'],
    }),
    getBoardById: builder.query({
      query: boardId => ({ url: `board/${boardId}` }),
      providesTags: ['Board'],
    }),
    addBoard: builder.mutation({
      query: ({ data }) => ({
        url: `board`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    updateBoard: builder.mutation({
      query: ({ boardId, data }) => ({
        url: `board/${boardId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    deleteBoard: builder.mutation({
      query: ({ boardId }) => ({
        url: `board/${boardId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Board'],
    }),
    boardFilter: builder.mutation({
      query: ({ boardId, priotity }) => ({
        url: `board/filter/${boardId}/${priotity}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Board'],
    }),
    addColumn: builder.mutation({
      query: ({ boardId, data }) => ({
        url: `column/${boardId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    updateColumn: builder.mutation({
      query: ({ data }) => ({
        url: `column`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    deleteColumn: builder.mutation({
      query: ({ data }) => ({
        url: `column`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    addCard: builder.mutation({
      query: ({ boardId, data }) => ({
        url: `card/${boardId}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    updateCard: builder.mutation({
      query: ({ boardId, data }) => ({
        url: `card/${boardId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    deleteCard: builder.mutation({
      query: ({ boardId, data }) => ({
        url: `card/${boardId}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
    replaceCard: builder.mutation({
      query: ({ boardId, data }) => ({
        url: `card/${boardId}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Board'],
    }),
  }),
});

export const {
  useGetBoardsQuery,
  useGetBoardByIdQuery,
  useAddBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
  useBoardFilterMutation,
  useAddColumnMutation,
  useUpdateColumnMutation,
  useDeleteColumnMutation,
  useAddCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
  useReplaceCardMutation,
} = boardsApi;
