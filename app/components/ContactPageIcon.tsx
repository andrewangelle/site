import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from '@fortawesome/free-brands-svg-icons'
import * as Iconz from '@fortawesome/free-solid-svg-icons'

import { ContactIconData } from "~/utils";

export function ContactPageIcon({iconName, href, index}: ContactIconData & {index: number}){
  return (
    <a
      key={iconName}
      href={href}
      target="_blank"
      style={{ color: 'inherit' }}
    >
      <FontAwesomeIcon
        icon={
          // @ts-expect-error
          index === 2 ? Iconz[iconName] : Icons[iconName]
        }
        size="6x"
      />
    </a>            
  )
}