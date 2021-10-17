const Loader = () => {
  let circleCommonClasses =
    "h-5 w-5 bg-white border-2 border-gray-700  rounded-full";

  return (
    <div className="flex">
      <div className={`${circleCommonClasses} mr-2 animate-bounce`}></div>
      <div className={`${circleCommonClasses} mr-2 animate-bounce200`}></div>
      <div className={`${circleCommonClasses} animate-bounce400`}></div>
    </div>
  );
};

export default Loader;
