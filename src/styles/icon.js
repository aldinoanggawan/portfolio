import styled from 'styled-components'

import { Linkedin, Youtube } from '@styled-icons/boxicons-logos'
import { Download, Envelope } from '@styled-icons/boxicons-regular'
import { Code, Cross } from '@styled-icons/entypo'
import { EyeOutline, GithubOutline } from '@styled-icons/evaicons-outline'
import { LaptopCode } from '@styled-icons/fa-solid'
import { Codesandbox } from '@styled-icons/simple-icons'
import { Database } from '@styled-icons/octicons'
import { fontSize } from './contentStyle'

export const BackEndIcon = styled(Database)`
  height: 50px;
  color: #2bced6;
`

export const CrossIcon = styled(Cross)``

export const DownloadIcon = styled(Download)`
  height: 21px;
  margin-right: 0.2em;
`

export const EyeIcon = styled(EyeOutline)`
  height: ${({ portfolio }) => (portfolio ? fontSize.portfolio.mobileText : '1.2rem')};
  margin-right: 0.2em;
`

export const FrontEndIcon = styled(Code)`
  height: 50px;
  color: #2bced6;
`

export const GithubIcon = styled(GithubOutline)`
  width: ${({ button }) => (button ? 'auto' : '60%')};
  height: ${({ button }) => (button ? fontSize.portfolio.mobileText : 'auto')};
  margin-right: ${({ button }) => (button ? '0.2em' : '0')};
`

export const LinkedInIcon = styled(Linkedin)`
  width: 60%;
`

export const MailIcon = styled(Envelope)`
  width: 60%;
`

export const OtherIcon = styled(LaptopCode)`
  height: 50px;
  color: #2bced6;
`

export const PlayIcon = styled(Youtube)`
  height: ${fontSize.portfolio.mobileText};
  margin-right: 0.2em;
`

export const SandboxIcon = styled(Codesandbox)`
  height: ${fontSize.portfolio.mobileText};
  margin-right: 0.2em;
`
