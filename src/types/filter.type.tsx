export type FiltersType = {
  query?: string;
  name?: string; // فیلتر بر اساس نام خودرو
  model?: string; // فیلتر بر اساس سال تولید
  priceRange?: { min?: number; max?: number }; // فیلتر بازه قیمت اجاره
  minimumRentalDays?: number; // فیلتر حداقل تعداد روزهای اجاره
  depositRange?: { min?: number; max?: number }; // فیلتر میزان ودیعه
  passengers?: number; // فیلتر تعداد سرنشین
  luggage?: number; // فیلتر تعداد چمدان
  chassisType?: string; // فیلتر نوع شاسی (سواری، هاچ‌بک و ...)
  optionType?: string; // فیلتر نوع آپشن (فول، استاندارد و ...)
  transmission?: string; // فیلتر گیربکس (دستی، اتوماتیک)
  cruiseControl?: boolean; // فیلتر بر اساس کروز کنترل
  hillStartAssist?: boolean; // فیلتر بر اساس سیستم شروع حرکت در سربالایی
  appleCarplay?: boolean; // فیلتر بر اساس Apple CarPlay
  seatHeating?: boolean; // فیلتر بر اساس گرمکن صندلی
  seatCooling?: boolean; // فیلتر بر اساس سردکن صندلی
  airConditioning?: boolean; // فیلتر بر اساس سیستم تهویه مطبوع
  rearSensor?: boolean; // فیلتر بر اساس سنسور عقب
  audioSystem?: string; // فیلتر بر اساس نوع سیستم صوتی
  monitor?: string; // فیلتر بر اساس اندازه مانیتور
  driverSeatAdjustment?: string; // فیلتر بر اساس تنظیمات صندلی راننده
  panoramicRoof?: boolean; // فیلتر بر اساس سقف پانوراما
  gps?: boolean; // فیلتر بر اساس GPS
  connectivity?: string[]; // فیلتر بر اساس نوع اتصال (Bluetooth, USB و ...)
  brakingSystem?: string[]; // فیلتر بر اساس سیستم ترمز (ABS, EBD و ...)
  autoPark?: boolean; // فیلتر بر اساس پارک خودکار
  autoDrive?: boolean; // فیلتر بر اساس رانندگی خودکار
  engine?: {
    type?: string; // نوع سوخت (بنزینی، دیزلی و ...)
    capacity?: number; // حجم موتور
    cylinders?: number; // تعداد سیلندر
    acceleration?: number; // شتاب ۰ تا ۱۰۰
    fuelConsumption?: number; // مصرف سوخت
  };
  accelerationRange?: { min: number; max: number }; // فیلتر بازه شتاب
  fuelConsumptionRange?: { min: number; max: number }; // فیلتر بازه مصرف سوخت
  with_driver?: string;
  sortType?: string;
  location?: string;
};
