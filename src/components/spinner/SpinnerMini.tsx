import { BiLoaderCircle } from 'react-icons/bi';

const LoadeSpinner = ({
  className,
  children,
}: {
  className?: string,
  children?: React.ReactNode,
}) => {
  return (
    <div className='mx-auto flex flex-row items-center justify-center space-x-2'>
      <BiLoaderCircle className={`animate-spin ${className}`} />
      {children}
    </div>
  );
}

export default LoadeSpinner;