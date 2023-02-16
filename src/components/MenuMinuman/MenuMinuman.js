import { Component } from "react";

// nama function diawali lowercase
// var menuMinuman = () => {
// return (
// <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
/* <p>Nama Menu: Es Jeruk</p> */
/* <p>Harga: Rp. 8.000</p> */
/* </div> */
// );
// };

// nama class diawali huruf kapital (uppercase)
class MenuMinuman extends Component {
  render() {
    return (
      <div style={{ border: "1px solid black", width: 300, margin: "auto" }}>
        <p>Nama Menu: {this.props.namaMenu}</p>
        <p>Harga: Rp. {this.props.hargaMenu}</p>
      </div>
    );
  }
}

export default MenuMinuman;
