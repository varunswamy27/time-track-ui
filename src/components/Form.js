// MODULES //
import { useRef } from "react";

// STYLES //
import styles from "@/styles/components/Form.module.scss";

// COMPONENTS //

// PLUGINS //
import { useForm } from "react-hook-form";

export default function Form() {
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  /** function to handle submit */
  const onSubmit = async (Data, e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.form_group}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_box}>
          <label className="text_xxs" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })}
          />
          {errors.email && errors.email.type == "required" && (
            <p className="error text_xxs">This field is required*</p>
          )}
          {errors.email && errors.email.type == "pattern" && (
            <p className="error text_xxs">Enter valid email*</p>
          )}
        </div>
        <div className={styles.form_box}>
          <label className="text_xxs" htmlFor="password">
            Password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            {...register("password", {
              required: true,
              maxLength: 10,
            })}
          />
          {errors.password && errors.password.type == "required" && (
            <p className="error text_xxs">This field is required*</p>
          )}
        </div>
        <button type="submit" className="btn_primary text_500 text_xs">
          Continue to signup
        </button>
      </form>
    </div>
  );
}
