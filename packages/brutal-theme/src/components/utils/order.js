export const orderByModulePosition = ( ( a, b ) =>
{
  const moduleA = a[ Object.keys( a ) ].order
  const moduleB = b[ Object.keys( b ) ].order
  return moduleA > moduleB ? 1 : -1
}
);

export const orderByBreakpoint = ( ( a, b ) =>
{
  const moduleA = a.width
  const moduleB = b.width
  return moduleA > moduleB ? 1 : -1
}
);
