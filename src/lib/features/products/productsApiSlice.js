// React'e özgü giriş noktasını kullanarak `createApi` ve `fetchBaseQuery`'i içe aktarın
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Bir hizmet tanımlayın, temel URL'yi ve beklenen uç noktaları belirleyin
export const productsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products/" }),
  reducerPath: "productsApi",
  // Önbelleğe alma ve geçersiz kılma için etiket türlerini tanımlayın
  tagTypes: ["Products"],
  endpoints: (build) => ({
    // Sorgular için bir uç nokta tanımlayın
    getProducts: build.query({
      query: (limit = 10) => `?limit=${limit}`,
      // `providesTags`, sorgu tarafından döndürülen verilerle ilişkilendirilen etiketi belirler
      providesTags: (result, error, id) => [{ type: "Products", id }],
    }),
  }),
});

// RTK-Query tarafından otomatik oluşturulan hook'lar
export const { useGetProductsQuery } = productsApiSlice;