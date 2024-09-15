export function formatToMarkdown(text: string): string {
  // Reemplazar listas con guiones (-) por listas Markdown
  text = text.replace(/-\s+/g, "- ");

  // Reemplazar secciones recomendadas (números con puntos) por listas ordenadas de Markdown
  text = text.replace(/(\d+)\s*\.\s*/g, "\n$1. ");

  // Negritas: Encontrar patrones entre ** y aplicar el formato en Markdown
  text = text.replace(/(?:\*\*\s*)([^*]+)(?:\s*\*\*)/g, "**$1**");

  // Títulos: Reemplazar '###' por títulos en Markdown
  text = text.replace(/###\s+/g, "\n### ");

  // Opcional: Eliminar múltiples espacios entre palabras
  text = text.replace(/\s{2,}/g, " ");

  // Retornar el texto formateado como Markdown
  return text;
}
