import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import "./listItem.scss";

export default function ListItem({index}, {index4}) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = 
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    style4={{left: isHovered && index * 225 -50 + index4 * 2.5}} 
    onMouseEnter = {() => setIsHovered(true)} 
    onMouseLeave = {() => setIsHovered(false)}
    >
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqFiep8pA8Oqe-X_ndFE4Yjl0JfC7ZQCd3qxmjmkyjaCmOuoLNPpZY5F3511OyyqUn0lb3rkVo-qPLvgm2UAxMy0DWhBlIjfstHu76OqLYTlkBCnUHYe6LeDNNtNNSUHKBjIx8rImKKSdjPwzFTJnFm3PqnZmY5wW8qqF5z7LbPx-Wn1sFkViqy_5hpA/s320/denoise_WhatsApp_Image_2023-01-25_at_07.50.42__1_%20(1).jpeg" 
        alt="" />
        {isHovered && (
          <>
          <video src={trailer} autoPlay={true} loop/>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>

            <div className="itemInfoTop">
              <span>1 hr 14mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis provident, repellendus animi natus architecto.
            </div>
            <div className="genre">Action</div>
          </div></>
        )}
    </div>
  )
}
