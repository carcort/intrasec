import { create } from "zustand";


export const useGerentes = create((set)=>({
   gerente: 'Comercial',
   
   actualizarGerente: (atrapar)=> set(state => ({
      gerente: atrapar
   }))
   
}))


export const useAfp = create((set)=>({
   afp: 'Capital',
   
   actualizarAfp: (atrapar)=> set(state => ({
      afp: atrapar
   }))
   
}))


export const useIsapre = create((set)=>({
   isapre: 'Banmédica',
   
   actualizarIsapre: (atrapar)=> set(state => ({
      isapre: atrapar
   }))
   
}))

export const useTrabajo = create((set)=>({
   trabajo: 'Presencial',
   
   actualizarTrabajo: (atrapar)=> set(state => ({
      trabajo: atrapar
   }))
   
}))




export const useEmailCorporativo = create((set)=>({
   emailCorporativo: '',
   
   actualizarEmailCorporativo: (atrapar)=> set(state => ({
      emailCorporativo: atrapar
   }))
   
}))



export const useTelefono1Corporativo = create((set)=>({
   telefono1Corporativo: '',
   
   actualizarTelefono1Corporativo: (atrapar)=> set(state => ({
      telefono1Corporativo: atrapar
   }))
   
}))


export const useTelefono2Corporativo = create((set)=>({
   telefono2Corporativo: '',
   
   actualizarTelefono2Corporativo: (atrapar)=> set(state => ({
      telefono2Corporativo: atrapar
   }))
   
}))
