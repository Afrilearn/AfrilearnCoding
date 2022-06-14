import React from 'react'

const FaqCard = ({faqData}) => {
  console.log(faqData)
  return (
    <div className='card-main-wrapper'>
          {faqData && faqData.map((faq) => 
            <div className="card-holder">
              <h1>{faq.title}</h1>
               <p>{faq.description}</p>
            </div>
          )}
    </div>
  )
}

export default FaqCard