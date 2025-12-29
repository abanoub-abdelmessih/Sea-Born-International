export default function RoundedBorder({ className }: { className?: string }) {
  return (
    <svg
      width="33"
      height="25"
      viewBox="0 0 33 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id="path-1-inside-1_44_489" fill="white">
        <path d="M33 16C33 7.16344 25.8366 0 17 0H0V25H33V16Z" />
      </mask>
      <path
        d="M35 16C35 6.05887 26.9411 -2 17 -2H0V2H17C24.732 2 31 8.26801 31 16H35ZM0 25H33H0ZM35 25V16C35 6.05887 26.9411 -2 17 -2V2C24.732 2 31 8.26801 31 16V25H35ZM0 0V25V0Z"
        fill="#1A5BA1"
        mask="url(#path-1-inside-1_44_489)"
      />
    </svg>
  );
}
