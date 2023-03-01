import './Post.css';

type Config = {
    avatarPath: string;
    userName: string;
    createdBy: string;
    createdAt: string;
    message: string;
    imgPath?: string;
};

export const Post = ({
    avatarPath, userName, createdBy, createdAt, message, imgPath
}: Config) => {
    return (
        <li className="post">
            <img className="post__avatar" src={avatarPath} alt="avatar" />
            <div className="post__content">
                <div className="post__header">
                    <div className="post__details">
                        <h2 className="post__user-name">{userName}</h2>
                        <p className="post__account-name">{createdBy}</p>
                        <p className="post__created-date">{createdAt}</p>
                    </div>
                    <p className="post__message">{message}</p>
                </div>
                {imgPath && <img className="post__picture" src={imgPath} alt="post" />}
            </div>
        </li>
    )
}