import HeroHomeModule from "../home/HeroHomeModule/HeroHomeModule";
import ImageTextModule from "../home/HeroHomeModule/ImageTextModule";
import StrenghtModule from "../home/HeroHomeModule/StrenghtModule";

export const renderModule = ( moduleName, postData ) =>
{
  const acfModule = postData[ moduleName ];

  if ( !postData || !acfModule.active ) return;

  switch ( moduleName ) {
    case 'hero_home_module':
      return <HeroHomeModule { ...acfModule } />
    case 'text_image_module':
      return <ImageTextModule mode="light" { ...acfModule } />
    case 'strenghts_module':
      return <StrenghtModule { ...acfModule } />
  }
}