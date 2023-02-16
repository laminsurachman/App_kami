import React, { Component } from "react";
import "./App.css";
import MenuMakanan from "./components/MenuMakanan/MenuMakanan";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman";

class App extends Component {
  constructor() {
    super();
    this.state = {
      namaResto: "Rahman Cafe",
      namaPembeli: "",
      keterangan: "",
      jenisPembayaran: "",
      menuMakanan: [
        { nama: "Ayam Bakar", harga: 25000, stock: 10 },
        { nama: "Nasi Goreng", harga: 22000, stock: 0 },
        { nama: "Nasi gudeg", harga: 22000, stock: 5 },
      ],
      menuMinuman: [
        { id: 1, nama: "Juice Melon", harga: 15000 },
        { id: 2, nama: "Milkshake Strawberry", harga: 20000 },
        { id: 3, nama: "Juice Tomat", harga: 15000 },
        { id: 4, nama: "Juice Mangga", harga: 15000 },
        { id: 5, nama: "Juice Alpukat", harga: 15000 },
      ],
    };
  }

  // handleGantiNama = () => {

  // this.setState({ namaResto: "Programmer" });
  // };
  handleGantiNama = (nama) => {
    this.setState({ namaResto: nama });
  };

  handleChangeNamaPembeli = (event) => {
    this.setState({ namaPembeli: event.target.value });
  };

  handleChangeKeterangan = (event) => {
    this.setState({ keterangan: event.target.value });
  };

  handleChangeJenisPembayaran = (event) => {
    this.setState({ jenisPembayaran: event.target.value });
  };

  render() {
    return (
      <div className="App">
        {/* <button onClick={this.handleGantiNama}>Ganti Nama Resto</button> */}
        <button
          className="btn btn-primary"
          onClick={() => this.handleGantiNama("Cipedes")}
        >
          Ganti nama Resto
        </button>
        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-md-4 offset-md-4">
            <form>
              <div className="form-group">
                <label>Nama Pembeli: </label>
                <input
                  className="form-control"
                  name="namaPembeli"
                  onChange={this.handleChangeNamaPembeli}
                  value={this.state.namaPembeli}
                />
                <small>Nama Pembeli: {this.state.namaPembeli}</small>
                <br />
                <label>Keterangan: </label>
                <textarea
                  className="form-control"
                  name="keterangan"
                  onChange={this.handleChangeKeterangan}
                  value={this.state.keterangan}
                />
                <small>Keterangan: {this.state.keterangan}</small>
                <br />
                <label>Jenis Pembayaran:</label>
                <select
                  className="form-control"
                  name="jenisPembayaran"
                  value={this.state.value}
                  onChange={this.handleChangeJenisPembayaran}
                >
                  <option value="cash">Cash</option>
                  <option value="kartuKredit">Kartu Kredit</option>
                  <option value="voucher">Voucher</option>
                </select>
                <small>Jenis Pembayaran: {this.state.jenisPembayaran}</small>
              </div>
            </form>
          </div>
        </div>
        <h1>Cafe and Resto {this.state.namaResto}</h1>
        <h2 className="header-menu">Menu Makanan</h2>
        <MenuMakanan
          namaMenu={this.state.menuMakanan[0].nama}
          hargaMenu={this.state.menuMakanan[0].harga}
          stock={this.state.menuMakanan[0].stock}
        />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[1].nama}
          hargaMenu={this.state.menuMakanan[1].harga}
          stock={this.state.menuMakanan[1].stock}
        />
        <MenuMakanan
          namaMenu={this.state.menuMakanan[2].nama}
          hargaMenu={this.state.menuMakanan[2].harga}
          stock={this.state.menuMakanan[2].stock}
        />

        <h2>Menu Minuman</h2>
        {/* { array.map(elementArray => reactElement/reactComponent )}  */}
        {/* <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={15000} /> */}
        {/* <MenuMinuman namaMenu={"Milkshake Strawberry"} hargaMenu={20000} /> */}
        {/* <MenuMinuman namaMenu={"teh es"} hargaMenu={10000} /> */}
        {this.state.menuMinuman.map((menu) => (
          <MenuMinuman
            key={menu.id}
            namaMenu={menu.nama}
            hargaMenu={menu.harga}
          />
        ))}
      </div>
    );
  }
}

export default App;
