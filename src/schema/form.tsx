import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(5,{
        message: "Nome deve ter pelo menos 5 caracteres."
    }),
    email: z.string().email({
        message: "Por favor insira um email válido."
    }),
    mensagem: z.string().min(20,{
        message: "Mensagem deve ter pelo menos 20 caracteres."
    })    
})

export type FormValue = z.infer<typeof formSchema>