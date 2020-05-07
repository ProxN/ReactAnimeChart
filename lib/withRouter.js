import Link from 'next/link';
import { withRouter } from 'next/router';
import { Children } from 'react';
import React from 'react';

export default withRouter(({ router, children, as, href, ...rest }) => {
  return (
    <Link {...rest} href={href} as={as}>
      {React.cloneElement(Children.only(children), {
        className: router.asPath === as ? `active` : null,
      })}
    </Link>
  );
});
