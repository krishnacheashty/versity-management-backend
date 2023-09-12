import { z } from 'zod'

//create zod validation sheama
const zodUserValidationSchema = z.object({
  body: z.object({
    role: z
      .string({
        required_error: 'role is required',
      })
      .optional(), //but why it be optional??
    password: z.string().optional(),
  }),
})

export const userController = {
  zodUserValidationSchema,
}
