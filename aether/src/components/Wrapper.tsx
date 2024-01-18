import React from 'react'
import { cn } from './lib/utils'

const Wrapper = ({ className, children }: { className?: string, children: React.ReactNode}) => {
  return (
    <section className={cn("flex flex-col min-h-screen w-full mt-16", className)}>
        {children}
    </section>
  )
}

export default Wrapper
