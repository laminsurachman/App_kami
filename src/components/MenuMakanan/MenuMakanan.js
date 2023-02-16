import React from "react";

// nama function diawali lowercase
// var menuMakanan = () => {
// return (
// <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
/* <p>Nama Menu: Ayam Bakar</p> */
/* <p>Harga: Rp. 25.000</p> */
/* </div> */

// );
// };

// var menuMakanan = (props) => {
// return (
// <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
{
  /* <p>Nama Menu: {props.namaMenu}</p> */
}
{
  /* <p>Harga: Rp. {props.hargaMenu} </p> */
}
{
  /* <p>Stock : {props.stock}</p> */
}
{
  /* </div> */
}
// );
// };
// export default menuMakanan;
//
var menuMakanan = (props) => {
  if (props.stock !== 0) {
    return (
      <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
        <p>Nama Menu: {props.namaMenu}</p>
        <p>Harga: Rp. {props.hargaMenu}</p>
        <p>Stock: {props.stock}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default menuMakanan;
