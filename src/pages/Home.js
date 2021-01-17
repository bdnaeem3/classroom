import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import SelectElement from '../components/SelectElement';
import { popupAction } from '../redux/actions/uiActions';
import { TERMS_AND_CONDITIONS_POPUP } from '../constants';

const style = {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const area = ["Dhaka", "Barishal", "Rangpur", "Boruga", "Jamalpur", "Norsingdi", "Chittagong", "Swarupkathi"]

const HomePage = () => {
  const dispatch = useDispatch();
  
  const popupHandler = () => {
    dispatch(popupAction(TERMS_AND_CONDITIONS_POPUP));
  }

  return <div style={style}>
    <Button onClick={popupHandler}>Show Popup</Button>
    <SelectElement className="mt-3" items={area}/>
  </div>;
};

export default HomePage;
