const LanguageDropDown = () => {
  return (
    <select
      name="lang"
      id="lang"
      className="border-light-gray sm:text-md rounded-[5px] border bg-transparent sm:mr-3 sm:px-3 sm:py-1"
    >
      <option value="English" className="text-black">
        English
      </option>
      <option value="Hindi" className="text-black">
        हिन्दी
      </option>
    </select>
  );
};

export default LanguageDropDown;
