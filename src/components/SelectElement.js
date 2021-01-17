import { useState, useEffect, useRef } from 'react';
import { Input } from 'reactstrap';

const SelectElement = props => {

  const ref = useRef(null);
  const { items, ...rest } = props;
  
  const [ showOptions, setShowOptions ] = useState(false);
  const [ selectValue, setSelectValue ] = useState("");
  const [ filteredItems, setFilteredItems ] = useState([]);
  const [ placeholder, setPlaceholder ] = useState("Choose Pickup Area")

  // Search in options
  const searchHandler = e => {
    setSelectValue(e.target.value);
  }

  // Showing option when clicked on Input
  const showOptionsHandler = () => {
    setShowOptions(true)
  }

  // Selecting Options
  const selectHanlder = e => {
    setSelectValue(e.target.innerHTML)
    setShowOptions(false)
  }

  // Click outside of select element tracking
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowOptions(false)
      setPlaceholder("Choose Pickup Area")
    } else {
      setPlaceholder("Choose Pickup Area")
    }
  };

  // Outside clicking event handler
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  // Filtering items upon change on input type
  useEffect(() => {
    setFilteredItems(items.filter(item => {
      return item.toLowerCase().indexOf(selectValue.toLowerCase()) !== -1;
    }))
  }, [selectValue, items])

  return (
    <div className="select-element" ref={ref} {...rest}>
      <Input type="text" value={selectValue} placeholder={placeholder} onClick={showOptionsHandler} onChange={searchHandler}/>
      
      {
        showOptions &&
        <ul>
          {filteredItems.map((area, i)=>{
            return <li key={i} onClick={selectHanlder}>{area}</li>
          })}
        </ul>
      }
    </div>
  )
}

export default SelectElement;