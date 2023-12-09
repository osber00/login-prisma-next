"use client";
import { useState } from "react";
import { rulesCorreo, rulesPassword } from "@/utils/rules";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Feedback from "@/components/Feedback";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const [alerta, setAlerta] = useState(false)
  const route = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = handleSubmit(async (data) => {
    //console.log(data);
    const req = await signIn("credentials", {
      email: data.correo,
      password: data.password,
      redirect: false,
    });

    if (req.error) {
      //console.log(req.error);
      setAlerta(true)
    } else {
      //console.log("Enviar a dashboard");
      route.push('/informacion')
      route.refresh()
    }
  });

  return (
    <div className='flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] justify-center items-center'>
      <h1 className='text-2xl mb-2 text-slate-400 font-semibold uppercase'>
        Iniciar sesión
      </h1>
      <form onSubmit={handleForm}>
        {alerta && <Feedback>No se pudo inicar sesión</Feedback>}
        <div>
          <label htmlFor='correo'>Correo electrónico</label>
          <input
            type='email'
            id='correo'
            placeholder='usuario@email.com'
            autoComplete='off'
            {...register("correo", rulesCorreo)}
          />
          {errors.correo && <span>{errors.correo.message}</span>}
        </div>
        <div>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            id='password'
            placeholder='**********'
            autoComplete='off'
            {...register("password", rulesPassword)}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <button type='submit' id='btn-form'>
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
