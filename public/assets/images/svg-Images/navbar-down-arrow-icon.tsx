function NavbarDownIcon(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      className={`stroke-current ${props.className}`}
    >
      <path
        d="M1 1L6 6L11 1"
        stroke={"#102D"}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default NavbarDownIcon;
