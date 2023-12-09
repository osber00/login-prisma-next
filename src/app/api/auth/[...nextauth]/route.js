import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prismaCliente } from "@/services/database";
import bcrypt from 'bcrypt'


export const opcionesAuth = {
    providers:[
        CredentialsProvider({
            name: 'Credentials',
            credentials:{
                email: {label: 'Correo electrónico', type: 'text', placeholder:'usuario@email.com'},
                password: {label: 'Password', type: 'password', placeholder:'*******'},
            },
            async authorize(credentials, req){
                //console.log(credentials);
                const usuario = await prismaCliente.usuarios.findUnique({
                    where:{
                        correo: credentials.email,
                        activo: true
                    }
                })

                if (!usuario) return null
                //console.log(usuario);

                const matchPassword = await bcrypt.compare(credentials.password, usuario.password)

                if(!matchPassword) return null

                return {
                    id: usuario.id,
                    name: usuario.nombre,
                    email: usuario.correo
                }
            }
        })
    ],
    pages:{
        signIn: '/login'
    }
}

const handle = NextAuth(opcionesAuth)

export {handle as GET, handle as POST}