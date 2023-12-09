"use client";
import { useState } from "react";
import Feedback from "@/components/Feedback";
import {
  rulesConfirmarPassword,
  rulesCorreo,
  rulesNombre,
  rulesPassword,
  rulesTelefono,
} from "@/utils/rules";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const RegistroPage = () => {
  const route = useRouter()
  const [duplicidad, setDuplicidad] = useState(false);
  const [nuevoRegistro, setNuevoRegistro] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const sendInfo = handleSubmit(async (data) => {
    //console.log(data);
    setDuplicidad(false)
    setNuevoRegistro(false)
    const { nombre, correo, password, telefono } = data;
    const peticion = await fetch("/api/registro", {
      method: "POST",
      body: JSON.stringify({ nombre, correo, password, telefono }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const respuesta = await peticion.json();
    if (peticion.ok) {
      if (respuesta.duplicidad) {
        setDuplicidad(true);
        return;
      }
      if (Object.keys(respuesta.registro).length >= 1) {
        //console.log(respuesta);
        setNuevoRegistro(true);
        reset();
        route.push('/login')
      }
    }
  });

  return (
    <div className='flex flex-col h-[calc(100vh-8rem)] md:h-[calc(100vh-10rem)] justify-center items-center'>
      <h1 className="text-2xl mb-2 text-slate-400 font-semibold uppercase">Crear cuenta</h1>
      <form onSubmit={sendInfo}>
        {duplicidad && <Feedback>No registrado (duplicidad de datos)</Feedback>}
        {nuevoRegistro && <Feedback>Se ha registrado la información</Feedback>}
        <div>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            id='nombre'
            placeholder='Antonio Márquez'
            autoComplete='off'
            {...register("nombre", rulesNombre)}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
        <div>
          <label htmlFor='correo'>Correo</label>
          <input
            type='email'
            id='correo'
            placeholder='antonio@email.com'
            autoComplete='off'
            {...register("correo", rulesCorreo)}
          />
          {errors.correo && <span>{errors.correo.message}</span>}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='********'
            autoComplete='off'
            {...register("password", rulesPassword)}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label htmlFor='confirmarPassword'>Confirmar Password</label>
          <input
            type='password'
            id='confirmarPassword'
            placeholder='********'
            autoComplete='off'
            {...register("confirmarPassword", rulesConfirmarPassword(watch))}
          />
          {errors.confirmarPassword && (
            <span>{errors.confirmarPassword.message}</span>
          )}
        </div>
        <div>
          <label htmlFor='telefono'>Teléfono</label>
          <input
            type='text'
            id='telefono'
            placeholder='3108521456'
            autoComplete='off'
            {...register("telefono", rulesTelefono)}
          />
          {errors.telefono && <span>{errors.telefono.message}</span>}
        </div>
        <div>
          <button type='submit' id='btn-form'>
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroPage;
