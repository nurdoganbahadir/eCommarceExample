"use client";
const categories = {
  men: [
    { name: "Men Shirts", value: "mens-shirts" },
    { name: "Men Shoes", value: "mens-shoes" },
    { name: "Men Watches", value: "mens-watches" },
  ],
  women: [
    { name: "Women Bags", value: "womens-bags" },
    { name: "Women Dresses", value: "womens-dresses" },
    { name: "Women Jewellery", value: "womens-jewellery" },
    { name: "Womens Shoes", value: "womens-shoes" },
    { name: "Tops", value: "tops" },
  ],
  electronics: [
    { name: "Smartphones", value: "smartphones" },
    { name: "Laptops", value: "laptops" },
    { name: "Tablets", value: "tablets" },
    { name: "Mobile Accessories", value: "mobile-accessories" },
  ],
  cosmetics: [
    { name: "Beauty", value: "beauty" },
    { name: "Fragrances", value: "fragrances" },
    { name: "Skin Care", value: "skin-care" },
  ],
  home: [
    { name: "Furniture", value: "furniture" },
    { name: "Home Decoration", value: "home-decoration" },
    { name: "Kitchen Accessories", value: "kitchen-accessories" },
  ],
  market: [{ name: "Groceries", value: "groceries" }],
  vehicles: [
    { name: "Motorcycle", value: "motorcycle" },
    { name: "Vehicle", value: "vehicle" },
  ],
  sports: [
    { name: "Sports Accessories", value: "sports-accessories" },
    { name: "Sunglasses", value: "sunglasses" },
  ],
};

function CategoriesBar() {
  
  return (
    <div className="w-full bg-slate-300">
      <div className="container max-w-7xl mx-auto flex justify-center">
        {Object.keys(categories).map((categoryKey) => (
          <div key={categoryKey} className="relative group">
            <button className="px-4 py-2 text-sm font-medium text-gray-700  hover:text-lastColor">
              {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
            </button>
            <div className="absolute left-0 hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 group-hover:block">
              {categories[categoryKey].map((subCategory) => (
                <button
                  key={subCategory.value}
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-lastColor"
                >
                  {subCategory.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesBar;
