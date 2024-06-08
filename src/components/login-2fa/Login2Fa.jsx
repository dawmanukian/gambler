import React, { useState } from "react";
import classes from "./login2fa.module.css";
import { useForm } from "react-hook-form";
import locked from "../../locked-with-key.png";
import face from "../../frowning-face-with-open-mouth.png";

const Login2Fa = ({ onClose, showError }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = () => {};
  console.log(showError, 'err')

  return (
    <div className={classes.page}>
      {showError ? (
        <div className={classes.form_err}>
          <div className={classes.close}>
            <button
              className={classes.close_btn}
              onClick={(evn) => {
                evn.preventDefault();
                onClose();
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L1 15"
                  stroke="#F3E7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1 1L15 15"
                  stroke="#F3E7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div className={classes.form_header}>
            <img src={face} alt="waving-hand" height={"30px"} width={"30px"} />
            <p className={classes.welcome}>Ошибка</p>
          </div>
          <p className={classes.info}>Неверный логин, пароль или 2FA код</p>
          <div className={classes.inpts}>
            <button
              className={classes.login}
              onClick={(evn) => {
                evn.preventDefault();
                onClose();
              }}
            >
              ЗАКРЫТЬ
            </button>
          </div>
        </div>
      ) : (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.close}>
            <button
              className={classes.close_btn}
              onClick={(evn) => {
                evn.preventDefault();
                onClose();
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L1 15"
                  stroke="#F3E7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M1 1L15 15"
                  stroke="#F3E7FF"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
          <div className={classes.form_header}>
            <img
              src={locked}
              alt="waving-hand"
              height={"30px"}
              width={"30px"}
            />
            <p className={classes.welcome}>Подтверждение входа</p>
          </div>
          <p className={classes.info}>Для входа в панель авторизуйтесь</p>
          <div className={classes.inpts}>
            <div>
              <div
                className={classes.box}
                style={errors.facode ? { border: "1px solid #FF4E43" } : null}
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.73832 0C4.90194 0 2.57944 2.31529 2.57944 5.14286V7.71429C1.14866 7.71429 0 8.85938 0 10.2857V16.7143C0 17.4275 0.574328 18 1.28972 18H14.1869C14.9023 18 15.4766 17.4275 15.4766 16.7143V10.2857C15.4766 8.85938 14.328 7.71429 12.8972 7.71429V5.14286C12.8972 2.31529 10.5747 0 7.73832 0ZM7.73832 2.57143C9.18925 2.57143 10.3178 3.69643 10.3178 5.14286V7.71429H5.15888V5.14286C5.15888 3.69643 6.28738 2.57143 7.73832 2.57143Z"
                    fill="#F3E7FF"
                    fill-opacity="0.5"
                  />
                </svg>
              </div>
              <input
                style={errors.facode ? { border: "1px solid #FF4E43", borderLeft: "none" } : null}
                className={classes.inpt}
                type="password"
                placeholder="Введите 2FA код"
                {...register("facode", { required: true })}
              />
            </div>
            <button className={classes.login}>ВОЙТИ</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login2Fa;
