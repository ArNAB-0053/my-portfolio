import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import React from 'react'

type SectionLoaderProps = {
    text?: string
    containerClassName?: string
    textClassName?: string
}

const SectionLoader = ({ text, containerClassName, textClassName }: SectionLoaderProps) => {
    return (
        <div className={cn(
            "flex items-center justify-center gap-2 text-sm text-white/40", containerClassName)}
        >
            <Loader2 className="animate-spin" />
            {text && <span className={cn("ml-2", textClassName)}>{text}</span>}
        </div>
    )
}

export default SectionLoader
