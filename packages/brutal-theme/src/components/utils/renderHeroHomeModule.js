import HeroHomeModule from "../home/HeroHomeModule/HeroHomeModule"

export const renderHeroModule = ( { text, image, active } ) =>
{
  return active ? <HeroHomeModule title={ text } image={ image } /> : null
}