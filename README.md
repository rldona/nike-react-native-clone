# Nike React Native clone

![alt text](./src/assets/images/github/github-preview.png 'App preview')

### Start local db server

```terminal
yarn serve-database
```

```terminal
yarn serve-database-delay
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
- [x] Modify the 'Button' component so that it accepts different sizes: small, medium and large.
- [ ] Modify the 'Product' component to accept different sizes: small, medium and large.
- [ ] Add Formik and Yup for the validation of the forms.
- [ ] Add Firebase ReactNative for login authentication.
- [x] Validate React Query for asynchronous calls from the store.
- [x] Add HTTP calls (axios) from the 'Horizontal Gender Selector'.
- [ ] Add skeleton of presentation of products and favorites.
- [x] Add message when there are no saved favorites + 'Buy now' button that redirects to the main store (ShopScreen).
- [x] Add empty 'Shopping cart' message + 'Buy now' button that redirects to the main store (ShopScreen).
- [ ] Add message (modal) indicated that a product has been added to the shopping cart.
- [ ] Create product item for the shopping cart.
- [ ] Add horizontal slide functionality in shopping cart for product item to: 1. Save to favorites and 2. Remove from shopping cart
- [ ] Create promotion component. Validate a fake promotion.
- [ ] Create subtotal and total component of the purchase made.
- [x] Create 'Product List'
- [x] Create 'Product Detail' screen
- [ ] Create the filtering modal for the 'Product List' screen
- [ ] Modify horizontal filtering (genders: Man, Woman and Children) so that it also serves to filter the list of products (All, Sneakers, Top parts, etc)
- [x] Create 'Search' page + animations
- [x] Create 'Profile' page

#### API

- [x] Add Axios provider
- [x] Add Axios requests
- [x] Filter Products by gender

#### DB

- [x] Add product list (products)

#### IMPROVE

- [ ] Modify the transition between screens (multi-stack).
