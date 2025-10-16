interface Category {
  slug: string;
  name: string;
}

export const AVAILABLE_CATEGORIES: Category[] = [
  { slug: "mobile", name: "Mobile" },
  { slug: "programacao", name: "Programação" },
  { slug: "frontend", name: "Front-end" },
  { slug: "devops", name: "DevOps" },
  { slug: "ux-ui", name: "UX & Design" },
  { slug: "data-science", name: "Data Science" },
  { slug: "inovacao-gestao", name: "Inovação & Gestão" },
];