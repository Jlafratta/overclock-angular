import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // raw data
  products: Array<Product> = [
    { id: 1, name: "COOLER AEROCOOL FROST 12 120MM RGB", description: "", price: 1400, imgUrl: "assets/img/products/cooler_aerocool_frost_12_120mm_rgb_1.jpg" },
    { id: 2, name: "WATERCOOLER AEROCOOL PULSE L240F", description: "", price: 16000, imgUrl: "assets/img/products/watercooler_aerocool_pulse_l240f_2.jpg" },
    { id: 3, name: "WEBCAM LOGITECH C270", description: "", price: 4300, imgUrl: "assets/img/products/webcam_logitech_c270_3.jpg" },
    { id: 4, name: "Gabinete Aerocool AERO ONE DUO + 4 coolers", description: "", price: 14190, imgUrl: "//d26lpennugtm8s.cloudfront.net/stores/001/524/140/products/pic_20210131_234454-b6f72f5d22fe2425dd16121475104063-640-0.jpg" },
    { id: 5, name: "Auricular Logitech G635 7.1", description: "", price: 14500, imgUrl: "//d26lpennugtm8s.cloudfront.net/stores/001/524/140/products/pic_20210131_230603-f8b271e0e2bf123fbb16121451743493-640-0.jpg" },
    { id: 6, name: "Silla Gamer Aerocool Count BURGUNDY RED", description: "", price: 50310, imgUrl: "//d26lpennugtm8s.cloudfront.net/stores/001/524/140/products/1594676552_346643461-61d332186a9e7ead5916119407634359-640-0.jpg" },


  ];

  constructor() { }

  /**
   * Get all products
   */
  getAll() {
    return this.products;
  }
}
