export type CreatePostCommand = {
  postId:string,
  author:string,
  title:string
}

export type AddCommentCommand = {
  commentId:string,
  postId:string,
  author:string,
  content:string
}

export interface Usuario{
  id : string;
  name: string;
  email: string;
  picture: string;
}