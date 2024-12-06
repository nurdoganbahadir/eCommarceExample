import { dividerClasses } from "@mui/material";

export default function ProductShipping({
  warrantyInformation,
  shippingInformation,
  returnPolicy,
}) {
  return (
    <section className="border-2 rounded-md w-full">
      <div className="flex font-bold p-2 gap-2">
        <div className="w-[33%] border-2 rounded-md">
          <div className="flex justify-center align-items-center gap-3 py-2">
            <svg
              class="h-8 w-8 text-indigo-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="1" y="3" width="15" height="13" />{" "}
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />{" "}
              <circle cx="5.5" cy="18.5" r="2.5" />{" "}
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span className="mt-1.5 text-sm">{shippingInformation}</span>
          </div>
        </div>
        <div className="w-[33%] border-2 rounded-md">
          <div className="flex justify-center align-items-center gap-3 py-2">
            <svg
              class="h-8 w-8 text-lime-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>

            <span className="mt-1.5 text-sm">{returnPolicy}</span>
          </div>
        </div>
        <div className="w-[33%] border-2 rounded-md">
          <div className="flex justify-center align-items-center gap-3 py-2">
            <svg
              class="h-8 w-8 text-teal-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5" />
            </svg>
            <span className="mt-1.5 text-sm">{warrantyInformation}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
