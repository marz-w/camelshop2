<script>

  export default {
    data() {
      return {
          image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
              {
                  itemNumber: 1,
                  itemName : "Sweets",
                  itemPrice : 5,
                  itemQuantity : 30,
                  itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
              },
              {
                  itemNumber: 27466,
                  itemName : "Lollipop",
                  itemPrice : 10,
                  itemQuantity : 4,
                  itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
              }
          ],
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>

<template>
  <!-- Carousel -->
  <v-card
    class="mx-auto"
    width="1000"
  >
    <v-carousel>
        <v-carousel-item
            src="../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg"
            cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/customerbox-aXq1oCCjlVM-unsplash.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
  </v-card>
  <v-spacer></v-spacer>
  <!-- App Description -->
  <v-card align="center">
    <v-card-item>
      <v-card-title>Welcome to the Camel Candy Shop</v-card-title>
      <v-card-subtitle>This is your one stop shop for candies, sweets, chocolates, and so much more </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      Our shop stocks a variety of confectionery for your everyday needs. Indulge your sweet tooth at our online candy shop, 
      where whimsical treats and classic favorites await! Discover a treasure trove of colorful confections, 
      from gourmet chocolates to nostalgic candies that bring back fond memories. 
      Whether you're craving something chewy, crunchy, or melt-in-your-mouth delicious, 
      we have the perfect sugary delight to satisfy every craving. 
      Treat yourself or surprise a loved one with a gift box filled with joyous sweetness delivered right to your doorstep. 
      Welcome to a world of delightful flavors and irresistible treats—browse, click, and let the sweetness begin!
    </v-card-text>
  </v-card>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
  <h3 class="text-center">What our customers say</h3>
  <v-divider></v-divider>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Ann Chemutai"
        text="I loved the engagement from the sales person. very informative and quick delivery!"
        title="Good customer service"
      ></v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Fast delivery!
        </template>
        <template v-slot:subtitle>
          Barack Obama
        </template>
        <template v-slot:text>
          I recieved my order on time, will definitely be ordering again
        </template>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Wide variety</v-card-title>
          <v-card-subtitle>Wangari Mathai</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          I love the diversity in the options, I got some candy I haven't seen in normal shops.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>