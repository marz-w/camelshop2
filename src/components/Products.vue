<template>
    <h1>Confectionery</h1>
    <div>
        <v-row>
        <v-col cols="12" md="4"  v-for="product in stockDetails" :key=product>     
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
                <v-img
                    height="250"
                    :src="product.itemImage"
                    cover
                ></v-img>

                <v-card-item>
                    <v-card-title>{{product.itemName}}</v-card-title>
                </v-card-item>

                <v-card-text>
                    <div class="my-4 text-subtitle-1">{{product.itemPrice}}</div>
                    <div>{{ product.description }}</div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions>
                    <v-btn
                        color="deep-purple-lighten-2"
                        text="Add to Cart"
                        block
                        border
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </div>

</template>
<script>
export default {
    data(){
        return{
            products: [1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Chocolates",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Crisps",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Popcorn",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Bites",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Dried Fruit",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            },
            {
                itemNumber: 27466,
                itemName : "Macaroons",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
            ,
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
                description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

            }
        ],
        }
    },
    methods(){

    }
}
</script>