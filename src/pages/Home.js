import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { popupAction } from '../redux/actions/uiActions';
import { TERMS_AND_CONDITIONS_POPUP } from '../constants';

const style = {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center'
}

const HomePage = () => {
  const dispatch = useDispatch();
  
  const popupHandler = () => {
    dispatch(popupAction(TERMS_AND_CONDITIONS_POPUP));
  }

  return <div style={style}>
    <Button onClick={popupHandler}>Show Popup</Button>
  </div>;
};

export default HomePage;
