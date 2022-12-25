import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailJadwal from "./DetailJadwal";
import TerimaPendaftaran from "./TerimaPendaftaran";
import TolakPendaftaran from "./TolakPendaftaran";
import CekDataWarga from "./CekDataWarga";

const DetailPendaftaran = (props) => {
  // cek data warga berdasarkan  nik
  const [showCekNik, setSmShowCekNik] = useState(false);
  const [dataWarga, setDataWarga] = useState([]);
  const getDataWarga = (nik) => {
    axios
      .get(props.link + "/warga/nik/" + nik, props.config)
      .then((res) => {
        setDataWarga(res.data);
        setSmShowCekNik(true);
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  // cek detail jadwal
  const [showCekJadwal, setSmShowCekJadwal] = useState(false);
  const [dataJadwal, setDataJadwal] = useState([]);
  const getJadwal = (idJadwal) => {
    axios
      .get(props.link + "/jadwal/" + idJadwal, props.config)
      .then((res) => {
        setDataJadwal(res.data);
        setSmShowCekJadwal(true);
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  // menerima pendaftaran
  const [idPendaftaran, setIdPendaftaran] = useState(null);

  const [showTerima, setSmShowTerima] = useState(false);
  const handleCloseTerima = () => {
    setIdPendaftaran("");
    setSmShowTerima(false);
  };
  const handleShowTerima = (id) => {
    setIdPendaftaran(id);
    setSmShowTerima(true);
  };

  // menolak pendaftaran
  const [showTolak, setSmShowTolak] = useState(false);
  const handleCloseTolak = () => {
    setIdPendaftaran("");
    setSmShowTolak(false);
  };
  const handleShowTolak = (id) => {
    setIdPendaftaran(id);
    setSmShowTolak(true);
  };

  //  get detail data pendaftaran
  const [dataPendaftaran, setDataPendaftaran] = useState([]);
  const getDataPendaftaran = () => {
    axios
      .get(props.link + "/pendaftaran/" + props.idPendaftaran, props.config)
      .then((res) => {
        setDataPendaftaran(res.data);
      });
  };
  useEffect(() => {
    getDataPendaftaran();
  }, []);

  return (
    <div>
      {/* modal cek data warga */}
      <Modal
        size="sm"
        show={showCekNik}
        onHide={() => setSmShowCekNik(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <CekDataWarga dataWarga={dataWarga} />
      </Modal>
      {/* end modal cek data warga */}
      {/* modal detail jadwal */}
      <Modal
        size="sm"
        show={showCekJadwal}
        onHide={() => setSmShowCekJadwal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <DetailJadwal dataJadwal={dataJadwal} />
      </Modal>
      {/* end modal detail jadwal */}
      {/* modal menerima pendaftaran */}
      <Modal
        size="sm"
        show={showTerima}
        onHide={() => handleCloseTerima(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <TerimaPendaftaran
          link={props.link}
          token={props.token}
          idPendaftaran={idPendaftaran}
        />
      </Modal>
      {/* end modal menerima pendaftaran */}
      {/* modal menolak pendaftaran */}
      <Modal
        size="sm"
        show={showTolak}
        onHide={() => handleCloseTolak(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <TolakPendaftaran
          link={props.link}
          token={props.token}
          idPendaftaran={idPendaftaran}
        />
      </Modal>
      {/* end modal menolak pendaftaran */}
      <Modal.Header closeButton>
        <Modal.Title>Detail Pendaftaran</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table bordered striped="columns">
          <tbody>
            <tr>
              <Row>
                <Col sm={4} className="py-2">
                  <td>NIK</td>
                </Col>
                <Col sm={5} className="py-2">
                  <td>: {dataPendaftaran.nik}</td>
                </Col>
                <Col sm={3}>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => getDataWarga(dataPendaftaran.nik)}
                    >
                      Cek NIK
                    </Button>
                  </td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Profesi</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataPendaftaran.profesi}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Telepon</td>
                </Col>
                <Col sm={8}>
                  <td>: {dataPendaftaran.telepon}</td>
                </Col>
              </Row>
            </tr>
            <tr>
              <Row>
                <Col sm={4}>
                  <td>Jadwal Yang Dipilih</td>
                </Col>
                <Col sm={5}>
                  <td>: {dataPendaftaran.id_jadwal_vaksinasi}</td>
                </Col>
                <Col sm={3}>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() =>
                        getJadwal(dataPendaftaran.id_jadwal_vaksinasi)
                      }
                    >
                      Cek Jadwal
                    </Button>
                  </td>
                </Col>
              </Row>
            </tr>
          </tbody>
        </Table>
        {dataPendaftaran.status_pendaftaran === null ? (
          <div>
            <Button
              variant="outline-success"
              className="mx-2"
              onClick={() =>
                handleShowTerima(dataPendaftaran.id_pendaftaran_vaksinasi)
              }
            >
              Terima
            </Button>
            <Button
              variant="outline-danger"
              className="mx-2"
              onClick={() =>
                handleShowTolak(dataPendaftaran.id_pendaftaran_vaksinasi)
              }
            >
              Tolak
            </Button>
          </div>
        ) : (
          ""
        )}
      </Modal.Body>
    </div>
  );
};

export default DetailPendaftaran;
