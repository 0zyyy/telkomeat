import Image from "next/image"
import { Plus } from "lucide-react"
import { MenuGridProps, MenuItem } from "./types"

interface MenuGridPropsExtended extends MenuGridProps {
  onItemClick: (item: MenuItem) => void
}

export default function MenuGrid({ items, onAddToCart, onItemClick }: MenuGridPropsExtended) {
  return (
    <section className="px-4 sm:px-6 lg:px-12 pb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onAddToCart={onAddToCart}
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </section>
  )
}

function MenuItemCard({
  item,
  onAddToCart,
  onItemClick
}: {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
  onItemClick: (item: MenuItem) => void
}) {
  // Handle string "0"/"1" from API, boolean, or undefined (default to true)
  const isAvailable = item.available === "1" || item.available === true || item.available === undefined

  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer ${!isAvailable ? 'opacity-70 bg-gray-50' : ''}`}
      onClick={() => isAvailable && onItemClick(item)}
    >
      <div className="relative h-40 bg-gray-200">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className={`object-cover transition duration-300 ${isAvailable ? 'hover:scale-105' : 'grayscale'}`}
        />
        {/* Status Badge for unavailable items */}
        {!isAvailable && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Tidak Tersedia
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-sm mb-1 line-clamp-2">{item.name}</h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">Rp {item.price.toLocaleString("id-ID")}</span>
          {isAvailable ? (
            <button
              onClick={(e) => {
                e.stopPropagation() // Mencegah trigger click pada card
                onAddToCart(item)
              }}
              className="bg-primary text-white p-2 rounded-full hover:opacity-90 transition"
            >
              <Plus size={16} />
            </button>
          ) : (
            <span className="text-xs text-gray-500 italic">Habis</span>
          )}
        </div>
      </div>
    </div>
  )
}