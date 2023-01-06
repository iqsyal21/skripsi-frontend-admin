import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const TambahStok = (props) => {
  const { register, handleSubmit } = useForm();
  // post tambah stok vaksin
  const tambahStok = (data) => {
    if (data.stok <= 0) {
      return alert("stok tidak sesuai");
    }

    axios
      .post(props.link + "/stok", data, props.config)
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
        <Modal.Title>Form Tambah Stok Vaksin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(tambahStok)}>
          <Form.Group className="mb-3" controlId="tanggal">
            <Form.Label>Tanggal Masuk</Form.Label>
            <Form.Control
              type="date"
              {...register("tanggal", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="jenis">
            <Form.Label>Nama Jenis Vaksin</Form.Label>
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
          <Form.Group className="mb-3" controlId="stok">
            <Form.Label>Jumlah Stok</Form.Label>
            <Form.Control
              type="number"
              {...register("stok", { required: true })}
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

export default TambahStok;
