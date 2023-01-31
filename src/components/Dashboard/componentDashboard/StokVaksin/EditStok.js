import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const EditStok = (props) => {
  const { register, handleSubmit } = useForm();

  // put edit stok vaksin
  const editStok = (data) => {
    if (data.stok <= 0) {
      return alert("stok tidak sesuai");
    }
    if (data.digunakan < 0) {
      return alert("jumlah digunakan tidak sesuai");
    }
    if (data.stok < data.digunakan) {
      return alert("stok tidak boleh lebih kecil dari jumlah digunakan");

    }
    axios
      .put(props.link + "/stok/" + props.idArtikel, data, props.config)
      .then((response) => {
        alert(response.msg);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.msg);
      });
  };
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Form Edit Stok Vaksin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(editStok)}>
          <Form.Group className="mb-3" controlId="tanggal">
            <Form.Label>Tanggal Masuk</Form.Label>
            <Form.Control
              type="date"
              {...register("tanggal", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jenis">
            <Form.Label>Nama Jenis Vaksin :</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Sinovac"
                value="Sinovac"
                type="radio"
                {...register("jenis", { required: true })}
              />
              <Form.Check
                inline
                label="Astrazeneca"
                value="Astrazeneca"
                type="radio"
                {...register("jenis", { required: true })}
              />
              <Form.Check
                inline
                label="Pfizer"
                value="Pfizer"
                type="radio"
                {...register("jenis", { required: true })}
              />
              <Form.Check
                inline
                label="Janssen"
                value="Janssen"
                type="radio"
                {...register("jenis", { required: true })}
              />
              <Form.Check
                inline
                label="Covovax"
                value="Covovax"
                type="radio"
                {...register("jenis", { required: true })}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="tipe">
            <Form.Label>Tipe Vaksin :</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Vaksin 1"
                value="1"
                type="radio"
                {...register("tipe", { required: true })}
              />
              <Form.Check
                inline
                label="Vaksin 2"
                value="2"
                type="radio"
                {...register("tipe", { required: true })}
              />
              <Form.Check
                inline
                label="Vaksin Booster"
                value="3"
                type="radio"
                {...register("tipe", { required: true })}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="stok">
            <Form.Label>Jumlah Stok</Form.Label>
            <Form.Control
              type="number"
              {...register("stok", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="digunakan">
            <Form.Label>Jumlah Digunakan</Form.Label>
            <Form.Control
              type="number"
              {...register("digunakan", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default EditStok;
