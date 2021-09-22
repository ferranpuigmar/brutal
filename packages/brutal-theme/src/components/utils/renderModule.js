
import HeroHomeModule from "../home/HeroHomeModule";
import ImageTextModule from "../home/ImageTextModule";
import StrenghtModule from "../home/StrenghtModule";
import ProjectsModule from '../home/ProjectsModule'
import ContactModule from "../shared/ContactModule";
import ServicesModule from '../home/ServicesModule'

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
    case 'services_module':
      return <ServicesModule { ...acfModule } />
    default:
      return <></>
  }
}