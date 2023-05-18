export default function SocialItem({
  data,
}: {
  data: {
    color: string;
    box: string;
    link: string;
    svg: string;
  };
}) {
  return (
    <li>
      <a
        href={data.link}
        className={`${data.color} p-2 font-medium text-white inline-flex items-center space-x-2 rounded`}
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className="w-5"
          preserveAspectRatio="xMidYMid meet"
          viewBox={data.box}
        >
          <g fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={data.svg}
              fill="currentColor"
            />
          </g>
        </svg>
      </a>
    </li>
  );
}
