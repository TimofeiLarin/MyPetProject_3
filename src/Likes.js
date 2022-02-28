import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from './redux/action';

function Likes(props) {
  const { likes } = props;
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrementLikes}>
        Like{likes.likes > 0 && `: ${likes.likes} 👍`}
      </button>
      <button onClick={props.onDecrementLikes}>
        Dislike{likes.likes < 0 && `: ${likes.likes} 👎`}
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    likes: state.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
