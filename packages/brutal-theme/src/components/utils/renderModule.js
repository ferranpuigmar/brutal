import HeroHomeModule from "../home/HeroHomeModule/HeroHomeModule";

export const renderModule = ( moduleName, postData ) =>
{
  const acfModule = postData[ moduleName ];

  if ( !postData || !acfModule.active ) return;

  switch ( moduleName ) {
    case 'hero_home_module':
      return <HeroHomeModule title={ acfModule.text } image={ acfModule.image } />
  }
}