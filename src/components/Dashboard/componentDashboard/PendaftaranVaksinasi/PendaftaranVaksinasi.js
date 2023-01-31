import React, { useState, useEffect } from "react";
import axios from "axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import DetailPendaftaran from "./DetailPendaftaran";
import ListMenungguKonfirmasi from "./ListMenungguKonfirmasi";
import ListDiterima from "./ListDiterima";
import ListDitolak from "./ListDitolak";

const PendaftaranVaksinasi = () => {
  // config headers
  const url = "http://localhost:5000/api";
  let token = sessionStorage.getItem("token");
  let config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  // state modal detail
  const [showDetailPendaftaran, setShowDetailPendaftaran] = useState(false);
  const [detailIdPendaftaran, setDetailIdPendaftaran] = useState(null);
  const handleCloseDetailPendaftaran = () => {
    setDetailIdPendaftaran("");
    setShowDetailPendaftaran(false);
  };
  const handleShowDetailPendaftaran = (id) => {
    setDetailIdPendaftaran(id);
    setShowDetailPendaftaran(true);
  };

  // get data pendaftaran
  const [dataPendaftaran, setDataPendaftaran] = useState([]);
  const getDataPendaftaran = () => {
    axios.get(url + "/pendaftaran", config).then((res) => {
      setDataPendaftaran(res.data);
    });
  };
  useEffect(() => {
    getDataPendaftaran();
  }, []);

  return (
    <div className="container-content">
      {/* modal detail */}
      <Modal show={showDetailPendaftaran} onHide={handleCloseDetailPendaftaran}>
        <DetailPendaftaran
          link={url}
          idPendaftaran={detailIdPendaftaran}
          config={config}
          token={token}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDetailPendaftaran}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* end modal detail */}
      <h3>List Data Pendaftaran Vaksinasi</h3>
      <hr />
      <Tabs
        defaultActiveKey="waiting"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="waiting" title="Menunggu Konfirmasi">
          <ListMenungguKonfirmasi dataPendaftaran={dataPendaftaran} showDetail={handleShowDetailPendaftaran.bind(this)} />
        </Tab>
        <Tab eventKey="approve" title="Diterima">
          <ListDiterima dataPendaftaran={dataPendaftaran} showDetail={handleShowDetailPendaftaran.bind(this)} />
        </Tab>
        <Tab eventKey="reject" title="Ditolak">
          <ListDitolak dataPendaftaran={dataPendaftaran} showDetail={handleShowDetailPendaftaran.bind(this)} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PendaftaranVaksinasi;