export default function ProductProperties({ dimensions, brand }) {
  return (
    <section className="border-2 rounded-md p-2">
      <div>
        <h1 className="font-bold">Product Properties</h1>
      </div>
      <div className="flex justify-center align-items-center mt-3">
        <div className="flex justify-between align-items-center flex-wrap w-full gap-3">
          <div className="flex justify-between bg-gray-200  rounded-md p-2 w-[48%]">
            <p className="font-bold">Brand</p>
            <p>{brand}</p>
          </div>
          <div className="flex justify-between bg-gray-200 rounded-md p-2 w-[48%]">
            <p className="font-bold">Width</p>
            <p>{dimensions.width}</p>
          </div>
          <div className="flex justify-between bg-gray-200  rounded-md p-2 w-[48%]">
            <p className="font-bold">Height</p>
            <p>{dimensions.height}</p>
          </div>
          <div className="flex justify-between bg-gray-200  rounded-md p-2 w-[48%]">
            <p className="font-bold">Depth</p>
            <p>{dimensions.depth}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
