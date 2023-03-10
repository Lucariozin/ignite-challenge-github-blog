import * as zod from 'zod'

export const zodSchema = zod.object({
  query: zod.string().transform((query) => query.trim()),
})

export type PublicationFormInputs = zod.infer<typeof zodSchema>
