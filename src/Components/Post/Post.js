import Divider from '../Divider';
import ImageCarousel from '../ImageCarousel';
import PostText from '../PostText';

function Post() {
  return (
    <div className='post-wrapper'>
      <PostText />
      <Divider />
      <ImageCarousel />
    </div>
  );
}

export default Post;
