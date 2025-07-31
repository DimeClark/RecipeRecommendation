import { ReactNode } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden
        rounded-2xl
        transition-all duration-500 ease-out
        ${hover ? 'hover:-translate-y-2 hover:scale-[1.02]' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${className}
      `}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: hover 
          ? '0 8px 32px 0 rgba(0, 0, 0, 0.37)' 
          : '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(0, 0, 0, 0.5)'
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
        }
      }}
    >
      {children}
    </div>
  )
}

export default Card
