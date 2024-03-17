/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const Dua = () => {
  return (
    <div className="bg-white px-6 py-5 mb-5 rounded-xl">
      {/* dua logo and name  */}
      <div className="flex items-center gap-4 mb-8">
        <Image
          src="/icons/allah (Traced).svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-9"
        />
        <p className="text-[#1FA45B] font-semibold">
          2. The servant is dependent on his Lord #2
        </p>
      </div>

      {/* dua body  */}
      <div className="text-sm text-justify">
        <p className="mb-7 leading-8">
          Prophet (ﷺ) used to say after every compulsory prayer, The servant
          will ask his Lord for all of his religiously and worldly needs,
          because the treasure of all things is in the hands of Allah. Allah
          says (interpretation of the meaning): “And there is not a thing but
          that with Us are its depositories, and We do not send it down except
          according to a known measure.” (Sura Al-Hijr 15:21) No one can
          withhold what Allah gives; And, no one can give what he resists.
        </p>
        <p className="mb-7 leading-[2] text-[2.5rem] font-arabic">
          لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
          وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
          مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ
          ذَا الْجَدِّ مِنْكَ الْجَدُّ
        </p>
        <p className="mb-7 italic leading-8">
          <span className="font-medium">Transliteration: </span>Laa ilaaha
          illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa
          'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa
          mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu
        </p>
        <p className="mb-7">
          <span className="font-semibold">Translation: </span>There is none
          worthy of worship except Allah alone with no partner or associate. He
          is the Dominion and to Him be all praise, and He is able to do all
          things. O Allah, one can withhold what You have given and none can
          give what You have withheld, and no wealth or fortune can benefit
          anyone for from You comes all wealth and fortune.
        </p>

        <p className="font-medium leading-6">
          <span className="text-[#1FA45B]">Reference:</span>
          <br />
          Bukhari: 6404
        </p>
      </div>

      {/* dua action btns  */}
      <div className="mt-7 flex justify-between items-center">
        {/* dua play btn  */}
        <div>
          <button>
            <Image
              src="/icons/play.svg"
              alt=""
              width={100}
              height={100}
              className="w-11"
            />
          </button>
        </div>

        {/* other action btn  */}
        <div className="flex justify-between gap-8">
          {/* copy btn  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.00027 16.0011H6.00027C5.46984 16.0011 4.96113 15.7904 4.58606 15.4153C4.21099 15.0403 4.00027 14.5315 4.00027 14.0011V6.00111C4.00027 5.47068 4.21099 4.96197 4.58606 4.5869C4.96113 4.21183 5.46984 4.00111 6.00027 4.00111H14.0003C14.5307 4.00111 15.0394 4.21183 15.4145 4.5869C15.7896 4.96197 16.0003 5.47068 16.0003 6.00111V8.00111M10.0003 20.0011H18.0003C18.5307 20.0011 19.0394 19.7904 19.4145 19.4153C19.7896 19.0403 20.0003 18.5315 20.0003 18.0011V10.0011C20.0003 9.47068 19.7896 8.96197 19.4145 8.5869C19.0394 8.21183 18.5307 8.00111 18.0003 8.00111H10.0003C9.46984 8.00111 8.96113 8.21183 8.58606 8.5869C8.21099 8.96197 8.00027 9.47068 8.00027 10.0011V18.0011C8.00027 18.5315 8.21099 19.0403 8.58606 19.4153C8.96113 19.7904 9.46984 20.0011 10.0003 20.0011Z"
                stroke="#868686"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* saved btn  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.99973 5C4.99973 4.46956 5.21044 3.96086 5.58551 3.58579C5.96058 3.21071 6.46929 3 6.99972 3H16.9997C17.5301 3 18.0388 3.21071 18.4139 3.58579C18.789 3.96086 18.9997 4.46956 18.9997 5V21L11.9997 17.5L4.99973 21V5Z"
                stroke="#868686"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* memorize btn  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_1052)">
                <path
                  d="M17.994 2.28839C16.7734 1.19778 15.2786 0.460673 13.6703 0.156407C12.062 -0.147859 10.4012 -0.00776339 8.86658 0.561616C7.33198 1.131 5.98172 2.1081 4.96111 3.38776C3.9405 4.66743 3.28819 6.2012 3.0744 7.82399C2.88242 9.24698 3.03607 10.6953 3.52234 12.0463C4.00861 13.3973 4.81319 14.6114 5.868 15.5856C6.52006 16.1576 7.0462 16.8588 7.41306 17.6448C7.77993 18.4308 7.97952 19.2844 7.9992 20.1516V20.3124C8.00015 21.2908 8.38922 22.2288 9.08103 22.9206C9.77283 23.6124 10.7108 24.0014 11.6892 24.0024H12.3096C13.288 24.0014 14.226 23.6124 14.9178 22.9206C15.6096 22.2288 15.9986 21.2908 15.9996 20.3124V19.7628C16.0146 18.9963 16.1951 18.2422 16.5285 17.5519C16.8619 16.8616 17.3406 16.2514 17.9316 15.7632C18.89 14.9237 19.6592 13.8901 20.1881 12.7309C20.7169 11.5717 20.9935 10.3134 20.9994 9.03926C21.0053 7.76513 20.7404 6.50429 20.2223 5.34026C19.7042 4.17622 18.9446 3.13676 17.994 2.28839ZM12.3096 22.002H11.688C11.2401 22.0014 10.8107 21.8231 10.494 21.5064C10.1772 21.1897 9.99903 20.7603 9.9984 20.3124L9.99 20.0028H13.998V20.3124C13.9974 20.7603 13.8191 21.1897 13.5024 21.5064C13.1857 21.8231 12.7563 22.0014 12.3084 22.002H12.3096ZM16.6092 14.262C15.4708 15.2494 14.6485 16.5504 14.2452 18.0024H12.9996V10.818C13.5822 10.6118 14.087 10.2307 14.4448 9.72684C14.8026 9.22294 14.9961 8.62082 14.9988 8.00279C14.9862 7.74616 14.8754 7.50419 14.6893 7.327C14.5032 7.14982 14.2561 7.05099 13.9992 7.05099C13.7423 7.05099 13.4951 7.14982 13.3091 7.327C13.123 7.50419 13.0122 7.74616 12.9996 8.00279C12.9996 8.26806 12.8942 8.52247 12.7066 8.71004C12.5191 8.89762 12.2647 9.00299 11.9994 9.00299C11.7341 9.00299 11.4797 8.89762 11.2921 8.71004C11.1046 8.52247 10.9992 8.26806 10.9992 8.00279C10.9992 7.73768 10.8939 7.48343 10.7064 7.29597C10.519 7.10851 10.2647 7.00319 9.9996 7.00319C9.73449 7.00319 9.48023 7.10851 9.29277 7.29597C9.10531 7.48343 9 7.73768 9 8.00279C9.00267 8.62082 9.19615 9.22294 9.55399 9.72684C9.91183 10.2307 10.4166 10.6118 10.9992 10.818V18.0024H9.678C9.22695 16.5117 8.38108 15.1707 7.23 14.1216C6.20156 13.1631 5.48561 11.917 5.17536 10.5458C4.86512 9.17462 4.97498 7.74176 5.49063 6.43387C6.00627 5.12598 6.90381 4.00367 8.06634 3.21312C9.22888 2.42256 10.6025 2.00039 12.0084 2.00159C13.7261 1.99656 15.3844 2.63043 16.6608 3.77999C17.4002 4.43975 17.991 5.24908 18.394 6.15437C18.797 7.05967 19.0031 8.04027 18.9986 9.03121C18.994 10.0222 18.779 11.0008 18.3677 11.9024C17.9564 12.804 17.3582 13.6078 16.6128 14.2608H16.6092V14.262Z"
                  fill="#868686"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_1052">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>

          {/* share btn  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.68408 13.3424C8.88608 12.9384 9.00008 12.4824 9.00008 12.0004C9.00008 11.5184 8.88608 11.0624 8.68408 10.6584M8.68408 13.3424V10.6584M8.68408 13.3424C8.38178 13.9467 7.88428 14.4314 7.27217 14.7177C6.66007 15.0041 5.96921 15.0754 5.31152 14.9201C4.65384 14.7648 4.06785 14.3919 3.64849 13.862C3.22914 13.3321 3.00098 12.6761 3.00098 12.0004C3.00098 11.3246 3.22914 10.6686 3.64849 10.1387C4.06785 9.60877 4.65384 9.23596 5.31152 9.08066C5.96921 8.92535 6.66007 8.99665 7.27217 9.283C7.88428 9.56934 8.38178 10.054 8.68408 10.6584M8.68408 13.3424L15.3161 16.6584M8.68408 10.6584L15.3161 7.34236M15.3161 16.6584C14.9602 17.3702 14.9016 18.1943 15.1533 18.9493C15.4049 19.7043 15.9462 20.3284 16.6581 20.6844C17.3699 21.0403 18.194 21.0988 18.949 20.8472C19.704 20.5955 20.3282 20.0542 20.6841 19.3424C21.04 18.6305 21.0986 17.8064 20.8469 17.0514C20.5952 16.2964 20.0539 15.6723 19.3421 15.3164C18.9896 15.1401 18.6059 15.035 18.2128 15.0071C17.8197 14.9792 17.425 15.0289 17.0511 15.1535C16.2961 15.4052 15.672 15.9465 15.3161 16.6584ZM15.3161 7.34236C15.4923 7.69476 15.7362 8.009 16.0339 8.26714C16.3316 8.52527 16.6772 8.72225 17.051 8.84682C17.4248 8.97139 17.8195 9.02111 18.2125 8.99315C18.6055 8.96519 18.9892 8.86009 19.3416 8.68386C19.694 8.50762 20.0082 8.26371 20.2664 7.96603C20.5245 7.66835 20.7215 7.32274 20.846 6.94894C20.9706 6.57514 21.0203 6.18046 20.9924 5.78744C20.9644 5.39442 20.8593 5.01076 20.6831 4.65836C20.3272 3.94665 19.7031 3.40548 18.9482 3.1539C18.1932 2.90232 17.3693 2.96094 16.6576 3.31686C15.9459 3.67278 15.4047 4.29685 15.1531 5.05177C14.9015 5.8067 14.9602 6.63065 15.3161 7.34236Z"
                stroke="#868686"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* about dua btn  */}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.86055 1.99889H16.1406L22.0005 7.85889V16.1389L16.1406 21.9989H7.86055L2.00055 16.1389V7.85889L7.86055 1.99889Z"
                stroke="#868686"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 7.99889V11.9989"
                stroke="#868686"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16.0011H12.01"
                stroke="#868686"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dua;
