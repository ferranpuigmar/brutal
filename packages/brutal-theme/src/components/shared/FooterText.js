import React from 'react';
import { connect } from 'frontity';
import Link from "@frontity/components/link";


const FooterText = ( { footerFields } ) =>
{

  return (
    <>
      <div className="footer__text t1">
        <div className="footer__text-title">
          <h3>{ footerFields.col1_title }</h3>
        </div>
        <div className="footer__text-text">
          <Link link={ footerFields?.col1_Link }>{ footerFields.col1_text }</Link>
        </div>
      </div>

      <div className="footer__text t2">
        <div className="footer__text-title">
          <h3>{ footerFields.col2_title }</h3>
        </div>
        <div className="footer__text-text">
          <Link link={ footerFields.col2_Link }>{ footerFields.col2_text }</Link>
        </div>
      </div>

      <div className="footer__text t3">
        <div className="footer__text-title">
          <h3>{ footerFields.col3_title }</h3>
        </div>
        <div className="footer__text-text">
          <Link link={ footerFields.col3_Link }>{ footerFields.col3_text }</Link>
        </div>
      </div>
    </>
  )
}

export default connect( FooterText );



