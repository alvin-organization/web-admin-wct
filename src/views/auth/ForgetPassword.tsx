import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import FormInput from "../../components/FormInput";

import AuthLayout from "./AuthLayout";

const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-white-50">
          {t("Back to")}{" "}
          <Link to={"/auth/login"} className="text-white ms-1">
            <b>{t("Log in")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const ForgetPassword = () => {
  return (
    <>
      <AuthLayout
        helpText={
          "Enter your email address and we'll send you an email with instructions to reset your password."
        }
        bottomLinks={<BottomLink />}
      >
        <>
          <FormInput
            label={"Username"}
            type="text"
            name="username"
            placeholder={"Enter your username"}
            containerClass={"mb-3"}
          />

          <div className="d-grid text-center">
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </div>
        </>
      </AuthLayout>
    </>
  );
};

export default ForgetPassword;
