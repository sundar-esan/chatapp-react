import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//define a service user base url 

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://chatapi-q2o1.onrender.com'
    }),
    
    endpoints: (builder) =>({
        //creating the user
        signupUser: builder.mutation({
            query: (user) =>({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),
        //login the users
        loginUser: builder.mutation({
            query: (user) =>({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),
        //logout the users
        logoutUser: builder.mutation({
            query: (payload) =>({
                url: "/logout",
                method: "DELETE",
                body: payload,
            }),
        }),
    }),
});

export const {useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation } = appApi;

export default appApi;