import { useState } from "react";
import { useUrlContext } from "../../context";

function UrlList() {
  const [isCopied, setIsCopied] = useState<number | undefined>(undefined);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setIsCopied(index);
    setTimeout(() => {
      setIsCopied(undefined);
    }, 2000);
  };

  const { urls } = useUrlContext();

  return (
    <section className="container mx-auto py-5">
      <ul>
        {urls?.map((url, index) => (
          <li
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between w-full my-5 max-md:flex-col max-md:items-start max-md:p-0 "
          >
            <div className="max-md:border-b-2 max-md:p-3 w-full">
              {url.prevUrl}
            </div>
            <div className="flex items-center gap-3 max-md:flex-col max-md:items-start max-md:p-3 max-md:w-full">
              <p className="text-teal-500">{url.shortenedUrl}</p>
              <button
                onClick={() => copyToClipboard(url.shortenedUrl, index)}
                className={`bg-teal-500 btn px-10 text-lg border-none text-white max-md:w-full
                    ${
                      isCopied === index
                        ? "bg-deep-violet hover:bg-none"
                        : "hover:bg-teal-600"
                    }
                  `}
              >
                {isCopied === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UrlList;
