// ============================================
// CENTRALIZED TYPE DEFINITIONS FOR TELKOMEAT
// ============================================

// ============================================
// CORE TYPES
// ============================================

export type CategoryType = "makanan" | "snack" | "minuman"

export type OrderStatus = "pending" | "confirmed" | "cancelled" | "completed"

export type PaymentMethodType = "bank_transfer" | "qr_code"

// ============================================
// MENU & CART TYPES
// ============================================

export interface MenuItem {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: CategoryType
    available?: boolean
}

export interface CartItem extends MenuItem {
    quantity: number
    notes?: string
}

// ============================================
// ORDER TYPES
// ============================================

export interface OrderItem {
    id?: string
    product_id?: string
    name: string
    quantity: number
    price: number
    subtotal?: number
}

export interface Order {
    id: string
    customer: string
    items: OrderItem[]
    total: number
    status: OrderStatus
    timestamp: string
    notes?: string
    paymentProof?: string
    payment_proof?: string
    delivery_notes?: string
}

export interface UserOrder {
    id: string
    kantin_id: number
    kantin_nama: string
    total_price: number
    status: OrderStatus
    payment_method: PaymentMethodType
    delivery_notes?: string
    created_at: string
    updated_at: string
    items: OrderItem[]
}

export interface UserOrderDetail extends UserOrder {
    items: (OrderItem & { subtotal: number })[]
    payment_proof?: string
    notes?: string
}

// ============================================
// SALES & DASHBOARD TYPES
// ============================================

export interface SalesData {
    date: string
    orders: number
    revenue: number
}

// ============================================
// PAYMENT TYPES
// ============================================

export interface PaymentMethod {
    type: PaymentMethodType
    label: string
}

export interface BankDetails {
    bank: string
    accountNumber: string
    accountName: string
}

// ============================================
// CANTEEN TYPES
// ============================================

export interface OperationalHour {
    day: string
    hours: string
}

export interface CanteenInfo {
    id: string
    name: string
    location: string
    distance: string
    hours: string
    operationalHours: OperationalHour[]
    phone: string
    image: string
}

// ============================================
// API RESPONSE TYPES
// ============================================

export interface ApiResponse<T> {
    success: boolean
    message: string
    data?: T
    orders?: T[]
    order?: T
}

// ============================================
// COMMON PROP TYPES
// ============================================

export interface PartnerNavbarProps {
    canteenName: string
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
}

export interface SidebarProps {
    activePage?: string
}

export interface CanteenNavbarProps {
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
    activePage: string
}

// ============================================
// FORM PROP TYPES
// ============================================

export interface CanteenInfoFormData {
    name: string
    location: string
    phone: string
}

export interface OperatingHoursFormData {
    weekdays: { open: string; close: string }
    weekends: { open: string; close: string }
}

export interface CanteenInfoFormProps {
    initialData?: CanteenInfoFormData
    onSubmit: (data: CanteenInfoFormData) => void
}

export interface OperatingHoursFormProps {
    initialData?: OperatingHoursFormData
    onSubmit: (data: OperatingHoursFormData) => void
}

// ============================================
// MODAL PROP TYPES
// ============================================

export interface MenuDetailModalProps {
    item: MenuItem | null
    isOpen: boolean
    onClose: () => void
    onAddToCart: (item: MenuItem, quantity: number, notes?: string) => void
    initialQuantity?: number
}

export interface MenuModalFormData {
    name: string
    description: string
    price: number
    category: CategoryType
    image: string | File
}

export interface MenuModalProps {
    showModal: boolean
    editingId: string | null
    formData: MenuModalFormData
    onClose: () => void
    onSave: () => void
    onFormChange: (field: string, value: string | number | File) => void
}

export interface OrderDetailModalProps {
    order: Order | null
    isOpen: boolean
    onClose: () => void
    onConfirmOrder: (orderId: string) => void
    onCancelOrder: (orderId: string) => void
}

export interface PaymentProofModalProps {
    paymentProof: string | null
    isOpen: boolean
    onClose: () => void
}

// ============================================
// COMPONENT PROP TYPES
// ============================================

export interface CanteenInfoSectionProps {
    canteen: CanteenInfo
    isActive?: boolean
}

export interface MenuTabsProps {
    activeTab: CategoryType
    setActiveTab: (tab: CategoryType) => void
}

export interface MenuGridProps {
    items: MenuItem[]
    onAddToCart: (item: MenuItem) => void
    onItemClick: (item: MenuItem) => void
}

export interface CartSectionProps {
    cart: CartItem[]
    onUpdateQuantity: (itemId: string, quantity: number) => void
    onRemoveFromCart: (itemId: string) => void
    totalPrice: number
    totalItems: number
    canteenId: string
}

export interface MenuHeaderProps {
    onAddItem: () => void
}

export interface MenuCategoriesProps {
    menuItems: MenuItem[]
    onEdit: (item: MenuItem) => void
    onDelete: (id: string) => void
}

export interface MenuItemCardProps {
    item: MenuItem
    onEdit: (item: MenuItem) => void
    onDelete: (id: string) => void
}

export interface OrdersHeaderProps {
    title: string
    description: string
}

export interface OrdersTableProps {
    orders: Order[]
    onViewOrder: (order: Order) => void
}

export interface SettingsHeaderProps {
    title: string
    description: string
}

export interface CanteenStatusCardProps {
    kantinId: number
    kantinName: string
    isActive: boolean
    onStatusChange: (kantinId: number, newStatus: boolean) => Promise<void>
}

export interface DashboardHeaderProps {
    canteenName: string
}

export interface MetricsGridProps {
    totalOrders: number
    totalRevenue: number
    avgOrderValue: string
    completionRate: string
}

export interface SalesChartProps {
    salesData: SalesData[]
}

export interface RecentOrdersProps {
    orders: Order[]
}

export interface DashboardStatsProps {
    title: string
    value: string | number
    change: string
    isPositive: boolean
}

// ============================================
// CHECKOUT PROP TYPES
// ============================================

export interface CheckoutNavbarProps {
    canteenParam: string
    isSuccess?: boolean
}

export interface OrderSummaryProps {
    cart: CartItem[]
}

export interface PaymentMethodSectionProps {
    paymentMethod: PaymentMethodType | null
    setPaymentMethod: (method: PaymentMethodType | null) => void
    availablePaymentMethods: PaymentMethod[]
    total: number
}

export interface PaymentProofUploadProps {
    paymentProof: File | null
    previewUrl: string
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface DeliveryNotesProps {
    deliveryNotes: string
    setDeliveryNotes: (notes: string) => void
}

export interface OrderTotalProps {
    cart: CartItem[]
    canteenName: string
    paymentMethod: PaymentMethodType | null
    paymentProof: File | null
    onPlaceOrder: (total: number) => void
}

export interface SuccessModalProps {
    canteenName: string
    total: number
    totalItems: number
}

// ============================================
// ORDER HISTORY PROP TYPES
// ============================================

export interface OrderCardProps {
    order: UserOrder
    onViewDetail: (orderId: string) => void
}

export interface OrderListProps {
    orders: UserOrder[]
}

export interface EmptyStateProps {
    onNavigateToHome: () => void
}
