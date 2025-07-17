import Image from 'next/image';

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  imageSrc: string;
  isHot?: boolean;
}

interface MenuCategoryProps {
  title: string;
  items: MenuItemProps[];
}

const MenuItem = ({
  name,
  price,
  description,
  imageSrc,
  isHot,
}: MenuItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
      {/* Image Container */}
      <div className="w-full md:w-44 h-44 bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={176}
          height={176}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl text-gray-800">{name}</h3>
            {isHot && (
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                Hot
              </span>
            )}
          </div>
          <p className="text-[#DC143C] font-bold">
            Rp {price.toLocaleString()}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-1">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Mangkok Bakso SVG Component
const BowlIcon = ({ className = '' }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bowl */}
      <path
        d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 11.4477 19.5523 11 19 11H5C4.44772 11 4 11.4477 4 12Z"
        fill="#DC143C"
      />
      {/* Bowl rim */}
      <ellipse cx="12" cy="11" rx="8" ry="1.5" fill="#B91C3C" />
      {/* Bakso balls */}
      <circle cx="10" cy="13" r="1.5" fill="#8B4513" />
      <circle cx="14" cy="14" r="1.2" fill="#A0522D" />
      <circle cx="12" cy="15" r="1" fill="#8B4513" />
      {/* Steam */}
      <path
        d="M10 8C10 7.5 10.5 7 11 7.5C11.5 7 12 7.5 12 8"
        stroke="#DC143C"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M14 8.5C14 8 14.5 7.5 15 8C15.5 7.5 16 8 16 8.5"
        stroke="#DC143C"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  </div>
);

// Bakso Ball SVG Component
const BaksoIcon = ({ className = '' }: { className?: string }) => (
  <div className={`inline-block ${className}`}>
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main bakso ball */}
      <circle cx="12" cy="12" r="10" fill="#8B4513" />
      {/* Texture highlight */}
      <circle cx="12" cy="12" r="7" fill="#A0522D" opacity="0.8" />
      <circle cx="12" cy="12" r="4" fill="#8B4513" opacity="0.5" />
      {/* Small texture dots */}
      <circle cx="10" cy="10" r="1" fill="#654321" opacity="0.6" />
      <circle cx="14" cy="14" r="1" fill="#654321" opacity="0.6" />
      <circle cx="15" cy="9" r="0.8" fill="#654321" opacity="0.4" />
    </svg>
  </div>
);

export default function MenuCategory({ title, items }: MenuCategoryProps) {
  return (
    <div className="w-full mb-24">
      <div className="flex items-center mb-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-start tracking-wide uppercase relative text-[#DC143C]">
          {title}
          {/* Decorative bakso and bowls surrounding text */}
          <BowlIcon className="absolute -top-5 left-1/4 transform -rotate-12" />
          <BaksoIcon className="absolute -bottom-5 left-1/3 transform rotate-45" />
          <BowlIcon className="absolute -top-4 right-1/4 transform rotate-12" />
          <BaksoIcon className="absolute top-1/2 -right-8 transform -rotate-45 -translate-y-1/2" />
          <BowlIcon className="absolute top-1/2 -left-10 transform rotate-30 -translate-y-1/2" />
          <BaksoIcon className="absolute -bottom-4 right-1/3 transform -rotate-30" />
        </h2>

        {/* Line with bakso and bowls */}
        <div className="ml-6 flex-1 flex items-center">
          <BowlIcon className="mx-1 transform rotate-12" />
          <BaksoIcon className="mx-1 transform -rotate-12" />
          <BowlIcon className="mx-1 transform rotate-45" />
          <div className="flex-1 h-0.5 bg-gradient-to-r from-[#DC143C] via-gray-200 to-gray-200 ml-2"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-x-16">
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
