import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import undraw_login from "../../images/undraw_login.svg";
import FullHeight from "react-full-height";

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  if (sessionStorage.getItem("token")) {
    history.push("/dashboard");
    window.location.reload();
  }

  const onLogin = (data) => {
    axios
      .post("http://localhost:5000/api/admin/login", data)
      .then((response) => {
        if (response.status_akun === false) {
          alert(response.msg);
          history.push("/verifikasi");
          return sessionStorage.setItem("idAdmin", response.id);
        }
        sessionStorage.setItem("token", response.token);
        history.push("/dashboard");
      })
      .catch((error) => {
        alert(error.msg);
      });
  };

  return (
    <FullHeight startWidth={1024}>
      <div className="bg-container-akun">
        <div className="container-login">
          <div className="box-form-login">
            <Form onSubmit={handleSubmit(onLogin)}>
              <h2 className="text-center mb-2">Form Login</h2>
              <br />
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register("email", { required: true })}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", { required: true })}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <div className="text-center mt-4">
              <p>
                belum punya akun ?{" "}
                <span onClick={() => props.ubahState(false)}>buat akun</span>
              </p>
            </div>
          </div>
          <div className="box-form-img-login">
            <div className="img-box-flex">
              <Image src={undraw_login} alt="logo login" fluid />
            </div>
          </div>
        </div>
      </div>
    </FullHeight>
  );
};

export default Login;
