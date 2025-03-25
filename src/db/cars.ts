import { CarsModel } from "@/models/cars.model";

export const cars: CarsModel[] = [
  {
    id: "rana-1401-006",
    name: "رانا پلاس",
    model: "2022-1401",
    rental: {
      days_3_to_14: 1550000,
      more_than_14_days: 1450000,
      minimum_rental: 3,
      deposit: 23000000,
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4,
    },
    features: {
      cruise_control: true,
      chassis_type: "سواری",
      option_type: "فول آپشن",
      hill_start_assist: true,
      transmission: "دستی",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۴ اسپیکر",
      monitor: "۷ اینچی لمسی",
      driver_seat_adjustment: "دستی",
      panoramic_roof: false,
      gps: true,
      connectivity: ["Bluetooth", "USB"],
      braking_system: ["ABS", "EBD"],
      auto_park: false,
      auto_drive: false,
    },
    engine: {
      type: "بنزینی",
      capacity: 1.6,
      cylinders: 4,
      acceleration: 12.5,
      fuel_consumption: 6.8,
    },
    with_driver: "با راننده",  img:"runa.png"
    ,location:'تهران'

  },
  
  {
    id: "samand-soren-1401-011",
    name: "سمند سورن پلاس",
    model: "2022-1401",
    rental: {
      days_3_to_14: 1650000,
      more_than_14_days: 1550000,
      minimum_rental: 3,
      deposit: 24000000,
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4,
    },
    features: {
      cruise_control: true,
      chassis_type: "سواری",
      option_type: "فول آپشن",
      hill_start_assist: false,
      transmission: "دستی",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۴ اسپیکر",
      monitor: "۷ اینچی لمسی",
      driver_seat_adjustment: "دستی",
      panoramic_roof: false,
      gps: true,
      connectivity: ["Bluetooth", "USB"],
      braking_system: ["ABS", "EBD"],
      auto_park: false,
      auto_drive: false,
    },
    engine: {
      type: "بنزینی",
      capacity: 1.8,
      cylinders: 4,
      acceleration: 11.8,
      fuel_consumption: 7.4,
    },
    with_driver: "با راننده",img:"samand-lx.png",location:'تهران'

  },
  {
    id: "peugeot-206-1400-012",
    name: "پژو ۲۰۶",
    model: "2021-1400",
    rental: {
      days_3_to_14: 1350000,
      more_than_14_days: 1250000,
      minimum_rental: 3,
      deposit: 21000000,
    },
    capacity: {
      passengers: 5,
      luggage: 2,
      door: 4,
    },
    features: {
      cruise_control: false,
      chassis_type: "هاچ‌بک",
      option_type: "استاندارد",
      hill_start_assist: false,
      transmission: "دستی",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: false,
      audio_system: "۴ اسپیکر",
      monitor: "ندارد",
      driver_seat_adjustment: "دستی",
      panoramic_roof: false,
      gps: false,
      connectivity: ["Bluetooth", "USB"],
      braking_system: ["ABS"],
      auto_park: false,
      auto_drive: false,
    },
    engine: {
      type: "بنزینی",
      capacity: 1.4,
      cylinders: 4,
      acceleration: 13.0,
      fuel_consumption: 6.5,
    },
    with_driver: "با راننده ",img:"p206.png",location:'اصفهان'

  },{
    id: "renault-l90-automatic-1400-001",
    name: "رنو ال ۹۰ اتوماتیک",
    model: "2022-1402",
    rental: {
      days_3_to_14: 1500000,
      more_than_14_days: 1400000,
      minimum_rental: 3,
      deposit: 25000000
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4
    },
    features: {
      cruise_control: false,
      chassis_type: "سدان",
      option_type: "استاندارد",
      hill_start_assist: false,
      transmission: "اتوماتیک",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: false,
      audio_system: "۴ اسپیکر",
      monitor: "ندارد",
      driver_seat_adjustment: "دستی",
      panoramic_roof: false,
      gps: false,
      connectivity: ["Bluetooth", "USB"],
      braking_system: ["ABS", "EBD"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 1.6,
      cylinders: 4,
      acceleration: 11.7,
      fuel_consumption: 8.3
    },
    with_driver: " بدون راننده ",img:"l90.png",location:'خراسان رضوی'

  },
  {
    id: "peugeot-pars-1400-002",
    name: "پژو پارس",
    model: "2023-1403",
    rental: {
      days_3_to_14: 1400000,
      more_than_14_days: 1300000,
      minimum_rental: 3,
      deposit: 22000000
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4
    },
    features: {
      cruise_control: false,
      chassis_type: "سدان",
      option_type: "استاندارد",
      hill_start_assist: false,
      transmission: "دستی",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: false,
      audio_system: "۴ اسپیکر",
      monitor: "ندارد",
      driver_seat_adjustment: "دستی",
      panoramic_roof: false,
      gps: false,
      connectivity: ["Bluetooth", "USB"],
      braking_system: ["ABS", "EBD"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 1.8,
      cylinders: 4,
      acceleration: 11.0,
      fuel_consumption: 8.5
    },
    with_driver: " بدون راننده ",img:"pars.png",location:'مشهد'

  },
 
  {
    id: "chery-arrizo5-1400-004",
    name: "چری آریزو ۵",
    model: "2020-1399",
    rental: {
      days_3_to_14: 1700000,
      more_than_14_days: 1600000,
      minimum_rental: 3,
      deposit: 24000000
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4
    },
    features: {
      cruise_control: true,
      chassis_type: "سدان",
      option_type: "لاکچری",
      hill_start_assist: true,
      transmission: "اتوماتیک",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۶ اسپیکر",
      monitor: "۷ اینچ",
      driver_seat_adjustment: "برقی",
      panoramic_roof: false,
      gps: false,
      connectivity: ["Bluetooth", "USB"],
      braking_system: ["ABS", "EBD"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 1.5,
      cylinders: 4,
      acceleration: 11.0,
      fuel_consumption: 6.5
    },
    with_driver: " بدون راننده ",img:"cherry-arizo-5.png",location:'البرز'

  },  { 
    id: "kia_cerato_2018_001",
    name: "کیا سراتو",
    model: "2018-1397",
    rental: {
      days_3_to_14: 1800000,
      more_than_14_days: 1700000,
      minimum_rental: 3,
      deposit: 25000000
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4
    },
    features: {
      cruise_control: true,
      chassis_type: "سدان",
      option_type: "لاکچری",
      hill_start_assist: true,
      transmission: "اتوماتیک",
      apple_carplay: false,
      seat_heating: true,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۶ اسپیکر",
      monitor: "۷ اینچ",
      driver_seat_adjustment: "برقی",
      panoramic_roof: false,
      gps: true,
      connectivity: ["Bluetooth", "USB", "AUX"],
      braking_system: ["ABS", "EBD", "ESP"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 2.0,
      cylinders: 4,
      acceleration: 10.5,
      fuel_consumption: 7.2
    },
    with_driver: "با راننده ",img:"kia-cerato-.png",location:'اصفهان'

  },
  { id:"mvm_x33_2018_002",
    name: "ام وی ام X33",
    model: "2018-1397",
    rental: {
      days_3_to_14: 1600000,
      more_than_14_days: 1500000,
      minimum_rental: 3,
      deposit: 23000000
    },
    capacity: {
      passengers: 5,
      luggage: 4,
      door: 5
    },
    features: {
      cruise_control: false,
      chassis_type: "کراس‌اوور",
      option_type: "استاندارد",
      hill_start_assist: false,
      transmission: "اتوماتیک",
      apple_carplay: false,
      seat_heating: false,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۴ اسپیکر",
      monitor: "۷ اینچ",
      driver_seat_adjustment: "دستی",
      panoramic_roof: false,
      gps: false,
      connectivity: ["USB", "AUX"],
      braking_system: ["ABS", "EBD"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 2.0,
      cylinders: 4,
      acceleration: 12.5,
      fuel_consumption: 6.9
    },
    with_driver: "با راننده "   , img:"optima.png"
    ,location:'تهران'

  },
  {id:"mitsubishi_lancer_2018_003",
    name: "میتسوبیشی لنسر",
    model: "2018-1397",
    rental: {
      days_3_to_14: 1900000,
      more_than_14_days: 1800000,
      minimum_rental: 3,
      deposit: 26000000
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4
    },
    features: {
      cruise_control: true,
      chassis_type: "سدان",
      option_type: "لاکچری",
      hill_start_assist: true,
      transmission: "اتوماتیک",
      apple_carplay: false,
      seat_heating: true,
      seat_cooling: false,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۶ اسپیکر",
      monitor: "۷ اینچ",
      driver_seat_adjustment: "برقی",
      panoramic_roof: false,
      gps: true,
      connectivity: ["Bluetooth", "USB", "AUX"],
      braking_system: ["ABS", "EBD", "ESP"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 1.8,
      cylinders: 4,
      acceleration: 10.0,
      fuel_consumption: 7.0
    },
    with_driver: " بدون راننده ",    img:"hyundai-santafe.png"
    ,location:'خراسان رضوی'

  },
 { id:"hyundai_elantra_2018_004",
    name: "هیوندای النترا",
    model: "2020-1399",
    rental: {
      days_3_to_14: 1850000,
      more_than_14_days: 1750000,
      minimum_rental: 3,
      deposit: 25500000
    },
    capacity: {
      passengers: 5,
      luggage: 3,
      door: 4
    },
    features: {
      cruise_control: true,
      chassis_type: "سدان",
      option_type: "لاکچری",
      hill_start_assist: true,
      transmission: "اتوماتیک",
      apple_carplay: true,
      seat_heating: true,
      seat_cooling: true,
      air_conditioning: true,
      rear_sensor: true,
      audio_system: "۶ اسپیکر",
      monitor: "۸ اینچ",
      driver_seat_adjustment: "برقی",
      panoramic_roof: true,
      gps: true,
      connectivity: ["Bluetooth", "USB", "AUX"],
      braking_system: ["ABS", "EBD", "ESP"],
      auto_park: false,
      auto_drive: false
    },
    engine: {
      type: "بنزینی",
      capacity: 2.0,
      cylinders: 4,
      acceleration: 9.6,
      fuel_consumption: 7.5
    },
    with_driver: "با راننده ",
    img:"elentra.png"
    ,location:'البرز'

  }
];
