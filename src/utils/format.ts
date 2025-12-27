
export function formatText(text: string): string {
  if (!text) return "";

  let formatted = text;

  // Replacements ported from generate.py
  const replacements: [RegExp | string, string][] = [
    [/\\\\\[[^\]]*\]/g, '\n'], // newlines
    [/\\.~/g, '. '], // spaces
    [/\\ /g, ' '], // spaces
    [/\\&/g, '&'], // unescape &
    [/\\\$/g, '$'], // unescape $
    [/\\%/g, '%'], // unescape %
    [/\\textbf{(.*?)}/g, '<strong>$1</strong>'], // bold text
    [/\{ *\\bf *(.*?)\}/g, '<strong>$1</strong>'],
    [/\\textit{(.*?)}/g, '<em>$1</em>'], // italic text
    [/\{ *\\it *(.*?)\}/g, '<em>$1</em>'],
    [/\\LaTeX/g, 'LaTeX'],
    [/\\TeX/g, 'TeX'],
    [' --- ', '&nbsp;-&nbsp;'], // em dash
    [' -- ', '&nbsp;-&nbsp;'], // en dash
    ['---', '-'], // em dash
    ['--', '-'], // en dash
    [/``([^']*)''/g, '"$1"'], // quotes
    [/\\url{([^}]*)}/g, '<a href="$1" target="_blank">$1</a>'], // urls
    [/\\href{([^}]*)}{([^}]*)}/g, '<a href="$1" target="_blank">$2</a>'], // urls
    [/\{([^}]*)\}/g, '$1'], // Brackets
    [/\$\\varheart\$/g, '❤️'], // Heart
  ];

  for (const [pattern, replacement] of replacements) {
    formatted = formatted.split(pattern).join(replacement); // Simple string replace if string
    if (pattern instanceof RegExp) {
        formatted = formatted.replace(pattern, replacement);
    }
  }
  
  // Fix for multiple replacements that might need global flag if not using split/join for strings
  // Re-implementing loop correctly for regex global replacement
  formatted = text;
  for (const [pattern, replacement] of replacements) {
      if (typeof pattern === 'string') {
          formatted = formatted.split(pattern).join(replacement);
      } else {
          formatted = formatted.replace(pattern, replacement);
      }
  }

  return formatted;
}
