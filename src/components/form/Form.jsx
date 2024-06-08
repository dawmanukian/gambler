import React from "react";
import classes from "./form.module.css";
import hand from "../../waving-hand.png";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.form_header}>
        <img src={hand} alt="waving-hand" height={"30px"} width={"30px"} />
        <p className={classes.welcome}>Добро пожаловать в GAMBLER</p>
        <div className={classes.mob_text}>
          <p className={classes.welcome}>Добро пожаловать</p>
          <p className={classes.welcome}>в GAMBLER</p>
        </div>
      </div>
      <p className={classes.info}>Для входа в панель авторизуйтесь</p>
      <div className={classes.inpts}>
        <div>
          <div
            className={classes.box}
            style={errors.login ? { border: "1px solid #FF4E43" } : null}
          >
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 9C11.4853 9 13.5 6.98528 13.5 4.5C13.5 2.01472 11.4853 0 9 0C6.51472 0 4.5 2.01472 4.5 4.5C4.5 6.98528 6.51472 9 9 9Z"
                fill="#F3E7FF"
                fill-opacity="0.5"
              />
              <path
                d="M18 17.4375C18 20.2335 18 22.5 9 22.5C0 22.5 0 20.2335 0 17.4375C0 14.6415 4.02943 12.375 9 12.375C13.9706 12.375 18 14.6415 18 17.4375Z"
                fill="#F3E7FF"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <input
            style={errors.login ? { border: "1px solid #FF4E43" } : null}
            className={classes.inpt}
            type="text"
            placeholder="Введите логин"
            {...register("login", { required: true })}
          />
        </div>
        <div>
          <div
            className={classes.box}
            style={errors.password ? { border: "1px solid #FF4E43" } : null}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.9771 11.7904C18.6743 9.0932 18.6743 4.72013 15.9771 2.02291C13.2799 -0.674303 8.9068 -0.674303 6.20961 2.02291C4.41866 3.81385 3.8169 6.34366 4.40432 8.6311C4.49906 9 4.41492 9.399 4.14558 9.6684L0.433492 13.3804C0.115582 13.6984 -0.0405883 14.1435 0.00906169 14.5904L0.241132 16.679C0.265872 16.9017 0.365662 17.1093 0.524082 17.2677L0.732292 17.4759C0.890722 17.6343 1.09834 17.7341 1.32101 17.7589L3.4096 17.9909C3.85645 18.0406 4.30164 17.8844 4.61956 17.5665L5.32958 16.8565L3.58343 15.1294C3.28893 14.8382 3.28632 14.3633 3.5776 14.0688C3.86888 13.7743 4.34375 13.7717 4.63825 14.063L6.39026 15.7958L8.3319 13.8541C8.6013 13.5848 9 13.5009 9.3689 13.5957C11.6563 14.1831 14.1861 13.5813 15.9771 11.7904ZM9.5858 5.58579C10.3668 4.80474 11.6332 4.80474 12.4142 5.58579C13.1953 6.36684 13.1953 7.6332 12.4142 8.4142C11.6332 9.1953 10.3668 9.1953 9.5858 8.4142C8.8047 7.6332 8.8047 6.36684 9.5858 5.58579Z"
                fill="#F3E7FF"
                fill-opacity="0.5"
              />
            </svg>
          </div>
          <input
            style={errors.password ? { border: "1px solid #FF4E43" } : null}
            className={classes.inpt}
            type="password"
            placeholder="Введите пароль"
            {...register("password", { required: true })}
          />
        </div>
        <button className={classes.login}>ВОЙТИ</button>
      </div>
    </form>
  );
};

export default Form;
