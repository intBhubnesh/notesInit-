## Redux

### History
It all stated with a pain of assin props from outter parrent to inner most child
1. To which the facbook developed the solution for the provoding state management problem called Flux
    flux was better than context API as it has the concept of data Flow
        ` Data Flow : Paradim of program that state there should the structured way to storing and retriving the data with greater abstaction to avoid overwritting issues in state updation
2. But the Flux being a new frame work address the issue but can't solve them
    the came redux which was the upgraded version of flux where they addresed few more paradims like
        a. the state should never be mulutated
        b. functionality of props should be updated only by reducers
        c. Single variable of truth to store all the props
3. Redux did solve the problem but there long process to setup and configure the redux in react
    then came redux-toolkit which possed a higher level of abstraction which allow developer to setup
    redux with easy and made the state management easy.

Redux : Redux is a state management liberary similar to react
react-redux : It is a liberary for the bridging the Core Redux liberary to react project for state management


## Concepts


1. Store : it is the global container where all of our variable states will be stored
2. reduces : these are functions that allow the manupulation of the data in the store
3. useSelector : extract the data to from the storage state
4. useDispatcher : displatch action to a state storage


## Steps to configure the reduxTollKit for the project
1. Install the 2 liberary
    npm install @reduxjs/toolkit
    npm install react-redux

2. create a store file in app folder
    // import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })

export default {}

3. create the Slice in feature
        import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'Project name',
  initialState: { }, // intial state can be a object or any other dataType
  reducers: { // declare the functionality of the ruducers, which are the collection of the variable and function
    increment: (state) => {
        // by default all the section has access two parameter
            { state : access to inital state,
              action : parameters passed from the application }
        //
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload // allows you to pass arbitrary data along with the action, which makes it  easy to add new features or modify existing ones without changing the underlying infrastructure
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer