import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const TerimaPendaftaran = (props) => {
  const { register, handleSubmit } = useForm();
  const kirimPemberitahuan = (data) => {
    const formData = new FormData();
    formData.append("idPendaftaran", props.idPendaftaran)
    formData.append("keterangan", data.keterangan);
    formData.append("status", true);

    fetch(props.link + "/pemberitahuan", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + props.token,
      },
    })
      .then((res) => res.json())
      .then((resjson) => {
        alert(resjson.msg);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Modal.Header closeButton />
      <Modal.Body>
        <h6>anda menerima pendaftaran</h6>
        <p>
          silahkan masukkan keterangan bagi pendaftar untuk melanjutkan proses
          penerimaan
        </p>
        <br />
        <Form onSubmit={handleSubmit(kirimPemberitahuan)}>
          <Form.Group className="mb-3" controlId="keterangan">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control
              type="text"
              {...register("keterangan", { required: true })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Kirim
          </Button>
        </Form>
      </Modal.Body>
    </div>
  );
};

export default TerimaPendaftaran;
