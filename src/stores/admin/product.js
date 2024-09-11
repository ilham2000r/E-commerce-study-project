
import { defineStore } from 'pinia'

const img = 'https://img.freepik.com/free-vector/stack-three-sacks-cartoon-sticker_1308-89879.jpg?w=740&t=st=1725131776~exp=1725132376~hmac=c7821939528e35b11488193b81c46ce2d5c825a80e1730650aef4e6bdcd84337'

export const useAdminProductStore = defineStore('admin-product', {
    state: () => ({
        list: [
            {
                name: 'Nike Air Jordan 1 Low OG "Wolf Grey',
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2723cf61-69b2-4ba7-b979-6b93d19afd53/AIR+JORDAN+1+RETRO+LOW+OG.png',
                price: 5400,
                size: 0,
                brand: 'nike',
                status: 'newArrival',
                quantity: 200,
                updatedAt: (new Date()).toISOString()
            }
        ],
        loaded: false
    }),
    actions: {
        loadProduct () {
            const products = localStorage.getItem('admin-products')
            if (products) {
                this.list = JSON.parse(products)
                this.loaded = true
            }
        },
        getProduct (index) {
            if (!this.loaded) {
                this.loadProduct()
            }
            return this.list[index]
        },
        addProduct (productData) {
            productData.remainQuantity = productData.quantity
            productData.updatedAt = (new Date()).toISOString()
            this.list.push(productData)
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        },
        updateProduct (index, productData) {
            this.list[index].name = productData.name
            this.list[index].imageUrl = productData.imageUrl
            this.list[index].price = productData.price
            this.list[index].quantity = productData.quantity
            this.list[index].remainQuantity = productData.remainQuantity
            this.list[index].status = productData.status
            this.list[index].updatedAt = (new Date()).toISOString()
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        },
        removeProduct (index) {
            this.list.splice(index, 1)
            localStorage.setItem('admin-products', JSON.stringify(this.list))
        }
    }
})
  