const NavbarItem = ({ label }) => {
  return (
    <div className="cursor-pointer text-sm font-normal text-white transition hover:text-gray-300">
      {label}
    </div>
  );
};

export default NavbarItem;
