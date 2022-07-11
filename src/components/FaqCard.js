import React, { useState} from 'react';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const FaqCard = ({faqData}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleItem = (id) => {
    if(selectedItem === id){
      return setSelectedItem(null)
    }

    setSelectedItem(id)
  }
  return (
    <div className='card-main-wrapper'>
          {faqData && faqData.map((faq) => 
            <div className="card-holder">
              <div
                  className='card-title-holder' 
                  onClick={() => toggleItem(faq.id)}
                  >
                  <h1>{faq.title}</h1>
                  <span>{selectedItem === faq.id ? <MdOutlineKeyboardArrowDown size={30} /> : <MdOutlineKeyboardArrowUp size={30}/>}</span>
              </div>
              <div className={selectedItem === faq.id ? 'content-show' : 'content'}>
                  <p>{ faq.description}</p>
              </div>
            </div>
          )}
    </div>
  )
}

export default FaqCard