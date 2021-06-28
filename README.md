# Nike React Native clone

### Start local db server

```terminal
yarn serve-database
```

### Install dependencies

```terminal
yarn install
```

### Start the application

```terminal
npx react-native run-ios --simulator="iPhone 12 Pro"
```

```terminal
npx react-native run-ios --simulator="iPhone 12 Pro" --configuration Release
```

### Testing

```terminal
yarn start testing
```

### TODO

#### App

- [ ] Add initial splash
- [ ] Create the 'Login' screen
- [ ] Create the 'Registration' screen
- [ ] Create the 'Remember password' screen
- [ ] Modify the 'Button' component so that it accepts different sizes: small, medium, large and extra-large.
- [ ] Modify the 'Product' component to accept different sizes: small, medium, large and extra-large.
- [ ] Add Formik and Yup for the validation of the forms.
- [ ] Add Firebase ReactNative for login authentication.
- [ ] Validate React Query for asynchronous calls from the store.
- [ ] Add HTTP calls (axios) from the 'Horizontal Gender Selector'.
- [ ] Add skeleton of presentation of products and favorites.
- [ ] Add message when there are no saved favorites + 'Buy now' button that redirects to the main store (ShopScreen).
- [ ] Add empty 'Shopping cart' message + 'Buy now' button that redirects to the main store (ShopScreen).
- [ ] Add message (modal) indicated that a product has been added to the shopping cart.
- [ ] Create product item for the shopping cart.
- [ ] Add horizontal slide functionality in shopping cart for product item to: 1. Save to favorites and 2. Remove from shopping cart
- [ ] Create promotion component. Validate a fake promotion.
- [ ] Create subtotal and total component of the purchase made.
- [ ] Create 'Product List'
- [ ] Create 'Product Detail' screen
- [ ] Create the filtering modal for the 'Product List' screen
- [ ] Modify horizontal filtering (genders: Man, Woman and Children) so that it also serves to filter the list of products (All, Sneakers, Top parts, etc)
- [ ] Create 'Search' page + animations
- [ ] Create 'Profile' page

#### BUGs

- [ ] Modify the transition between screens (multi-stack).

#### API

- [ ] Add Axios provider
- [ ] Add Axios requests
- [ ] Filter Products by gender

#### DB

- [ ] Add product list (products)
