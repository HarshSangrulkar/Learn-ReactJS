import Axios from "axios";
import { useEffect, useState } from "react";

function F1() {
  const [data, setData] = useState([]);

  //we need to place HTTPS request inside the life cycles methods
  //but, as we are working with functions there is no lifecyles methods
  //Instead we have a concept called Hooks which handles the HTTP request
  //useEffect() method is used to handle the side effects

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          //200 -> OK
          console.log(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListNames = () => {
    return data.map((val) => {
      return <h1>{val.name}</h1>;
    });
  };

  return (
    <div>
      <h1>Hello</h1>
      {ListNames()}
    </div>
  );
}

export default F1;
