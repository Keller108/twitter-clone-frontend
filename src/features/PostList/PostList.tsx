import './PostList.css';
import AVATAR_PATH from './assets/profile_img.png';
import IMG_PATH from './assets/pic-twit-1.jpg';
import { Post } from '../../entites/Post';

export const PostList = () => {
    const items = [
        {
            avatarPath: AVATAR_PATH,
            userName: "Devon Lane",
            accountName: "@joedude",
            createdAt: "~1 hour ago",
            message: "Tom is in a big hurry.",
            imgPath: IMG_PATH
        }
    ]
    return (
        <ul className="post-list">
            {items.map((item) => <Post {...item}/>)}
        </ul>
    )
};