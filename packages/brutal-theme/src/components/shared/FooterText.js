import React from 'react';
import { connect } from 'frontity'
import Text from './Text';
import Title from './Title';
import Link from "@frontity/components/link";


const FooterText = ( { state, blackBackground, textsize="1.6rem", titlelevel=5 }) => {

  const footerFields = state.source.get( `/globaloptions/${ state.theme.globalOptions }/` ).acf.footer_fields;
    
  return (
    <>
      <div className="footer__text t1">
        <Title level={titlelevel} color={ blackBackground ?"#fff": "#000" } className="footer__text-title">{footerFields.col1_title}</Title>
        <Text text={footerFields.col1_text} size={textsize} color={blackBackground ?"#fff": "#000"} className="footer__text-text"/>
      </div>
      <div className="footer__text t2">
        <Title level={titlelevel} color={blackBackground ?"#fff": "#000"} className="footer__text-title">{footerFields.col2_title}</Title>
        <Text text={footerFields.col2_text} size={textsize} color={blackBackground ?"#fff": "#000"} className="footer__text-text"/>
      </div>
      <div className="footer__text t3">
        <Title level={titlelevel} color={blackBackground ?"#fff": "#000"} className="footer__text-title">{footerFields.col3_title}</Title>
        <Link link={footerFields.col3_Link}>
          <Text text={footerFields.col3_text} size={textsize} color={blackBackground ?"#fff": "#000"} className="footer__text-text"/>
        </Link>
      </div>
    </>
  )
}

export default connect( FooterText );
