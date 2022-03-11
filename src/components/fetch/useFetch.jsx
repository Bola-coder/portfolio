import React, {useState, useEffect} from 'react'

const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("")
          .then((res) => {
            res.json()
            console.log(res)
          })
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      });
    return ( 
        <>
        </>
     );
}
 
export default useFetch;