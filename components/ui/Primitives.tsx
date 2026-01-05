
import React from 'react';
import { cn } from '../../lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Button Component
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        suppressHydrationWarning
        className={cn(
          "inline-flex items-center justify-center rounded-none text-xs font-black uppercase tracking-[0.2em] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-950 disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-brand-950 text-white hover:bg-industrial-900 shadow-lg': variant === 'default',
            'border-2 border-industrial-200 dark:border-industrial-800 bg-transparent hover:border-brand-950 hover:text-brand-950 dark:hover:border-white dark:hover:text-white text-industrial-900 dark:text-industrial-100': variant === 'outline',
            'hover:bg-industrial-100 hover:text-brand-950 dark:hover:bg-industrial-800 dark:hover:text-white': variant === 'ghost',
            'text-industrial-600 underline-offset-4 hover:underline': variant === 'link',
            'h-12 px-8': size === 'default',
            'h-10 px-6 text-[10px]': size === 'sm',
            'h-16 px-12 text-sm': size === 'lg',
            'h-12 w-12': size === 'icon',
          },
          className
        )}
        {...props}
      >
        <span className="inline-flex items-center gap-2">
          {props.children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

// Input Component
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-12 w-full rounded-none border-b-2 border-industrial-200 dark:border-industrial-800 bg-industrial-50/50 dark:bg-industrial-900/50 px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-industrial-400 focus-visible:outline-none focus-visible:border-brand-950 focus-visible:bg-white dark:focus-visible:bg-brand-950 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// AccordionItem Component
export interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

// Added missing AccordionItem component
export const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-industrial-200 dark:border-industrial-800 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={cn(
          "text-sm font-black uppercase tracking-widest transition-colors",
          isOpen ? "text-brand-950 dark:text-white" : "text-industrial-600 dark:text-industrial-400 group-hover:text-brand-950 dark:group-hover:text-white"
        )}>
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-industrial-400" />
        ) : (
          <ChevronDown className="h-4 w-4 text-industrial-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 animate-in fade-in slide-in-from-top-1 duration-200">
          {children}
        </div>
      )}
    </div>
  );
};
