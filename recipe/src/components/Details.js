// import { Popup } from 'react-easy-popup';
// import 'react-easy-popup/dist/react-easy-popup.min.css';
// import { useState } from "react";
// let Id = 0;

const Details = (props) => {
    // const showModal = props.showModal;
    // const setShowModal = props.setShowModal;

    const closeDetails = () => {
        props.setShowModal(false);
    }
    // let Num = 0;
    // const ingredientsList = props.ingredients.map((item) => 
    //     <li key={props.name + ++Num}>{item}</li>
    // );

    return (

        <div className={props.showModal === true? 'details' : 'hidden'}>
            {/* <h4 className="Name">{props.name}</h4> */}
                {/* <div className="ingredients">
                    {ingredientsList}
                </div> */}
                <div className="description">
                    <h3>description</h3>
                    <ul className="description">
                        {props.des}
                        {/* {props.description} */}
                    </ul>
                    <button value="Close" className="btn" onClick={closeDetails}>Close</button>
                </div>
            
        </div>
        
    );
    }
    
export default Details;

//       const showModal = props.showModal;
//     const setShowModal = props.setShowModal;
//   return (
//     <>
//       <button onClick={() => closeDetails(false)}>close</button>
//       <Popup maskClosable visible={showModal} onClose={() => setShowModal(false)}>
//         <Details />
//       </Popup>
//     </>
//   );

// }
 
