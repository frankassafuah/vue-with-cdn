var app = new Vue({
    el: '#app',
    data() {
        return {
            brand: 'Vue Mastery',
            product: 'socks',
            Image: '/vmSocks-green-onWhite.jpeg',
            inventory: 9,
            details: ["80% Coton", "20% Polyester", "Gender-neutral"],
            varients: [{
                varientId:2234, 
                varientColor: "green",
                varientImage: '/vmSocks-green-onWhite.jpeg'
            },
            {
                varientId: 2235,
                varientColor: "blue",
                varientImage: 'vmSocks-blue-onWhite.jpeg'
            }
        ],

        cart:0,
        }
    },

    methods: {
        addToCart: function(){
            this.cart +=1
        },

        updateProduct: function(varientImage) {
            this.Image = varientImage
        }
    },

    computed: {
        title() {
            return this.brand + " " + this.product
        }
    }


    })    
