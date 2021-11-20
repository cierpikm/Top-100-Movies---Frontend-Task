import React from "react";

export default function Play({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 140.598 164.299" className={className}>
      <defs>
        <filter
          id="Path_484"
          x="0"
          y="0"
          width="140.598"
          height="140.598"
          filterUnits="userSpaceOnUse"
        >
          <feOffset />
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feFlood floodOpacity="0.322" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="video"
          x="3.299"
          y="123.299"
          width="135"
          height="41"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur-2" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Component_125_14" data-name="Component 125 – 14" transform="translate(11.299 11.299)">
        <g id="play_circle_outline_black_24dp">
          <path id="Path_483" data-name="Path 483" d="M0,0H118V118H0Z" fill="none" />
          <g transform="matrix(1, 0, 0, 1, -11.3, -11.3)" filter="url(#Path_484)">
            <path
              id="Path_484-2"
              data-name="Path 484"
              d="M39.039,69.133,66.818,48.3,39.039,27.464ZM48.3,2A46.3,46.3,0,1,0,94.6,48.3,46.316,46.316,0,0,0,48.3,2Zm0,83.338A37.039,37.039,0,1,1,85.338,48.3,37.088,37.088,0,0,1,48.3,85.338Z"
              transform="translate(22 22)"
              fill="rgba(255,255,255,0.8)"
            />
          </g>
        </g>
        <g transform="matrix(1, 0, 0, 1, -11.3, -11.3)" filter="url(#video)">
          <text
            id="video-2"
            data-name="Oglądaj wideo"
            transform="translate(12.3 146.3)"
            fill="rgba(255,255,255,0.8)"
            fontSize="16"
            fontFamily="Poppins-Medium, Poppins"
            fontWeight="500"
          ></text>
        </g>
      </g>
    </svg>
  );
}
