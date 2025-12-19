import React from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
};

type ButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  href,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-50 disabled:pointer-events-none rounded-2xl active:scale-95 cursor-pointer select-none overflow-hidden group";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_12px_24px_-8px_rgba(90,115,232,0.4)]",
    secondary: "bg-secondary text-slate-900 hover:bg-secondary/90 hover:shadow-[0_12px_24px_-8px_rgba(246,222,122,0.4)]",
    outline: "border-2 border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary bg-transparent text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary",
    ghost: "hover:bg-primary/10 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white",
    white: "bg-white text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-slate-100"
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-9 text-lg",
  };

  const shineEffect = (
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite] pointer-events-none"></span>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {shineEffect}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {shineEffect}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};