import { Modal } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';

// Constants
import { TERMS_AND_CONDITIONS_POPUP } from '../../constants';

// Popups
import TermsAndConditionsPopup from './TermsAndConditionsPopup';

// Redux Actions
import { popupAction } from '../../redux/actions/uiActions';

const Popups = () => {
  console.log('Popups')

  const dispatch = useDispatch()
  const ui = useSelector(state=>state.ui)

  const closePopupHandler = () => {
    dispatch(popupAction(""))
  }

  return (
    <Modal isOpen={true} className="modal-dialog-centered" toggle={closePopupHandler}>
      {
        ui.popupName === TERMS_AND_CONDITIONS_POPUP &&
        <TermsAndConditionsPopup closePopupHandler={closePopupHandler}/>
      }
    </Modal>
  )
}

export default Popups;