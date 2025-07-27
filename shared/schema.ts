import { z } from "zod";

// Basic schemas for the FRC team website
export const TeamMemberSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string().optional(),
  image: z.string().optional(),
});

export const BlogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  excerpt: z.string().optional(),
  publishedAt: z.date(),
  author: z.string(),
  tags: z.array(z.string()).optional(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  images: z.array(z.string()).optional(),
  year: z.number(),
  status: z.enum(["completed", "in-progress", "planned"]),
});

export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type BlogPost = z.infer<typeof BlogPostSchema>;
export type Project = z.infer<typeof ProjectSchema>;