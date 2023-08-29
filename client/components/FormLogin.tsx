'use client';
import { ChangeEvent, useState } from 'react';
import styles from '../styles/formlogin.module.scss';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
  });

  const [view1Data, setView1Data] = useState({});

  const onSubmitView1 = (data: any) => {
    setView1Data(data.checked);
    setView1(!view1);
    setView2(!view2);
  };

  const onSubmitView2 = async (data: any) => {
    const allData = { ...view1Data, ...data };
    console.log(allData);

    try {
      let endpoint = '';
      if (allData.checked === 'student') {
        endpoint = 'http://localhost:3001/students/studentsLogin';
      } else if (allData.checked === 'teacher') {
        endpoint = 'http://localhost:3001/teachers/teachersLogin';
      }

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: allData.email,
            password: allData.password,
            userRol: allData.checked,
          }),
        });

        if (response.ok) {
          const responseData = await response.json();

          console.log(responseData);
        } else {
          console.error('Error connecting to the backend');
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const [view1, setView1] = useState(true);
  const [view2, setView2] = useState(false);

  // const handleView = () => {
  //   setView1(false);
  //   setView2(true);
  // };

  //   /*       const url = './home';
  //   window.location.href = url; */
  // }

  return (
    <>
      {view1 && (
        <div className={styles.container1}>
          <div>
            <h2>Seleccione</h2>
            <form onSubmit={handleSubmit(onSubmitView1)}>
              <div className={styles.containerview1}>
                <div>
                  <label htmlFor="">Alumno</label>
                  <input
                    className={styles.input1}
                    type="radio"
                    value="student"
                    {...register('check')}
                  />

                  <label htmlFor="">Profesor</label>
                  <input
                    className={styles.input1}
                    type="radio"
                    value="teacher"
                    {...register('check', {
                      required: 'El rol es requerido',
                    })}
                  />
                </div>

                <div>
                  <input
                    type="submit"
                    value="Siguiente"
                    disabled={!isDirty || !isValid}
                  />
                </div>
              </div>
            </form>
          </div>
          {/* <Image
            src="/client/public/assets/profesor.svg"
            alt="student"
            width={100}
            height={100}
          /> */}
        </div>
      )}

      {view2 && (
        <div>
          <form
            onSubmit={handleSubmit(onSubmitView2)}
            className={styles.formContainer}>
            <div className={styles.containerbox}>
              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="dni">
                  DNI
                </label>
                <input
                  className={styles.input}
                  type="text"
                  {...register('dni', {
                    required: 'El DNI es obligatorio',
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: 'El DNI no es válido',
                    },
                    minLength: {
                      value: 5,
                      message: 'Longitud mínima de 5 dígitos',
                    },
                  })}
                />
                {errors.dni && (
                  <div className={styles.error}>
                    <span>{errors?.dni?.message?.toString()}</span>
                  </div>
                )}
              </div>
              <div className={styles.inputbox}>
                <label className={styles.label} htmlFor="password">
                  Contraseña
                </label>
                <input
                  className={styles.input}
                  type="password"
                  {...register('password', {
                    required: 'La contraseña es obligatoria',
                  })}
                />
                {errors.password && (
                  <div className={styles.error}>
                    <span>{errors?.password?.message?.toString()}</span>
                  </div>
                )}
              </div>

              <div className={styles.forgotpassword}>
                <a href="" className={styles.forgottext}>
                  Olvidé mi contraseña
                </a>
              </div>

              <div className={styles.registerlink}>
                ¿No tienes cuenta?
                <Link href="/signup">
                  <span> Regístrate! </span>
                </Link>
              </div>

              <div className={styles.btncontainer}>
                <Link href="/home">
                  <input
                    type="button"
                    className={styles.btn}
                    value="Iniciar sesión"
                    disabled={!isDirty || !isValid}
                    onClick={() => onSubmitView2(watch())}
                  />
                </Link>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FormLogin;
