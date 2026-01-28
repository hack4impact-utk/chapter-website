import { z } from "zod";

import contentJson from "./content.json";

const contentSchema = z.object({
  studentApplicationLink: z.string(),
  nonprofitApplicationLink: z.string(),

  studentQuote: z.string(),
  studentAuthor: z.string(),
  studentTitle: z.string(),

  nonprofitQuote: z.string(),
  nonprofitAuthor: z.string(),
  nonprofitTitle: z.string(),
});

export const content = contentSchema.parse(contentJson);
