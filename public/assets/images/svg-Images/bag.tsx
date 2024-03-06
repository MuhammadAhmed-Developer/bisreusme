export const Bagicon = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 1H18.8027C21.0119 1 22.8027 2.79086 22.8027 5V8.68994H23.8027V5C23.8027 2.23858 21.5642 0 18.8027 0H5C2.23858 0 0 2.23858 0 5V18.8027C0 21.5642 2.23858 23.8027 5 23.8027H18.8027C21.5642 23.8027 23.8027 21.5642 23.8027 18.8027V14.7349H22.8027V18.8027C22.8027 21.0119 21.0119 22.8027 18.8027 22.8027H5C2.79086 22.8027 1 21.0119 1 18.8027V5C1 2.79086 2.79086 1 5 1Z"
        fill={props?.color}
      />
      <path
        d="M6.85547 10.388C6.85547 9.83068 7.30724 9.37891 7.86453 9.37891H15.937C16.4944 9.37891 16.9461 9.83068 16.9461 10.388V15.9378C16.9461 16.4951 16.4944 16.9469 15.937 16.9469H7.86453C7.30724 16.9469 6.85547 16.4951 6.85547 15.9378V10.388Z"
        stroke={props?.color}
        stroke-width="0.932943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.9171 9.37862V7.86502C13.9171 7.30773 13.4654 6.85596 12.9081 6.85596H10.8899C10.3326 6.85596 9.88086 7.30773 9.88086 7.86502V9.37862"
        stroke={props?.color}
        stroke-width="0.932943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.9461 11.9019L12.0987 12.8714C11.968 12.8974 11.8335 12.8974 11.7029 12.8714L6.85547 11.9019"
        stroke={props?.color}
        stroke-width="0.932943"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
