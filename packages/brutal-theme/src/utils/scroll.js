export const offset = ( el ) =>
{
  if ( typeof window === 'undefined' ) return;
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollHeight - ( document.documentElement.offsetHeight + document.documentElement.scrollTop );
  return { top: rect.top + scrollTop + rect.height }
}