import React from "react";
import Modal from "react-bootstrap/Modal";

const CekDataWarga = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Cek NIK</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>NIK : {props.dataWarga.nik}</p>
        <p>Nama Lengkap : {props.dataWarga.nama_lengkap}</p>
        <p>Tempat Tanggal Lahir : {props.dataWarga.tempat_tanggal_lahir}</p>
        <p>Alamat : {props.dataWarga.alamat}</p>
        <p>Jenis Kelamin : {props.dataWarga.jenis_kelamin}</p>
        <p>
          Status Covid19:{" "}
          {props.dataWarga.status_covid19 === true ? "Positif" : "Negatif"}
        </p>
        <p>
          Donor Plasma:{" "}
          {props.dataWarga.donor_plasma === true
            ? "Diizinkan"
            : "Tidak Diizinkan"}
        </p>
      </Modal.Body>
    </div>
  );
};

export default CekDataWarga;
