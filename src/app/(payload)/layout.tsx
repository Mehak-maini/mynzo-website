import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import config from '@payload-config'
import React from 'react'
import { importMap } from './admin/importMap'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) =>
  RootLayout({
    config,
    children,
    importMap,
    serverFunction: handleServerFunctions,
  })

export default Layout
