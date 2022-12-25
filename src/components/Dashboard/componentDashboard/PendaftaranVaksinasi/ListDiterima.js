import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const ListDiterima = (props) => {
  const pendaftaranTrueStatus = props.dataPendaftaran.filter(
    (item) => item.status_pendaftaran === true
  );

  let no = 1;
  return (
    <Table bordered hover className="text-center">
      <thead className="table-primary">
        <tr>
          <th>No</th>
          <th>NIK</th>
          <th>Telepon</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {pendaftaranTrueStatus.map((item) => (
          <tr key={item.id_pendaftaran_vaksinasi}>
            <td>{no++}</td>
            <td>{item.nik}</td>
            <td>{item.telepon}</td>
            <td>
              <Button
                variant="primary"
                className="mx-2"
                onClick={() => props.showDetail(item.id_pendaftaran_vaksinasi)}
              >
                Detail
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ListDiterima;
