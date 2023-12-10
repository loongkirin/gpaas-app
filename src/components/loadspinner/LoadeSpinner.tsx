const LoadeSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div>
        <svg className="animate-spin h-5 w-5 mr-3 fill-red-300 bg-red-500" viewBox="0 0 24 24">
        </svg>
        Processing...
      </div>
    </div>
  );
}

export default LoadeSpinner;