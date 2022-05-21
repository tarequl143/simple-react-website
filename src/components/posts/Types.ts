export type PostsProps = {
  date: string;
  posts: PostProps[];
};

export type PostProps = {
  uuid: string;
  external_id: string;
  external_url: string;
  timestamp: string;
  text: string;
  media_urls: string[];
  thumbnail_url: string | null;
  content_platform: string;
  content_type: string;
  content_form: string;
  likes: number | null;
  comments?: string | null;
  is_active_on_zelf: boolean;
  is_active_on_zelf_detail: {
    is_active_on_zelf: boolean;
    is_available_on_platform: boolean;
    is_active_on_zelf_consolidated: boolean;
  };
  account: string;
  creator: string;
};
