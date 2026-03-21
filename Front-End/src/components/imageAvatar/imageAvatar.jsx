import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import DefaultImage from "../../assets/DefaultImage.png"

function ImageAvatar({ imageURL, name = "User" }) {
  const [image, setImage] = useState(imageURL);

  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt={name}
        src={image || DefaultImage}
        onError={() => setImage(null)}
        sx={{ width: 150, height: 150 }} 
      >
        {!image && name[0]} {/*Name initial as fallback*/}
      </Avatar>
    </Stack>
  );
}

export default ImageAvatar;