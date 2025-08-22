import Link from 'next/link';

function Logo() {
  return (
    <>
      <Link href="/">
        <a className="image-container" ariaLabel="Go to homepage">
          {/* <img
            className="university-logo"
            height="40"
            src="https://images.ctfassets.net/dz50cburkkql/7trWXZia556Z9uftKAMCz/dc3b7d7fc1aa07ca0d752d09df6a01a5/Georgia_Tech_Yellow_Jackets_logo.svg"
            alt=""
          /> */}
          <img
            className="hack4impact-logo"
            height={60}
            src="/images/utk-logo.svg"
            alt="Hack4Impact UTK logo"
          />
        </a>
      </Link>
      <style jsx>{`
        .image-container {
          display: flex;
          align-items: center;
          height: 60px;
          padding: 0 !important;
          margin-right: auto;
        }

        .image-container img {
          max-height: 100%;
        }

        .image-container .university-logo {
          border-right: 1px solid #666;
          padding-right: 15px;
          margin-right: 15px;
        }

        .image-container .hack4impact-logo {
          /* empty styles remain */
        }

        @media (max-width: 420px) {
          .image-container {
            height: 32px;
          }

          .image-container .university-logo {
            padding-right: 10px;
            margin-right: 10px;
          }
        }
      `}</style>
    </>
  );
}

export default Logo;
