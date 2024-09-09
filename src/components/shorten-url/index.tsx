import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import UrlList from "./urlList";
import { useState } from "react";
import { useUrlContext } from "../../context";

type ShortenURLProps = {
  url: string;
};

function ShortenURL() {
  const { addUrl } = useUrlContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ShortenURLProps>();
  const [isLoading, setIsLoading] = useState(false);

  const shortenURL = async (data: { url: string }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shorten",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response.data);
      const shortenedUrl = response.data.result_url;
      addUrl({ shortenedUrl, prevUrl: data.url });
      toast.success("URL shortened successfully!");
      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
      toast.error(error.message);
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full h-auto">
      {/* Url Shortner */}
      <div className="container mx-auto bg-shorten rounded-lg py-8">
        <div className=" px-4">
          <form
            onSubmit={handleSubmit(shortenURL)}
            className="rounded-lg p-4 flex gap-5 max-md:flex-col"
          >
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Shorten a link here..."
                className={`input input-bordered input-lg w-full rounded-md ${
                  errors.url ? "border-2 border-red-500" : ""
                }`}
                {...register("url", { required: "Please add a link!" })}
              />
              {errors.url && (
                <span className="text-red-500 text-md italic py-2">
                  {errors.url.message}
                </span>
              )}
            </div>
            <button className="bg-teal-500 btn btn-lg border-none text-white hover:bg-teal-600">
              {isLoading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Shorten It!"
              )}
            </button>
          </form>
        </div>
      </div>
      {/* Url list */}
      <UrlList />
    </section>
  );
}

export default ShortenURL;
