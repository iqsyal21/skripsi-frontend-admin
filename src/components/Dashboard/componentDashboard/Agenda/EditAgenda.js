import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const EditAgenda = (props) => {
  // edit agenda
  const { register, handleSubmit } = useForm();
  
  const editAgenda = (data) => {
    // cek validasi tanggal
    const localDate = new Date().toISOString().split("T")[0];
    if (data.tanggal < localDate) {
      return alert("tanggal tidak sesuai, sudah terlewati");
    }

    axios
      .put(props.link + "/agenda/" + props.idAgenda, data, props.config)
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
        <Modal.Title>Form Edit Agenda</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(editAgenda)}>
          <Form.Group className="mb-3" controlId="tanggal">
            <Form.Label>Tanggal</Form.Label>
            <Form.Control
              type="date"
              {...register("tanggal", { required: true })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="keterangan">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              type="text"
              {...register("keterangan", { required: true })}
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

export default EditAgenda;
