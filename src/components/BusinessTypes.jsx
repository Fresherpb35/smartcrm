const businessTypes = [
  {
    title: 'Manufacturer',
    icon: '🏭',
    items: [
      'Production Planning',
      'Quality Control',
      'Supplier Management',
      'Inventory Management',
    ],
    gradient: true, // highlight first card
  },
  {
    title: 'Retailer',
    icon: '🛒',
    items: [
      'Point of Sale',
      'Customer Engagement',
      'Inventory Control',
      'Sales Analytics',
    ],
  },
  {
    title: 'Wholesaler',
    icon: '📦',
    items: [
      'Bulk Order Management',
      'Distributor Relations',
      'Logistics Planning',
      'Pricing & Margin Control',
    ],
  },
];

const BusinessTypes = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Built for Every Business Type
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Choose your business type to get customized features and dashboards designed specifically for your industry needs.
        </p>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {businessTypes.map((type) => (
            <div
              key={type.title}
              className={`
                rounded-2xl p-8 transition-all duration-300 cursor-pointer
                border border-gray-200 bg-white
                hover:shadow-xl hover:-translate-y-1 hover:border-purple-200
                ${type.gradient ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-none' : ''}
              `}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{type.icon}</span>
                <h3
                  className={`
                    text-2xl font-bold
                    ${type.gradient ? 'text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'}
                  `}
                >
                  {type.title}
                </h3>
              </div>

              {/* Feature list */}
              <ul className="space-y-3">
                {type.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base">
                    <span className={type.gradient ? 'text-green-300' : 'text-green-500'}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;