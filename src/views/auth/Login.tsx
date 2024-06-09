import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormInput from "../../components/FormInput";
import classNames from "classnames";
import AuthLayout from "./AuthLayout";
import { CoreRoutes } from "../../router/route";

const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p>
          <Link to={"/auth/forget-password"} className="text-white-50 ms-1">
            {t("Forgot your password?")}
          </Link>
        </p>
        <p className="text-white-50">
          {t("Don't have an account?")}{" "}
          <Link to={"/auth/register"} className="text-white ms-1">
            <b>{t("Sign Up")}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const SocialLinks = () => {
  const socialLinks = [
    {
      variant: "primary",
      icon: "facebook",
    },
    {
      variant: "danger",
      icon: "google",
    },
    {
      variant: "info",
      icon: "twitter",
    },
    {
      variant: "secondary",
      icon: "github",
    },
  ];
  return (
    <>
      <ul className="social-list list-inline mt-3 mb-0">
        {(socialLinks || []).map((item, index: number) => {
          return (
            <li key={index} className="list-inline-item">
              <Link
                to="#"
                className={classNames(
                  "social-list-item",
                  "border-" + item.variant,
                  "text-" + item.variant
                )}
              >
                <i className={classNames("mdi", "mdi-" + item.icon)}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <AuthLayout
        helpText={t(
          "Enter your email address and password to access admin panel."
        )}
        bottomLinks={<BottomLink />}
      >
        <FormInput
          label={t("Username")}
          type="text"
          name="username"
          placeholder="Enter your Username"
          containerClass={"mb-3"}
        />
        <FormInput
          label={t("Password")}
          type="password"
          name="password"
          placeholder="Enter your password"
          containerClass={"mb-3"}
        ></FormInput>

        <div className="text-center d-grid">
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              navigate(CoreRoutes.DASHBOARD);
            }}
          >
            {t("Log In")}
          </Button>
        </div>

        <div className="text-center">
          <h5 className="mt-3 text-muted">{t("Sign in with")}</h5>
          <SocialLinks />
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
