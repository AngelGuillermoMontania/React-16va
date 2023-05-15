import { useState } from "react";

export default function Paginado({ page, setPage, totalPages }) {
  //   [1,2,|3|,4,5,6,7,8]

  //   [35,36,37,38,39,|40|,41,42]

  // [14,15,16,17,18,|19|,20,21,22,23,24]

  const arrayButtons = [];

  /*   for (let i = page - 1; i < page + 5; i++) {
    if (i > 0 && i <= 42) {
      arrayButtons.push(i);
    }
  } */

  // setPage(300)

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "20px 0",
      }}
    >
      {/* {arrayButtons &&
        //   [35,36,37,38,39,|40|,41,42]
        arrayButtons.map((nroButton) => {
          return (
            <button
              onClick={() => {
                console.log(nroButton);
                setPage(nroButton);
              }}
              style={{ margin: "0 5px" }}
            >
              {nroButton}
            </button>
          );
        })} */}
      <button onClick={setPage(1)}>1</button>
      <button onClick={setPage(2)}>2</button>
      <button onClick={setPage(3)}>3</button>
    </div>
  );
}
