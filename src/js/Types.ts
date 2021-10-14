type Preset = {
  name:string,
  value:string,
  isActive:boolean,
  id:string
};

type SendPreset = {
  name:string,
  query:string,
};

type Content = JSX.Element | JSX.Element[];

type Article = {
  rendered_body:string
  body:string
  coediting:boolean
  comments_count:number
  created_at:string
  group?:any
  id:string
  likes_count:number
  private:boolean
  reactions_count:number
  tags:any[]
  title:string
  updated_at:string
  url:string
  user:any
  page_views_count:null | number
  team_membership?:any
};