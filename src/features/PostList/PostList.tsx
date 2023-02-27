import './PostList.css';
import { Post } from '../../entites/Post';
import { useSelector } from '../../shared/hooks';

export const PostList = () => {
    const { list } = useSelector(store => store.postStore);

    return (
        <ul className="post-list">
            {list && list.map((item) => <Post key={item.id} {...item}/>)}
        </ul>
    )
};