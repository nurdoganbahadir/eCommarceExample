// "use server";

// export const getAllProducts = async () => {
//   try {
//     const res = await fetch("https://dummyjson.com/products?limit=200", {
//       ContentType: "application/json",
//       method: "GET",
//     });

//     const data = await res.json();

//     if (res.ok) {
//       return data;
//     } else {
//       throw new Error(
//         data.message || "Something went wrong, Please try again!"
//       );
//     }
//   } catch (error) {
//     return { error: error.message };
//   }
// };

// export const getSingleProduct = async (id) => {
//   try {
//     const res = await fetch(`https://dummyjson.com/products/${id}`, {
//       ContentType: "aplication/json",
//       method: "GET",
//     });

//     const data = await res.json();

//     if (res.ok) {
//       return data;
//     } else {
//       throw new Error(
//         data.message || "Something went wrong, Please try again!"
//       );
//     }
//   } catch (error) {
//     return { error: error.message };
//   }
// };
