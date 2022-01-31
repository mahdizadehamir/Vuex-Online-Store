export default {
    namespaced: true,
    state: () => ({
        selectedItems: [],
        basketItems: [],
        counter: {},
    }),
    // getters is change the value of States
    getters: {
        deleteItem: (state) => (payload) => {
            // first find my elemet Id and Then delete it from Basket Items
            const findElementId = (element) => {
                return element.id === payload.id
            }
            const elementId = state.basketItems.findIndex(findElementId)
            state.basketItems.splice(elementId, 1)
        },
    },

    mutations: {
        //
        addToCounter(state, payload) {
            state.selectedItems.push(payload)
            console.log(state.selectedItems)

            const counts = {}
            for (let i = 0; i < state.selectedItems.length; i++) {
                if (counts[state.selectedItems[i].id]) {
                    counts[state.selectedItems[i].id] += 1
                } else {
                    counts[state.selectedItems[i].id] = 1
                }
            }
            //copying counts object to BasketItems
            for (let product in counts) {
                state.basketItems.push({
                    id: parseInt(product),
                    qun: counts[product],
                })
                // if(state.basketItems.length > 4){
                // state.basketItems.shift()}
            }
            state.basketItems = state.basketItems
                .slice()
                .reverse()
                .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
                .reverse()
            console.log(state.basketItems)
        },
        updateCounter(state, payload) {
            // const findItems = state.basketItems.findIndex(x => (x.id === payload.id))
            // state.basketItems[findItems].qun = payload.qun
            state.counter = payload
            console.log(state.payload)
        },
    },

    actions: {
        //
    },
}
