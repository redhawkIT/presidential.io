import * as C from '../../constants'

import React from 'react'

import Paper from 'material-ui/Paper'

import {CardHeader} from 'material-ui/Card'

const Footer = () => (
  <Paper style={C.Theme.footer}>
    <CardHeader style={C.Normalize}
      title='© Ryan Keller, Rosemary Adams, team member B'
      subtitle='UW iSchool WINFO Hackathon'
      avatar='https://firebasestorage.googleapis.com/v0/b/presidential-io.appspot.com/o/ischool-symbol-only-purple-web.png?alt=media&token=bcd4ff2b-991d-4cb8-a18a-8e28b143da40'
    />
  </Paper>
)

export default Footer
