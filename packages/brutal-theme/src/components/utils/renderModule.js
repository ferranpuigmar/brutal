import HeroHomeModule from "../home/HeroHomeModule/HeroHomeModule";
import ImageTextModule from "../home/HeroHomeModule/ImageTextModule";
import ProjectsModule from "../home/HeroHomeModule/ProjectsModule";
import StrenghtModule from "../home/HeroHomeModule/StrenghtModule";
import ContactModule from "../shared/ContactModule";

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
    case 'projects_module':
      return <ProjectsModule mode="light" { ...acfModule } />
    case 'contact_module':
      return <ContactModule { ...acfModule } />
  }
}