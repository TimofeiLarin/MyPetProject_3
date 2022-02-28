import { useDispatch, useSelector } from 'react-redux';
import { inputText } from './redux/action';
// import { inputReducer } from './redux/inputReducer';

function Title(props) {
  console.log('prpos title', props);
  const text = useSelector((state) => {
    console.log(state);
    const { inputReducer } = state;
    return inputReducer.text;
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };
  return (
    <div className='card-title'>
      <div className='card-title-top'>
        <input type='text' onChange={handleChange} />
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Title;
