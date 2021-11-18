import React, { useEffect, useState } from "react";
import { styled, connect } from "frontity";
import { theme } from "../../assets/styles/theme";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { getFeaturedImageUrl } from "../utils/images";
import ImageSkeleton from "../shared/ImageSkeleton";
import { cx, css } from "@emotion/css";
import Title from "../shared/Title";

const OverLapContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;

  * {
    opacity: 0;
    transform: translateY(-10px);
    color: ${theme.colors.black};
  }
`;

const imageStatus = css`
  transition: all 1s ease-in-out;
  opacity: 0;
  height: 100%;

  &.isLoaded {
    opacity: 1;
  }
`;

const linkBlock = css`
  display: block;
`;

const GridImage = ({ item, maxSize = 1600, libraries, state }) => {
  const [featuredUrl, setFeaturedUrl] = useState(null);
  const [loading, setIsLoading] = useState(true);

  const fetchMedia = async (mediaId) => {
    const requestFeaturedMedia = await libraries.source.api.get({
      endpoint: `/wp/v2/media/${mediaId}`,
    });
    const image = await requestFeaturedMedia.json();
    state.source.data["attachments"] = {
      ...state.source.data["attachments"],
      [mediaId]: { ...image },
    };
    return image;
  };

  const handleImage = async () => {
    const existAttachments = Object.keys(state.source.data).includes(
      "attachments"
    );
    if (!existAttachments) {
      state.source.data["attachments"] = {};
    }
    const imageId = `${item.featured_media}`;
    const isImageCached = Object.keys(
      state.source.data["attachments"]
    ).includes(imageId);
    const image = isImageCached
      ? state.source.data["attachments"][item.featured_media]
      : await fetchMedia(item.featured_media);
    setFeaturedUrl(getFeaturedImageUrl(image.media_details.sizes, maxSize));
  };

  useEffect(() => {
    item && handleImage();
  }, [item]);

  return (
    <>
      <ImageSkeleton isLoading={loading} />
      <Link link={item?.link} className={linkBlock}>
        {!loading && (
          <OverLapContent className="overlap">
            <Title level={3}>{item?.title.rendered}</Title>
          </OverLapContent>
        )}
        <div
          className={cx(imageStatus, {
            ["isLoaded"]: !loading,
          })}
        >
          {featuredUrl && (
            <Image
              alt={item.title.rendered}
              loading="lazy"
              src={featuredUrl.url}
              onLoad={() => setIsLoading(false)}
            />
          )}
        </div>
      </Link>
    </>
  );
};

export default connect(GridImage);
