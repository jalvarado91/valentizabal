export function IconPlay(props) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15,10.001c0,0.299-0.305,0.514-0.305,0.514l-8.561,5.303C5.51,16.227,5,15.924,5,15.149V4.852
 c0-0.777,0.51-1.078,1.135-0.67l8.561,5.305C14.695,9.487,15,9.702,15,10.001z"
      />
    </svg>
  );
}

export function IconPause(props) {
  return (
    <svg viewBox="0 0 43 43" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.7 34.9h-5.28a.67.67 0 0 1-.67-.66V9.05c0-.36.3-.66.67-.66h5.28c.38 0 .68.3.68.66v25.2c0 .36-.3.65-.68.65zM31.29 34.9H26a.67.67 0 0 1-.67-.66V9.05c0-.36.3-.66.67-.66h5.29c.37 0 .67.3.67.66v25.2c0 .36-.3.65-.67.65z" />
    </svg>
  );
}

function Player() {
  return (
    <div className="flex w-full max-w-lg">
      <div className="relative flex rounded shadow-xl text-white w-full">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            boxShadow: `10px 10px 25px -5px rgba(0, 0, 0, 0.1), 10px 10px 10px -5px rgba(0, 0, 0, 0.04), -10px -10px 25px -5px rgb(248 206 216 / 0.3), -10px -10px 10px -5px rgb(248 206 216 / 0.1)`,
          }}
        ></div>
        <div className="relative w-full flex space-x-2">
          <button className="py-3 px-4 hover:bg-opacity-25 bg-black bg-opacity-0 rounded-l transition ease-in duration-100">
            <IconPause className="h-10 w-10 fill-current" />
          </button>
          <div className="w-full pr-4 flex items-center justify-between">
            <div className="font-semibold">
              DNA -{" "}
              <span className="font-medium opacity-75">Kendrick Lamar</span>
            </div>
            <div className="text-lime flex space-x-2 font-semibold">
              <span>1:03</span>
              <span>/</span>
              <span>3:04</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <div className="h-screen w-full text-white">
      <div className="h-full w-full flex items-center justify-center">
        <Player />
      </div>
    </div>
  );
}
