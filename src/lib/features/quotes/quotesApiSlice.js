// React'e özgü giriş noktasını kullanarak `createApi` ve `fetchBaseQuery`'i içe aktarın
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Bir hizmet tanımlayın, temel URL'yi ve beklenen uç noktaları belirleyin
export const quotesApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/quotes" }),
  reducerPath: "quotesApi",
  // Önbelleğe alma ve geçersiz kılma için etiket türlerini tanımlayın
  tagTypes: ["Quotes"],
  endpoints: (build) => ({
    // Sorgular için bir uç nokta tanımlayın
    getQuotes: build.query({
      query: (limit = 10) => `?limit=${limit}`,
      // `providesTags`, sorgu tarafından döndürülen verilerle ilişkilendirilen etiketi belirler
      providesTags: (result, error, id) => [{ type: "Quotes", id }],
    }),
  }),
});

// RTK-Query tarafından otomatik oluşturulan hook'lar
export const { useGetQuotesQuery } = quotesApiSlice;
