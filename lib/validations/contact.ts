import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  message: z.string().min(10).max(2000),
  _honey: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
