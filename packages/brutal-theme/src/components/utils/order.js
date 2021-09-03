export const orderByModulePosition = ( ( a, b ) =>
{
  const moduleA = a[ Object.keys( a ) ].order
  const moduleB = b[ Object.keys( b ) ].order
  return moduleA > moduleB ? 1 : -1
}
);

export const orderByBreakpoint = ( order = 'asc' ) =>
{
  return ( ( a, b ) =>
  {
    const moduleA = a.width
    const moduleB = b.width
    return order === 'asc' ? moduleA > moduleB ? 1 : -1 : moduleA < moduleB ? 1 : -1
  }
  )
};
