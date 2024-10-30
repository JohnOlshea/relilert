import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation RegisterUser($user: Auth!) {
    registerUser(user: $user) {
      user {
        id
        username
        email
      }
      notifications {
        id
        groupName
        emails
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      user {
        id
        username
        email
      }
      notifications {
        id
        groupName
        emails
      }
    }
  }
`;

export const AUTH_SOCIAL_USER = gql`
  mutation AuthSocialUser($user: Auth!) {
    authSocialUser(user: $user) {
      user {
        id
        username
        email
      }
      notifications {
        id
        groupName
        emails
      }
    }
  }
`;