export  function classNameCreate( classDefault: string, className?: string): string{
    return className ? `${classDefault} ${className}` :  classDefault;
}