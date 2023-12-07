import { prismaCliente } from "@/services/database";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const datos = await request.json();
  const {nombre, correo, password, telefono} = datos
  const newUsuario = await prismaCliente.usuarios.create({
    data:{
        nombre,
        correo,
        password,
        telefono
    }
  })
  return NextResponse.json(newUsuario);
};
