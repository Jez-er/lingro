import * as Icons from 'lucide-react'
import * as React from 'react'
import { TIcons } from '../types'

interface LucideIconProps {
	name: TIcons
	size?: number
	className?: string
	strokeWidth?: number
}

export function CIcon({
	name,
	size = 16,
	className,
	strokeWidth,
}: LucideIconProps) {
	const IconComponent = Icons[name] as React.ComponentType<any>

	if (!IconComponent) {
		console.warn(`Icon "${name}" not found in lucide-react`)
		return null
	}

	return (
		<IconComponent
			size={size}
			className={className}
			strokeWidth={strokeWidth}
		/>
	)
}
