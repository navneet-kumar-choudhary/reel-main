// import React from "react";
// import react, { useState } from "react";

// export default function Test2Ans() {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");

//     const onNameChange = (e) => {
//         setName(e.target.value);
//     };
//     const onAgeChange = (e) => {
//         setAge(e.target.value);
//     };
//     return (
//         <>
//             <form>
//                 <input type="text" value={name} onChange={onNameChange} />
//                 <input type="text" value={age} onChange={onAgeChange} />
//                 <h2>
//                     Name:{name}, Age:{age}
//                 </h2>
//             </form>
//         </>
//     );
// }

// import React, { useState, useEffect } from "react";

// export default function Test2Ans(event, handler, passive = false) {
//     useEffect(() => {
//         // initiate the event handler
//         window.addEventListener(event, handler, passive);

//         // this will clean up the event every time the component is re-rendered
//         return function cleanup() {
//             window.removeEventListener(event, handler);
//         };
//     });
// }

// import React, { useState, useEffect } from "react";
// export default function Hooks() {
//     const [count, setCount] = useState(0);
//     function fn() {
//         console.log("Boom");
//     }

//     useEffect(fn);

//     return (
//         <>
//             <div>
//                 {" "}
//                 <button onClick={()=>{setCount(count + 1)}}>{count}</button>
//             </div>
//         </>
//     );
// }

import React, { createContext, useContext } from "react";
const MyContext = createContext(1);
const MyComponent = () => (
    <>
        <p>{useContext(MyContext)}</p>
        <MyContext.Provider value={2}>
            <p>{useContext(MyContext)}</p>
        </MyContext.Provider>
    </>
);
export default MyComponent;
