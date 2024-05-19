import { useState,useEffect } from "react";

function Hooks() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      });

return(
    <div>
      <h1>I've rendered {count} times!</h1>;
      <h1>I've rendered {count} times!</h1>;
      <h1>I've rendered {count} times!</h1>;
      <hr />
  </div>
    );
    }

export default Hooks;