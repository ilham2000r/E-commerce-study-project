import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    list: [
      {
        name: 'Nike Air Jordan 1 Low OG "Wolf Grey',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2723cf61-69b2-4ba7-b979-6b93d19afd53/AIR+JORDAN+1+RETRO+LOW+OG.png',
        price: 5400,
        size: 0,
        brand: 'nike',
        status: 'newArrival',
        type: 'shoes'
      },
      {
        name: 'Adidas Samba OG',
        imageUrl: 'https://i8.amplience.net/i/jpl/jd_B75806_a?qlt=92&w=750&h=531&v=1&fmt=auto',
        price: 2800,
        size: 0,
        brand: 'adidas',
        status: 'newArrival',
        type: 'shoes'
      },
      {
        name: 'Fila Targa 88/22',
        imageUrl: 'https://i8.amplience.net/i/jpl/jd_1TM01822G-147_a?qlt=92&w=750&h=531&v=1&fmt=auto',
        price: 1200,
        size: 0,
        brand: 'fila',
        status: 'bestSell',
        type: 'shoes'
      },
      {
        name: 'Adidas Superstar Original',
        imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
        price: 4000,
        size: 0,
        brand: 'adidas',
        status: 'bestSell',
        type: 'shoes'
      },
      {
        name: 'Nike Air dunk low Panda',
        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9909210d-48ba-459e-96f4-faab32a41ce7/WMNS+AIR+JORDAN+1+LOW.png',
        price: 4300,
        size: 0,
        brand: 'nike',
        status: 'sale',
        type: 'shoes'
      },
      {
        name: 'Puma Rebound V6 Low',
        imageUrl: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1350,h_1350/global/392328/01/sv01/fnd/THA/fmt/png/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%9A%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%95%E0%B9%88%E0%B8%B3-Rebound-V6',
        price: 2500,
        size: 0,
        brand: 'puma',
        status: 'sale',
        type: 'shoes'
      },
      {
        name: 'New Balance Absorb 530 white',
        imageUrl: 'https://i8.amplience.net/i/jpl/jd_MR530SG_a?qlt=92&w=750&h=531&v=1&fmt=auto',
        price: 2900,
        size: 0,
        brand: 'newBalance',
        status: 'sale',
        type: 'shoes'
      },
      
    ] // เปลี่ยนให้เป็น array ที่สามารถเก็บข้อมูลสินค้าได้จริง
  }),
  actions: {
    async loadProducts () {
      const productList = localStorage.getItem('product-data')
      if (productList) {
        this.list = JSON.parse(productList)
      }
      this.loaded = true
  },
    },
    filterProducts (searchText) {
      return this.list.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
    }
  })
