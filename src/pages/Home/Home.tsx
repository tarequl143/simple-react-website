import axios from "axios";
import { useEffect, useState } from "react";
import { IconButton } from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import InfoBar from "../../components/InfoBar/InfoBar";
import Loading from "../../components/Loading/Loading";
import MediaTitle from "../../components/MediaTitle/MediaTitle";
import Posts from "../../components/posts/posts";
import { PostProps } from "../../components/posts/Types";
import Search from "../../components/Search/Search";
import UserProfile from "../../components/UserProfile/UserProfile";
import {
  ContentContainer,
  ContentContainerRow,
} from "../../GlobalStyledElements";
import { LoadingIconSvg, PostsIconSvg, ReelIconSvg } from "../../icons";
import {
  HomeMediaButtons,
  HomeMediaTabs,
  HomePageInnerContent,
  HomePagePostsWrapper,
  HomePageWrapper,
  HomeProfileWrapper,
  NoResult,
} from "./Styles";

const Home = () => {
  const [userData, setUserData] = useState<any>({});
  const [allPosts, setAllPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://plato-dev.onrender.com/api/v1/Creator/public/?username=hellozelf",
      )
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    setLoading(true);
    if (userData?.connected_accounts?.instagram?.uuid) {
      axios
        .get(
          `https://plato-dev.onrender.com/api/v1/Instagram/${userData?.connected_accounts?.instagram?.uuid}/contents/`,
        )
        .then((res) => {
          setAllPosts(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, [userData?.connected_accounts?.instagram?.uuid]);

  return (
    <HomePageWrapper>
      <Header />
      <InfoBar info="Easily license organic content from creators on all major platforms." />
      <HomePageInnerContent>
        <ContentContainer>
          <HomeProfileWrapper>
            <UserProfile
              name={userData?.name || userData?.username || "Untitled Name"}
              title={userData?.text || "Untitled Designation"}
              img={
                userData?.profile_picture_url ||
                "https://via.placeholder.com/300"
              }
            />
          </HomeProfileWrapper>
          <Search
            placeholder="Search photo, video content from Layla"
            background="white"
            width="630px"
            height="55px"
          />
          <HomeMediaTabs>
            <MediaTitle title="Instagram" mediaCount={allPosts?.length || 0} />
            <MediaTitle title="Tiktok" mediaCount={0} />
            <MediaTitle title="Pinterest" mediaCount={0} />
            <MediaTitle title="Youtube" mediaCount={0} />
          </HomeMediaTabs>
          <HomeMediaButtons>
            <IconButton text="Posts" icon={<PostsIconSvg />} isActive={true} />
            <IconButton text="reels" icon={<ReelIconSvg />} />
          </HomeMediaButtons>
          {loading ? (
            <Loading text={"Content Loading..."} icon={<LoadingIconSvg />} />
          ) : allPosts?.length > 0 ? (
            <HomePagePostsWrapper>
              <ContentContainerRow>
                <Posts date="January, 2022" posts={allPosts} />
              </ContentContainerRow>
            </HomePagePostsWrapper>
          ) : (
            <NoResult>Sorry, no result found!</NoResult>
          )}
        </ContentContainer>
      </HomePageInnerContent>
    </HomePageWrapper>
  );
};

export default Home;
