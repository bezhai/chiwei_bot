import React from "react";
import { Card, Typography, styled } from "@mui/material";
import { PixivImageInfoWithUrl } from "../common/types/image";
import DetailCardMedia from "./DetailCardMedia";

const PREFIX = "ImagesDetailCard";
const classes = {
  card: `${PREFIX}-card`,
};

const DetailCardRoot = styled(Card)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  width: "80%",
  maxWidth: "1200px",
  height: "800px",
  zIndex: 1000,
  boxShadow: theme.shadows[5],
  flexDirection: "row",
  alignItems: "center", 
  borderRadius: "10px"
}));

const DetailCardMediaContainer = styled("div")({
  height: "100%", 
  width: "50%",
  display: "flex",
  alignItems: "center", 
  justifyContent: "flex-start",
  overflow: "hidden"
});

const DetailCardContent = styled("div")({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "auto",
});

const Backdrop = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色
  zIndex: 999, // 确保它在卡片下面
});

interface ImageDetailCardProps extends PixivImageInfoWithUrl {
  onClose: () => void;
}

const ImageDetailCard: React.FC<ImageDetailCardProps> = ({
  onClose,
  ...imageInfo
}) => {
  return (
    <>
    <Backdrop onClick={onClose}/>
    <DetailCardRoot className={classes.card}>
      <DetailCardMediaContainer>
        <DetailCardMedia url={imageInfo.url} title={imageInfo.title} />
      </DetailCardMediaContainer>
      <DetailCardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {imageInfo.title || "无题"}
        </Typography>
        <Typography variant="body1" component="h2">
          {imageInfo.author || "无题"}
        </Typography>
      </DetailCardContent>
    </DetailCardRoot>
    </>
  );
};

export default ImageDetailCard;
