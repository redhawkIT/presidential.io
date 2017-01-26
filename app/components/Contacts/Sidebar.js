import * as C from '../../constants'
import React from 'react'

//    /////
//    MATERIAL-UI COMPONENTS
//    ////
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'

import Reply from 'material-ui/svg-icons/content/reply'

export const Sidebar = ({website = C.Initial.website, github = C.Initial.github}) => (
  <List style={C.Theme.list}>
    <Divider />
    <a target='_blank' href={website}>
      <ListItem style={C.Theme.contact}
        leftIcon={<Reply color={C.Theme.iconColor.website} />}
        primaryText='Visit the Team'
      />
    </a>
    <a target='_blank' href={github}>
      <ListItem style={C.Theme.link}
        leftIcon={<img src={C.icon.github} alt='' style={C.icon.style} />}
        primaryText='Github'
      />
    </a>
  </List>
)
