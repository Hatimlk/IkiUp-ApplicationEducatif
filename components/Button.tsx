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
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-95 cursor-pointer select-none";
  
  const variants = {
    primary: "bg-primary text-white hover:shadow-xl hover:shadow-primary/30 focus:ring-primary/20",
    secondary: "bg-secondary text-[#111111] hover:shadow-xl hover:shadow-secondary/30 focus:ring-secondary/20",
    outline: "border-2 border-gray-ui dark:border-slate-700 hover:border-primary dark:hover:border-primary bg-transparent text-text hover:text-primary dark:hover:text-primary",
    ghost: "hover:bg-primary/5 dark:hover:bg-white/10 text-[#111111]/60 dark:text-slate-300 hover:text-primary dark:hover:text-white",
    white: "bg-white text-[#111111] shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",
    md: "h-12 px-7 text-base",
    lg: "h-14 px-9 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};