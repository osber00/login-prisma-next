import { prismaCliente } from "@/services/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    const datos = await request.json();
    const { nombre, correo, password, telefono } = datos;

    const existe = await prismaCliente.usuarios.count({
      where: {
        OR: [
          { correo: { contains: correo } },
          { telefono: { contains: telefono } },
        ],
        AND: {
          activo: false,
        },
      },
    });

    if (existe >= 1) {
      return NextResponse.json({
        duplicidad: true,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUsuario = await prismaCliente.usuarios.create({
      data: {
        nombre,
        correo,
        password: hashPassword,
        telefono,
      },
    });
    const { password: _, ...usuario } = newUsuario;
    return NextResponse.json({ registro: usuario });
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
