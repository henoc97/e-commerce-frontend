import { configureStore } from '@reduxjs/toolkit';
import addressReducer from '../slices/address.slice';
import auditLogReducer from '../slices/audit-log.slice';
import cartItemReducer from '../slices/cart-item.slice';
import cartReducer from '../slices/cart.slice';
import categoryReducer from '../slices/category.slice';
import marketplaceReducer from '../slices/marketplace.slice';
import newsletterSubscriptionReducer from '../slices/newsletter-subscription.slice';
import notificationReducer from '../slices/notification.slice';
import orderItemReducer from '../slices/order-item.slice';
import orderReducer from '../slices/order.slice';
import paymentReducer from '../slices/payment.slice';
import productImageReducer from '../slices/product-image.slice';
import productVariantReducer from '../slices/product-variant.slice';
import productReducer from '../slices/product.slice';
import promotionReducer from '../slices/promotion.slice';
import refundReducer from '../slices/refund.slice';
import reviewReducer from '../slices/review.slice';
import shopReducer from '../slices/shop.slice';
import subscriptionReducer from '../slices/subscription.slice';
import subsiteReducer from '../slices/subsite.slice';
import ticketReducer from '../slices/ticket.slice';
import userActivityReducer from '../slices/user-activity.slice';
import userProfileReducer from '../slices/user-profile.slice';
import userReducer from '../slices/user.slice';
import vendorReducer from '../slices/vendor.slice';

const store = configureStore({
    reducer: {
        address: addressReducer,
        auditLog: auditLogReducer,
        cartItem: cartItemReducer,
        cart: cartReducer,
        category: categoryReducer,
        marketplace: marketplaceReducer,
        newsletterSubscription: newsletterSubscriptionReducer,
        notification: notificationReducer,
        orderItem: orderItemReducer,
        order: orderReducer,
        payment: paymentReducer,
        productImage: productImageReducer,
        productVariant: productVariantReducer,
        product: productReducer,
        promotion: promotionReducer,
        refund: refundReducer,
        review: reviewReducer,
        shop: shopReducer,
        subscription: subscriptionReducer,
        subsite: subsiteReducer,
        ticket: ticketReducer,
        userActivity: userActivityReducer,
        userProfile: userProfileReducer,
        user: userReducer,
        vendor: vendorReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
