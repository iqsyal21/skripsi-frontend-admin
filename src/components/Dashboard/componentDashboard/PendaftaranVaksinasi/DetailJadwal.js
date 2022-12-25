import React from "react";
import Modal from "react-bootstrap/Modal";

const DetailJadwal = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Cek Detail Jadwal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Tanggal Vaksinasi : {props.dataJadwal.tanggal_vaksinasi.split("T")[0]}
        </p>
        <p>
          Nama Jenis Vaksin :{" "}
          {props.dataJadwal.stokvaksin
            ? `${props.dataJadwal.stokvaksin.nama_jenis_vaksin}`
            : "data tidak sesuai, segera update atau hapus"}
        </p>
        <p>
          Kuota :{" "}
          {props.dataJadwal.stokvaksin
            ? `${
                props.dataJadwal.stokvaksin.jumlah_stok -
                props.dataJadwal.stokvaksin.jumlah_digunakan
              }`
            : "data tidak sesuai, segera update atau hapus"}
        </p>
        <p>Keterangan : {props.dataJadwal.keterangan}</p>
      </Modal.Body>
    </div>
  );
};

export default DetailJadwal;
