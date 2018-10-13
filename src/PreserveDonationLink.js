import * as React from 'react'
import QRCode from 'qrcode.react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import logo from './logo.png'

import createStyled from "material-ui-render-props-styles";
import type { Classes } from "material-ui-render-props-styles";
import type { Theme } from "universal/theme";

const preserveDonationLinkStyles = (theme: Theme) => ({
  link: {
    textDecoration: 'none',
  },
  root: {
    margin: theme.spacing.unit * 2,
    maxWidth: 250,
    textAlign: 'center',
  },
  qrCode: {
    marginBottom: theme.spacing.unit * 2,
  },
  media: {
    textAlign: 'center',
  },
})

const PreserveDonationLinkStyles = createStyled(preserveDonationLinkStyles, {name: 'PreserveDonationLink'})

const PreserveDonationLink = ({name, href}) => (
  <PreserveDonationLinkStyles>
    {({classes}: {classes: Classes<typeof preserveDonationLinkStyles>}) => (
      <a href={href} className={classes.link}>
        <Card className={classes.root}>
          <CardContent>
            <QRCode className={classes.qrCode} value={href} size={190} renderAs="svg" />
            <Typography variant="subheading" component="h3">
              Donate to
            </Typography>
            <Typography variant="headline" component="h2">
              {name}
            </Typography>
            <img alt="Texas Cave Management Association" src={logo} height={150} width={150} />
          </CardContent>
        </Card>
      </a>
    )}
  </PreserveDonationLinkStyles>
)

export default PreserveDonationLink
