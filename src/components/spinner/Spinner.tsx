import { BiLoaderCircle } from 'react-icons/bi';

const LoadeSpinner = ({
  className,
  children,
}: {
  className?: string,
  children?: React.ReactNode,
}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className='flex flex-row items-center space-x-2'>
        <BiLoaderCircle className={`animate-spin ${className}`} />
        {children}
      </div>
    </div>
  );
}

export default LoadeSpinner;