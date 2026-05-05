import { RootLayout } from '@payloadcms/next/layouts'
import '@payloadcms/next/css'
import config from '@payload-config'
import React from 'react'
import { importMap } from './admin/importMap'
import { serverFunction } from './serverFunctions'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) =>
  RootLayout({
    config,
    children,
    importMap,
    serverFunction,
  })

export default Layout
