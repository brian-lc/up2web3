import { Box, Grommet, type ThemeType } from 'grommet'
import { Button } from '@mantine/core'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { ReactNode } from 'react'

const AccountButton = dynamic(() => import('./AccountButton'), {
  ssr: false,
})

const theme: ThemeType = {
  global: {
    font: {
      family: 'sans-serif',
    },
  },
}

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Grommet theme={theme}>
      <Box direction="column" flex>
        <Box direction="row" elevation="medium" pad="small">
          <Box>
            <Link href="/new" passHref>
              <Button component="a">New Note</Button>
            </Link>
          </Box>
          <Box align="flex-end" flex>
            <AccountButton />
          </Box>
        </Box>
        <Box flex>{children}</Box>
      </Box>
    </Grommet>
  )
}
