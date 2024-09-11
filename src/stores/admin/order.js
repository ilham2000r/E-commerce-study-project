import { defineStore } from 'pinia'

export const useAdminOrderStore = defineStore('admin-order', {
    state: () => ({
        list: [
            {   
                no: 'A112234',
                customerName: 'นายทดสอบ นะ',
                totalPrice: 9400,
                paymentStatus: 'Payment Completed',
                address: '111/892 Nonthaburi Thailand 99999',
                paymentMethod: 'Credit card',
                updatedAt: '9/15/2023, 11:50:24 PM',
                products: 
                [
                    {
                        name: 'Nike Air Jordan 1 Low OG "Wolf Grey',
                        imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2723cf61-69b2-4ba7-b979-6b93d19afd53/AIR+JORDAN+1+RETRO+LOW+OG.png',
                        price: 5400,
                        size: 11,
                        brand: 'nike',
                        updatedAt: (new Date()).toISOString()
                    },
                    {
                        name: 'Adidas Superstar Original',
                        imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg',
                        price: 4000,
                        size: 11,
                        brand: 'adidas',
                        updatedAt: (new Date()).toISOString()
                    }
                ]
            }
        ]
        }),
        actions: {
            getOrder (index) {
                return this.list[index]
        }
    }
})