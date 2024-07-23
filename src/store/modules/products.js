import axios from 'axios'

const state = {
    stockDetails : [
		{
			itemNumber: 1,
			itemName : "Sweets",
			itemPrice : 5,
			itemQuantity : 0,
			itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg',
			description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
		},
		{
			itemNumber: 27466,
			itemName : "Lollipop",
			itemPrice : 10,
			itemQuantity : 0,
			itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',
			description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"

		}
		,
		{
			itemNumber: 27466,
			itemName : "Chocolates",
			itemPrice : 10,
			itemQuantity : 0,
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
	allProducts: []
}
const getters = {
	stock: (state) => state.allProducts,
}
const actions = {
	
	async fetchProducts({ commit }) {
		try {
		  const data = await axios.get(
			"https://camelshop2backend-1.onrender.com" // base url + endpoint
		  );
		  commit("SET_PRODUCTS", data.data);
		} catch (error) {
		  alert(error);
		  console.log(error);
		}
	  },

}
const mutations = {
	SET_PRODUCTS (state, allProducts) {
		state.allProducts = allProducts //this will modify the all products state
	}
}
export default {
	state,
	getters,
	actions,
	mutations
}